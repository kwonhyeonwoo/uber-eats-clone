import React from 'react';
import "./css/index.css";
import { Link } from 'react-router-dom';
import { ErrType } from './container/SignupContainer';
import UserUpdate from '../UserUpdate/UserUpdate';
import UserForm from '../../components/UserForm/UserForm';
type Props = {
    Change: (event: React.ChangeEvent<HTMLInputElement>) => void;
    Submit: (event: React.MouseEvent<HTMLButtonElement>) => void;
    errMsg: ErrType;
}
const SignIn = ({ Change, Submit, errMsg }: Props) => {
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
                    />
                    <Link className='link-text' to={'/user/signin'}>

                        Are you already a member? <span className='link-color'>Login &rarr;</span></Link>
                    {errMsg.existsErr && <div className='err-msg'>{errMsg.existsErr}</div>}
                    {errMsg.passwordErr && <div className='err-msg'>{errMsg.passwordErr}</div>}
                    {/* <form className='signup-form'>

                        <div className='sub-title'>Welcome Back</div>
                        {inputArr.map(({ type, name, placeholder }, idx) => (
                            <input
                                type={type}
                                name={name}
                                placeholder={placeholder}
                                onChange={Change}
                                key={idx}
                                className='input'
                            />
                        ))}
                        <button onClick={Submit} className='button'>Login</button>
                        
                    </form> */}
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