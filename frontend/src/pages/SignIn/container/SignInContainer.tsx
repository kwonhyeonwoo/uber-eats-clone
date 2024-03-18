import React, { useState } from 'react';
import SignIn from '../SignIn';
import { UserInterface, Role } from '../../../interfaces/list/list.interface';
type Signin = {
    email: string;
    password: string;
}
const SignInContainer = () => {
    const [data, setData] = useState<Signin>({
        email: '',
        password: ''
    })
    const ChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setData((current) => ({
            ...current,
            [name]: value
        }));
    }

    const Submit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const response = await fetch('http://localhost:4000/users/signin', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const responseData = await response.json();

        if (response.ok) {
            console.log('data', responseData.access_token)
            localStorage.setItem('token', responseData);
        }
        if (!response.ok) {
            console.log('404', responseData)
        }
    }
    return (
        <SignIn
            Submit={Submit}
            Change={ChangeData}
        />
    );
};

export default SignInContainer;