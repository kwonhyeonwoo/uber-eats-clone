import React, { useEffect } from 'react';
import Home from '../Home';

const HomeContainer = () => {
    const token = localStorage.getItem('token');
    console.log(token)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4000/users/profile', {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`, // 토큰을 Authorization 헤더에 포함
                }
            })
            const data = await response.json();
            console.log('data', data)
        }
        fetchData();
    }, [token])
    return (
        <Home />
    );
};

export default HomeContainer;