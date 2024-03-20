import React from 'react';
import { Data, ErrorType, Profile } from './container/UserUpdateContainer';
import "./css/index.css"
import UserForm from '../../components/UserForm/UserForm';
import { Link } from 'react-router-dom';
type Props = {
    Submit: (event: React.MouseEvent<HTMLButtonElement>) => void;
    ChangeData: (event: React.ChangeEvent<HTMLInputElement>) => void;
    profile: Profile
    data: Data,
    isError: ErrorType
}
const UserUpdate = ({
    Submit,
    profile,
    isError,
    data,
    ChangeData
}: Props) => {
    const inputArr = [
        {
            type: 'email',
            name: 'email',
            value: profile.email
        },
        {
            type: 'text',
            name: 'name',
            value: profile.name

        },
        {
            type: 'text',
            name: 'nickName',
            value: profile.nickName

        },
    ]
    return (
        <main className='user-update-page'>
            <section className='user-update-section'>
                <div className='user-update-wrapper'>
                    <div className='title'>Edit Profile</div>
                    <UserForm
                        content={inputArr}
                        Submit={Submit}
                        ChangeData={ChangeData}
                        text='Save Profile'
                    />

                </div>
            </section>
        </main >
    );
};
export default UserUpdate