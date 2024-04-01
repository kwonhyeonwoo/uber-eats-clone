import React, { useState } from 'react';
import SignIn from '../SignIn';
import { ErrType } from '../../Signup/container/SignupContainer';
type Signin = {
    email: string;
    password: string;
}
const SignInContainer = () => {
    const [data, setData] = useState<Signin>({
        email: '',
        password: ''
    })
    const [error, setError] = useState<ErrType>({
        existsErr: '',
        passwordErr: ''
    });
    const ChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setData((current) => ({
            ...current,
            [name]: value
        }));
    }

    const Submit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const response = await fetch('http://localhost:4000/auth/signin', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const responseData = await response.json();
        if (!response.ok) {
            console.log('dddd', responseData)
        }
        if (response.ok) {
            console.log('data', responseData)
            localStorage.setItem('token', responseData.access_token);
        }

    }
    return (
        <SignIn
            Submit={Submit}
            Change={ChangeData}
            errMsg={error}
        />
    );
};

export default SignInContainer;