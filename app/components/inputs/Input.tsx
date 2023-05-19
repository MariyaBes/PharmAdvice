'use client';

import clsx from 'clsx';
import { 
    FieldErrors, 
    FieldValues, 
    UseFormRegister 
  } from "react-hook-form";

interface InputProps {
    id: string;
    type?: string;
    placeholder?: string,
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors
    disabled?: boolean;
}
  
const Input: React.FC<InputProps> = ({
    id,
    register,
    required,
    errors,
    type = 'text',
    placeholder = 'text',
    disabled,
}) => {
    return (
        <div>
            <input className={clsx(`block text-sm w-[305px] pl-5 py-2.5 px-3 ring-1 ring-gray-lightest text-slate-500 rounded-lg font-["Lato"] shadow`, errors[id] && 'focus:ring-rose-500', disabled && 'opacity-50 cursor-default')} placeholder={placeholder} type={type} id={id} autoComplete={id} disabled={disabled} {...register(id, { required })}/>

            {/* <input className='block text-sm w-[303px] pl-5 py-2 mt-3 px-3 ring-1 ring-gray-lightest text-slate-500 rounded-lg font-["Lato"] shadow' placeholder='Фамилия' type="text" id='last_name'/>

            <input type="email" className='block text-sm w-[303px] pl-5 py-2 mt-3 px-3 ring-1 ring-gray-lightest text-slate-500 rounded-lg font-["Lato"] shadow' placeholder='Почта' id='email'/>

            <input type="password" className='block text-sm w-[303px] pl-5 py-2 mt-3 px-3 ring-1 ring-gray-lightest text-slate-500 rounded-lg font-["Lato"] shadow' placeholder='Пароль' id='password'/> */}

        </div>        
    );
}

export default Input;