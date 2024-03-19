import React, { useState } from 'react';
import Signup from '../Signup';
import { UserInterface } from '../../../interfaces/list/list.interface';

export type ErrType = {
    existsErr: String;
    passwordErr: string;
}

const SignupContainer = () => {
    const [data, setData] = useState<UserInterface>({
        email: '',
        password: '',
        nickName: '',
        name: '',
        passwordCheck: ''
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
        }))
    }

    const Submit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (data.password !== data.passwordCheck) {
            setError((current) => ({
                ...current,
                passwordErr: '비밀번호가 올바르지 않습니다'
            }))
            return;
        }
        const response = await fetch('http://localhost:4000/users/signup', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
                nickName: data.nickName,
                name: data.name
            })
        })
        const responseData = await response.json();

        if (response.status === 401) {
            setError((current) => ({
                ...current,
                existsErr: responseData.message
            }))
            console.log('err', error)
        }
        return;
    }
    return (
        <Signup
            Change={ChangeData}
            Submit={Submit}
            errMsg={error}
        />
    );
};

export default SignupContainer;