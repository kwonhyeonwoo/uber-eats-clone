import React, { useEffect, useState } from 'react';
import UserUpdate from '../UserUpdate';
type Profile = {
    email: string;
}
const UserUpdateContainer = () => {
    const token = localStorage.getItem('token')
    const [data, setData] = useState({
        email: ''
    })
    const [profile, setProfile] = useState<Profile>({
        email: ''
    })
    const ChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setData((current) => ({
            ...current,
            [name]: value
        }))
    }
    const Submit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const response = await fetch('http://localhost:4000/users/update', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data),
        });
        const responseData = await response.json();
        if (response.ok) {
            console.log('responseData', responseData);
        } else {
            console.log('error', responseData);
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4000/users/profile', {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const responseData = await response.json();
            if (response.ok) {
                setProfile(responseData);
            }
        }
        fetchData();
    }, [token])
    return (
        <UserUpdate
            Submit={Submit}
            ChangeData={ChangeData}
            profile={profile}
            data={data}
        />
    );
};

export default UserUpdateContainer;