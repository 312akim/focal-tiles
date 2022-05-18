import React, { FormEvent, useState } from 'react';
import UserPool from '../UserPool'
import { CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
import Modal from '../components/utils/modal/Modal';
import TextField from '../components/inputs/textField/TextField';
import { NextPage } from 'next';
import Button from '../components/inputs/button/Button';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [nickname, setNickname] = useState("");
    const [verifyCode, setVerifyCode] = useState("");
    const [signupError, setSignupError] = useState("");
    const [modal, setModal] = useState(true);
    const [formError, setFormError] = useState("");

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
                Value: `+1${phoneNumber}`,
            });
        const attributeNickname = new CognitoUserAttribute({
            Name: "nickname",
            Value: nickname,
        });
        
        attributeList.push(attributeEmail)
        attributeList.push(attributePhoneNumber)
        attributeList.push(attributeNickname)

        UserPool.signUp(email, password, attributeList, [], (err, result) => {
            if (err) {
                //set error
                setSignupError(err.message)
            }
            console.log(result);
            if (result) {
                console.log(result.user);
                setModal(true);
            }
        })
        } catch (err) {
            console.log(err);
        }
    }

    const onSignupCodeSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        setFormError('')
        if (!formError) {
            return setFormError('Field must not be empty')
        }

        const userData = {
            Username: email,
            Pool: UserPool
        }

        const cognitoUser = new CognitoUser(userData);
        cognitoUser.confirmRegistration('123456', true, (err, result) => {
            if (err) {
                console.log(err)
            }
            console.log(result)
        })
    }

    return (
        <div className='flex flex-col justify-center'>
            <h2>Signup Form</h2>
            <form onSubmit={onSignupSubmit} className="flex flex-col items-center w-auto m-auto p-9 border-black border-2">
                <div>{signupError}</div>
                <TextField id='loginEmail' label='Email' value={email} setValue={setEmail}/>
                <TextField id='loginPhoneNo' label='Phone Number' value={phoneNumber} setValue={setPhoneNumber} />
                <TextField id='nickname' label='Nickname' value={nickname} setValue={setNickname} />
                <TextField id='loginPassword' label='Password' value={password} setValue={setPassword} />
                <Button type='submit'>Submit</Button>
            </form>
            {
            modal ?
            <div>
                <Modal className='fixed top-24' bg={true}>
                    <button onClick={() => setModal(false)}>Exit</button>
                    <form onSubmit={onSignupCodeSubmit} className='flex flex-col items-center gap-9'>
                        <h2 className='text-xl'>Code has been sent to your email!</h2>
                        <TextField id='verifyCode' label='Verification Code' value={verifyCode} setValue={setVerifyCode} />
                        <Button type='submit'>Submit</Button>
                        <div>{formError}</div>
                    </form>
                </Modal>
            </div>
            : <div></div>         
            }
        </div>
    );
}

export default Signup;