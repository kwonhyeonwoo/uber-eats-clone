import React from 'react';
import "./css/index.css";
import { Link } from 'react-router-dom';
import UserForm from '../../components/UserForm/UserForm';
import { ErrType } from '../Signup/container/SignupContainer';
type Props = {
    Change: (event: React.ChangeEvent<HTMLInputElement>) => void;
    Submit: (event: React.MouseEvent<HTMLButtonElement>) => void;
    errMsg: ErrType
}
const SignIn = ({ Change, Submit, errMsg }: Props) => {
    console.log('err', errMsg)
    return (
        <main className='signin-page'>
            <section className='signin-section'>
                <div className='signin-wrapper'>
                    <div className='title'>
                        Uber <span className='color-text'>Eats</span>
                    </div>
                    <UserForm
                        content={inputArr}
                        Submit={Submit}
                        ChangeData={Change}
                        text='Login'
                        title='Welcome Back'
                    />
                    <Link className='link-text' to={'/user/signup'}>
                        Already have an account? <span className='link-color'>Account &rarr;</span></Link>
                    {errMsg.existsErr && <div className='err-msg'>{errMsg.existsErr}</div>}
                    {errMsg.passwordErr && <div className='err-msg'>{errMsg.passwordErr}</div>}
                </div>
            </section>
        </main>
    );
};
const inputArr = [
    {
        type: 'email',
        name: 'email',
        placeholder: 'E-mail',
    },
    {
        type: 'password',
        name: 'password',
        placeholder: 'Password',
    },
]
export default SignIn;