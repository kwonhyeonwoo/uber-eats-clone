import React, { useState } from 'react';
import Signup from '../Signup';
import { UserInterface } from '../../../interfaces/list/list.interface';

const SignupContainer = () => {
    const [data, setData] = useState<UserInterface>({
        email: '',
        password: '',
        role: ''
    })
    const ChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setData((current) => ({
            ...current,
            [name]: value
        }))
        console.log('data', data)
    }
    const Submit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const response = await fetch('http://localhost:4000/users/signup', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const responseData = await response.json();
        if (response.ok) {
            console.log('sucess', responseData);
            return responseData;
        }
    }
    return (
        <Signup
            Change={ChangeData}
            Submit={Submit}
        />
    );
};

export default SignupContainer;