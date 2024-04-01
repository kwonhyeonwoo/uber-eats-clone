import React, { FormEventHandler } from 'react';
import "./css/index.css";
import { UserInterface } from '../../interfaces/list/list.interface';
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
    type?: 'signup';
    role?: string[];
    RoleClick?: (item: string) => void;
    data?: UserInterface
}
const UserForm = ({
    content,
    Submit,
    ChangeData,
    text,
    title,
    type,
    role,
    RoleClick,
    data
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
                    onChange={ChangeData}
                />
            ))}
            {type && type === 'signup' && role && <div className='role-wrapper'>
                {role.map((item, idx) => (
                    <button name={item} type='button' onClick={() => {
                        if (RoleClick) {
                            RoleClick(item);
                        }
                    }} className={`role-button ${item === data?.role && 'selected-role'}`} key={idx}>{item}</button>))}
            </div>}

            <button onClick={Submit} className='button'>{text}</button>
        </form>
    );
};

export default UserForm;