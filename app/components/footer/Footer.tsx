'use client';

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="flex flex-col max-w-[1920px] mx-auto bg-[#EEEEEE] min-h-min">
            <div className="xl:px-[365px] md:px-10 sm:px-2 border-b-[1px] border-b-[#B8B8B8]">
                <Image
                    alt='logo'
                    className='flex m-auto mt-[21px] mb-[21px]' 
                    height='38'
                    width='240'
                    src='/images/LOGO.png'
                />
            </div>

            <div className="flex flex-row m-auto mt-[42px] mb-11">
                <Link href='/'>
                    <span className="font-semibold font-['Lato'] tracking-wider text-xl text-gray-lightest mr-[43px] cursor-pointer hover:text-gray-darkvar2">О НАС</span>
                </Link>
                
                <span className="font-semibold font-['Lato'] tracking-wider text-xl text-gray-lightest mr-[43px] cursor-pointer hover:text-gray-darkvar2">МОИ РЕЦЕПТЫ</span>
                <span className="font-semibold font-['Lato'] tracking-wider text-xl text-gray-lightest mr-[43px] cursor-pointer hover:text-gray-darkvar2">КОНТАКТЫ</span>
                <span className="font-semibold font-['Lato'] tracking-wider text-xl text-gray-lightest cursor-pointer hover:text-gray-darkvar2">FAQ</span>
            </div>

            <div className="m-auto text-center font-['Lato'] text-gray-lightest font-semibold tracking-wide text-sm">
                <p className="mb-[11px]">ГБОУВО РК КИПУ имени Февзи Якубова</p>

                <p className="mb-[28px]">ИНИЦИАТИВНАЯ РАЗРАБОТКА В РАМКАХ ИНТЕНСИВА «ОТ ИДЕИ К ПРОТОТИПУ - ВЕСНА 2023»</p>
            </div>

        </div>
       
    );
}

export default Footer;