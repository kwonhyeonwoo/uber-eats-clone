import React from 'react';
import "./css/index.css";
type Props = {
    content: {
        type: string;
        name: string;
        value?: string;
        placeholder?: string;
    }[],
    Submit: (event: React.MouseEvent<HTMLButtonElement>) => void;
    ChangeData: (event: React.ChangeEvent<HTMLInputElement>) => void;
    text: string;
    title?: string;
}
const UserForm = ({
    content,
    Submit,
    ChangeData,
    text,
    title
}: Props) => {
    return (
        <form className='user-update-form'>
            {title && <div className='sub-title'>{title}</div>}

            {content.map(({ type, name, value, placeholder }, idx) => (
                <input
                    className='input'
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    key={idx}
                />
            ))}
            <button onClick={Submit} className='button'>{text}</button>
        </form>
    );
};

export default UserForm;