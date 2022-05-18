import React, { FormEvent, useState } from 'react';
import UserPool from '../UserPool'
import { CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
import Modal from '../components/utils/modal/Modal';
import TextField from '../components/inputs/textField/TextField';
import { NextPage } from 'next';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [nickname, setNickname] = useState("");
    const [verifyCode, setVerifyCode] = useState("");
    const [signupError, setSignupError] = useState("");
    const [modal, setModal] = useState(true);

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
        <div>
            <h2>Signup Form</h2>
            <form onSubmit={onSignupSubmit} className="flex flex-col w-36 m-auto border-black border-2">
                <div>{signupError}</div>
                <TextField id='loginEmail' label='Email' value={email} setValue={setEmail}/>
                <TextField id='loginPhoneNo' label='Phone Number' value={phoneNumber} setValue={setPhoneNumber} />
                <TextField id='nickname' label='Nickname' value={nickname} setValue={setNickname} />
                <TextField id='loginPassword' label='Password' value={password} setValue={setPassword} />
                <button type='submit'>Submit</button>
            </form>
            {
            modal ?
            <Modal>
                <form onSubmit={onSignupCodeSubmit}>
                    <h2 className='text-xl'>Code has been sent to your email!</h2>
                    <TextField id='verifyCode' label='Verification Code' value={verifyCode} setValue={setVerifyCode} />
                    <button type='submit'>Submit</button>
                </form>
            </Modal>
            : <div></div>         
            }
        </div>
    );
}

export default Signup;