import React, { useEffect, useState } from 'react';
import UserUpdate from '../UserUpdate';
export type Profile = {
    email: string;
    nickName: string;
    name: string;
}
export type Data = {
    email: string;
    nickName: string;
    name: string;
}
export type ErrorType = {
    email: string;
    nickName: string;
}
const UserUpdateContainer = () => {
    const [data, setData] = useState<Data>({
        email: '',
        name: '',
        nickName: ''
    })
    const [profile, setProfile] = useState<Profile>({
        email: '',
        nickName: '',
        name: ''
    })
    const [isError, setIsError] = useState<ErrorType>({
        email: '',
        nickName: ''
    })
    const token = localStorage.getItem('token')
    const ChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setData((current) => ({
            ...current,
            [name]: value
        }))
    }
    const Submit = async (event: React.MouseEvent<HTMLButtonElement>) => {

        event.preventDefault();
        const filterdData = Object.fromEntries(
            Object.entries(data).filter(([_, value]) => value !== '')
        )
        const response = await fetch('http://localhost:4000/users/update', {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(filterdData),
        });
        console.log('ddd', filterdData)
        const responseData = await response.json();
        if (response.status === 400) {
            console.log(responseData)
            setIsError((current) => ({
                ...current,
                email: responseData.message
            }))
        }
        if (response.status === 401) {
            setIsError((current) => ({
                ...current,
                nickName: responseData.message
            }))
        }
        if (response.ok) {
            console.log('responseData', responseData)
            console.log('sucess', responseData)
            localStorage.setItem('token', responseData.token)
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4000/users/profile', {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`, // 토큰을 Authorization 헤더에 포함
                }
            })
            const data = await response.json();
            setProfile({
                email: data.email,
                nickName: data.nickName,
                name: data.name
            });
            console.log('profile', profile)
            console.log(data)
        }
        fetchData();
    }, [token])
    return (
        <UserUpdate
            Submit={Submit}
            ChangeData={ChangeData}
            profile={profile}
            data={data}
            isError={isError}
        />
    );
};

export default UserUpdateContainer;