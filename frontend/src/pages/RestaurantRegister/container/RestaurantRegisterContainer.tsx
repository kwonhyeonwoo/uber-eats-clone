import React, { useState } from 'react';
import RestaurantRegister from '../RestaurantRegister';

const RestaurantRegisterContainer = () => {
    const [data, setData] = useState({
        name: '',
        coverImage: '',
        address: '',
        categoryName: [],
    })
    const token = localStorage.getItem('token')
    const Submit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const response = await fetch('http://localhost:4000/restaurants/create-restaurant', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        const responseData = await response.json();
        if (response.ok) {
            console.log('sucess', responseData);
        }
    }
    const ChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setData((current) => ({
            ...current,
            [name]: value,
        }))
        console.log('data', data)
    }
    return (
        <RestaurantRegister
            Submit={Submit}
            ChangeData={ChangeData}
        />
    );
};

export default RestaurantRegisterContainer;