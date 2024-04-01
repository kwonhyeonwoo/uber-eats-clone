import React from 'react';
import "./css/index.css";

type Props = {
    ChangeData: (event: React.ChangeEvent<HTMLInputElement>) => void;
    Submit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const RestaurantUpload = ({
    ChangeData,
    Submit
}: Props) => {
    return (
        <main className='restaurant-upload-page'>
            <section className='restaurant-upload-section'>
                <div className='restaurant-upload-wrapper'>
                    <form className='restaurant-upload-form'>
                        <input type="text" onChange={ChangeData} />
                        <input type="text" onChange={ChangeData} />
                        <input type="text" onChange={ChangeData} />
                        <button onClick={Submit}>Upload</button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default RestaurantUpload;