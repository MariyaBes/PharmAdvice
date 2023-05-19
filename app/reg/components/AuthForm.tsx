'use client';

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { BsGoogle  } from 'react-icons/bs';

import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";
import Image from 'next/image';
import AuthSocialButton from "./AuthSocialButton";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({ 
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if(variant === 'REGISTER') {
            //
        }
        if (variant === 'LOGIN') {
            ///
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);

    }
    
    return (
        <div className='flex flex-col justify-center min-h-max w-[520px] bg-white rounded-3xl shadow-md items-center m-auto content-evenly z-10'>

                <div className='mb-6'>
                    <h1 className='flex text-xl font-bold font-["Lato"] tracking-wide mb-1 p-1 pt-12 w-[315px] ml-1'>
                        Авторизация в 
                        <p className="border-b-2 border-blue-light uppercase ml-[6px] font-semibold font-['Prompt']">PharmAdvice</p> 
                    </h1>
                    <p className="mt-2 ml-2 font-light text-[13px] font-['Lato'] w-[305px]">Сервис для онлайн-консультаций с фармацевтом</p>
                </div>

                <form className='grid gap-3' onSubmit={handleSubmit(onSubmit)}>
                    {variant === 'REGISTER' && (
                        <Input 
                            id="name"
                            type="Name"
                            placeholder = 'Имя'
                            register={register} 
                            errors={errors} 
                        />
                    )}
                    <Input
                        id="email"
                        type="email"
                        placeholder = 'Email'
                        register={register}
                        errors={errors}
                    />
                    <Input
                        id="password"
                        type="password"
                        placeholder = 'Пароль'
                        register={register}
                        errors={errors}
                    />

                    <Button disabled={isLoading} type='submit'>
                        {variant === 'LOGIN' ? 'Войти' : 'Регистрация'}
                    </Button>
                </form>

                <div className="mt-4">
                    <Image
                     alt="or"
                     className="flex mb-4"
                     height='14'
                     width='303'
                     src='/images/Or.svg'
                     />
                </div>
                
                <div className="mt-2 flex gap-2">
                    <AuthSocialButton 
                        icon={BsGoogle} 
                        onClick={() => socialAction('google')} 
                    />
                </div>

                <div className="flex gap-2 justify-center text-sm mt-2 mb-8 px-2 text-[#9F9F9F] font-['Lato']">
                        <div>
                            {variant === 'LOGIN' ? 'Нет учетной записи?' : 'Уже есть учетная запись?'}
                        </div>
                        <div className="underline cursor-pointer" onClick={toggleVariant}>
                            {variant === 'LOGIN' ? 'Создать аккаунт' : 'Войти'}
                        </div>
                </div>
                
            </div>
    );
}

export default AuthForm;
