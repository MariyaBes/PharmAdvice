import React from 'react';
import Image from 'next/image'
import Logo from './components/Logo';
import Link from 'next/link';
import AuthFormPharm from './components/AuthFormPharm';

const RegisterPage = () => {
    return (
        <div className='flex flex-col min-h-full max-w-[1920px] bg-pink-light overflow-hidden'>
            <Logo/>

                <Image 
                    alt='Back'
                    className='absolute ml-[630px] float-right h-[927px] z-0'
                    height='1080'
                    width='1290'
                    src='/images/Background.svg'
                />
            
            
            <AuthFormPharm />
        </div>
    );
};

export default RegisterPage;