import React from 'react';
import "./css/index.css";
import { Link } from 'react-router-dom';
import { ErrType } from './container/SignupContainer';
import UserForm from '../../components/UserForm/UserForm';
import { UserInterface } from '../../interfaces/list/list.interface';
type Props = {
    Change: (event: React.ChangeEvent<HTMLInputElement>) => void;
    Submit: (event: React.MouseEvent<HTMLButtonElement>) => void;
    errMsg: ErrType;
    RoleClick?: (item: string) => void;
    data: UserInterface
}
const SignIn = ({ Change, Submit, errMsg, RoleClick, data }: Props) => {
    return (
        <main className='signup-page'>
            <section className='signup-section'>
                <div className='signup-wrapper'>
                    <div className='title'>
                        Uber <span className='color-text'>Eats</span>
                    </div>
                    <UserForm
                        content={inputArr}
                        Submit={Submit}
                        ChangeData={Change}
                        text='Account'
                        title='Welcome Back'
                        type='signup'
                        role={roleArr}
                        RoleClick={RoleClick}
                        data={data}
                    />
                    <Link className='link-text' to={'/user/signin'}>
                        Are you already a member? <span className='link-color'>Login &rarr;</span>
                    </Link>

                    {errMsg.existsErr && <div className='err-msg'>{errMsg.existsErr}</div>}
                    {errMsg.passwordErr && <div className='err-msg'>{errMsg.passwordErr}</div>}
                </div>
            </section>
        </main>
    );
};
const roleArr = ['client', 'owner', 'delivery']

const inputArr = [
    {
        type: 'email',
        name: 'email',
        placeholder: 'E-mail',
    },
    {
        type: 'text',
        name: 'name',
        placeholder: 'Name',
    },
    {
        type: 'text',
        name: 'nickName',
        placeholder: 'Nickname',
    },

    {
        type: 'password',
        name: 'password',
        placeholder: 'Password',
    },
    {
        type: 'password',
        name: 'passwordCheck',
        placeholder: 'Password-Check',
    },
]
export default SignIn;