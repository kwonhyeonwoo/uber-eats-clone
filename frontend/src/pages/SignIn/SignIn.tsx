import React from 'react';
type Props = {
    Change: (event: React.ChangeEvent<HTMLInputElement>) => void;
    Submit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const SignIn = ({ Change, Submit }: Props) => {
    return (
        <div>
            <form>
                {inputArr.map(({ type, name, placeholder }, idx) => (
                    <input
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        onChange={Change}
                        key={idx}
                    />
                ))}
                <button onClick={Submit}>Login</button>
                {/* <input type={type} /> */}
            </form>
        </div>
    );
};
const inputArr = [
    {
        type: 'email',
        name: 'email',
        placeholder: '이메일',
    },
    {
        type: 'password',
        name: 'password',
        placeholder: '비밀번호',
    },
]
export default SignIn;