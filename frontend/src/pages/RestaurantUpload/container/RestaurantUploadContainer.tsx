import React, { useState } from 'react';
import RestaurantUpload from '../RestaurantUpload';

const RestaurantUploadContainer = () => {
    const [data, setData] = useState({

    });
    const ChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {

    }
    const Submit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    return <RestaurantUpload
        ChangeData={ChangeData}
        Submit={Submit}
    />
};

export default RestaurantUploadContainer;