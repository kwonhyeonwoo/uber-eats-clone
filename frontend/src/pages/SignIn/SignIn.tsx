import React from 'react';
import "./css/index.css";
type Props = {
    Change: (event: React.ChangeEvent<HTMLInputElement>) => void;
    Submit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const SignIn = ({ Change, Submit }: Props) => {
    return (
        <main className='signup-page'>
            <section className='signup-section'>
                <div className='signup-wrapper'>
                    <form className='signup-form'>
                        <div className='title'>Login</div>
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
                        <button onClick={Submit} className='button'>Account</button>
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