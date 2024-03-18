import React from 'react';

type Props = {
    Change: (event: React.ChangeEvent<HTMLInputElement>) => void;
    Submit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SignUp = ({
    Change,
    Submit
}: Props) => {
    return (
        <main>
            <section>
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
                    <button onClick={Submit}>Account</button>
                    {/* <input type={type} /> */}
                </form>
            </section>
        </main>
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
    {
        type: 'text',
        name: 'role',
        placeholder: 'Role',
    },
]
export default SignUp;