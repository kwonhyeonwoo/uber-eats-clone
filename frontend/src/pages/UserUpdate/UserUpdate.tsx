import React from 'react';
type Props = {
    Submit: (event: React.MouseEvent<HTMLButtonElement>) => void;
    ChangeData: (event: React.ChangeEvent<HTMLInputElement>) => void;
    profile: {
        email: string;
    },
    data: {
        email: string;
    }
}
const UserUpdate = ({
    Submit,
    profile,
    data,
    ChangeData
}: Props) => {
    console.log('profile', profile)
    return (
        <main className='user-update-page'>
            <section className='update-section'>
                <div className='update-wrapper'>
                    <form className='update-form'>
                        <input type="email" name='email' onChange={ChangeData} defaultValue={profile.email} />
                        <button onClick={Submit}>Update</button>
                    </form>
                </div>
            </section>
        </main >
    );
};

export default UserUpdate;