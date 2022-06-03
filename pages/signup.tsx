import React, { ReactElement, useState } from 'react';
import UserPool from '../UserPool';
import { CognitoUserAttribute, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Modal from '../components/utils/modal/Modal';
import TextField from '../components/inputs/textField/TextField';
import Button from '../components/inputs/button/Button';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { login, selectAuthStatus } from '../app/authSlice';
import { NextPageWithLayout } from './page';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { useSelector } from 'react-redux';

interface IAttribute {
    status?: boolean;
    email: string;
    phone_number: string;
    nickname: string;
}

const Signup: NextPageWithLayout = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [nickname, setNickname] = useState("");
    const [signupError, setSignupError] = useState("");
    const [verifyCode, setVerifyCode] = useState("");
    const [codeError, setCodeError] = useState("");
    const [modal, setModal] = useState(false);

    const dispatch = useDispatch();
    const authStatus = useSelector(selectAuthStatus)
    const router = useRouter();

    const onSignupSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();

        try {
            setSignupError("");
            
            const attributeList = []
            const attributeEmail = new CognitoUserAttribute({
                Name: "email",
                Value: email,
            });
            const attributePhoneNumber = new CognitoUserAttribute({
                Name: "phone_number",
                Value: phoneNumber,
            });
            const attributeNickname = new CognitoUserAttribute({
                Name: "nickname",
                Value: nickname,
            });
            
            attributeList.push(attributeEmail)
            attributeList.push(attributePhoneNumber)
            attributeList.push(attributeNickname)

            return await UserPool.signUp(email, password, attributeList, [], (err, result) => {
                if (err) {
                    return setSignupError(err.message || JSON.stringify(err));
                }
                if (result) {
                    return setModal(true);
                }
            })
        } catch (err) {
            if (err instanceof Error) {
                return setSignupError(err.message || JSON.stringify(err));
            }
        }
    }

    const onSignupCodeSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        try {
            setCodeError('');
            if (!verifyCode) {
                return setCodeError('Field must not be empty')
            }
            
            const userData = {
                Username: email,
                Pool: UserPool
            }
            
            const cognitoUser = new CognitoUser(userData);
            return await cognitoUser.confirmRegistration(verifyCode, true, (err, result) => {
                if (err instanceof Error) {
                    return setCodeError(err.message || JSON.stringify(err));
                }
                // Signup Success
                if (result) {
                    const authenticationData = {
                        Username: email,
                        Password: password,
                    }
                    const authenticationDetails = new AuthenticationDetails(authenticationData);
                    cognitoUser.authenticateUser(authenticationDetails, {
                        onSuccess: function (result) {
                            cognitoUser.getUserAttributes(function(err, result) {
                                
                                if (err) {
                                    alert(err.message || JSON.stringify(err));
                                    return;
                                }
                                
                                const attributes: IAttribute = {email: '', phone_number: '', nickname: ''};
                                
                                if (attributes && result) {
                                    for (let i = 0; i < result.length; i++) {
                                        const key = result[i].getName();
                                        if (key === "email" || key === "phone_number" || key === "nickname") {
                                            attributes[key] = result[i].getValue();
                                        }
                                    }
                                    // Login
                                    dispatch(login({email: attributes.email, phoneNumber: attributes.phone_number, nickname: attributes.nickname}));
                                    setModal(false);
                                    return router.push('/focalapp');
                                }
                            });
                        },
                        onFailure: function(err) {
                            alert(err);
                        },
                    })
                }
            })
        } catch (err) {
            if (err instanceof Error) {
                return setCodeError(err.message || JSON.stringify(err));
            }
        }
    }

    return (
        <div className='flex flex-col justify-center bg-primary-700 h-[100vh] p-3'>
            {
                authStatus ? <div>Logged in</div>:
                <form onSubmit={onSignupSubmit} className="flex flex-col items-center w-auto min-h-[472px] mt-20 sm:mt-24 m-auto p-9 bg-primary-400 border-white border-2 shadow-xl">
                    <h1 className='text-xl'>Create Account</h1>
                    <div className='text-highlight my-3'>{signupError}</div>
                    <TextField id='loginEmail' label='Email' value={email} setValue={setEmail}/>
                    <TextField id='loginPhoneNo' label='Phone Number' value={phoneNumber} setValue={setPhoneNumber} />
                    <TextField id='nickname' label='Nickname' value={nickname} setValue={setNickname} />
                    <TextField id='loginPassword' label='Password' value={password} setValue={setPassword} />
                    <Button type='submit'>Submit</Button>
                </form>}
            {
                modal ?
                <div>
                    <Modal className='fixed top-24' bg={true}>
                        <button onClick={() => setModal(false)}>Exit</button>
                        <form onSubmit={onSignupCodeSubmit} className='flex flex-col items-center gap-9'>
                            <h1 className='text-xl'>Verify Email</h1>
                            <h2>Check your email for the verification code</h2>
                            <div>{codeError}</div>
                            <TextField id='verifyCode' label='Verification Code' value={verifyCode} setValue={setVerifyCode} />
                            <Button type='submit'>Submit</Button>
                        </form>
                    </Modal>
                </div>
                : <div></div>         
            }
        </div>
    );
}

Signup.getLayout = function getLayout(page: ReactElement) {
    return (
        <PrimaryLayout>
            {page}
        </PrimaryLayout>
    )
}

export default Signup;