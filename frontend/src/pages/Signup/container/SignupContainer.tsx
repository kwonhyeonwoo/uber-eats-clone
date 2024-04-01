import React, { FormEventHandler, useState } from 'react';
import Signup from '../Signup';
import { Role, UserInterface } from '../../../interfaces/list/list.interface';
import { useNavigate } from 'react-router-dom';

export type ErrType = {
    existsErr: String;
    passwordErr: string;
}

const SignupContainer = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<UserInterface>({
        email: '',
        password: '',
        nickName: '',
        name: '',
        role: '',
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
        console.log(data)
    }
    const RoleClick = (item: string) => {
        setData((current) => ({
            ...current,
            role: item
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
        const response = await fetch('http://localhost:4000/auth/signup', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
                nickName: data.nickName,
                name: data.name,
                role: data.role
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
        if (!response.ok) {
            console.log('ddd', responseData)
        }
        if (response.status === 200) {
            console.log('responseData', responseData)
            return navigate('/signin')
        }
        return;
    }
    return (
        <Signup
            Change={ChangeData}
            Submit={Submit}
            errMsg={error}
            RoleClick={RoleClick}
            data={data}
        />
    );
};

export default SignupContainer;