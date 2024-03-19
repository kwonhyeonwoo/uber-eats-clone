import React from 'react';
import "./css/index.css"

type Props = {
    Submit: (event: React.MouseEvent<HTMLButtonElement>) => void,
    ChangeData: (event: React.ChangeEvent<HTMLInputElement>) => void,

}
const RestaurantRegister = ({
    Submit,
    ChangeData
}: Props) => {
    return (
        <main className='restaurant-register-page'>
            <section className='restaurant-register-section'>
                <div className='restaurant-registerr-wrapper'>
                    <form className='restaurant-register-form'>
                        <input onChange={ChangeData} type="text" name='categoryName' placeholder='categoryname' />
                        <input onChange={ChangeData} type="text" name='address' placeholder='address' />
                        <input onChange={ChangeData} type="text" name='name' placeholder='name' />
                        <input onChange={ChangeData} type="text" name='coverImage' placeholder='coverImage' />
                        <button onClick={Submit}>register</button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default RestaurantRegister;