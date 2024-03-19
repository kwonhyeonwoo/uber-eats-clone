import React from 'react';
import "./css/index.css";
import { Link } from 'react-router-dom';
type Props = {
    Change: (event: React.ChangeEvent<HTMLInputElement>) => void;
    Submit: (event: React.MouseEvent<HTMLButtonElement>) => void;
    errMsg: string | null;
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
                    <form className='signin-form'>

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
                        <Link className='link-text' to={'/user/signup'}>New to Uber? <span className='link-color'>Create on Account</span></Link>
                        {errMsg && <div className='err-msg'>{errMsg}</div>}
                    </form>
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