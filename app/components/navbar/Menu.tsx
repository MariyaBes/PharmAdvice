'use client';

import Image from "next/image"

const Menu = () => {
    return (
        <div className="hidden lg:flex lg:items-center mr-auto">
            <a className="text-[14px] font-normal cursor-pointer border-b-2 border-transparent hover:border-blue-light tracking-wide transition duration-500 ease-in-out">Мои рецепты</a>
            <Image
                alt="Palka"
                className="hidden md:block ml-[30px] mr-[30px]"
                height="15"
                width="1"
                src="/images/palka.svg"
            />
            <a className="text-[14px] cursor-pointer border-b-2 border-transparent hover:border-blue-light tracking-wide transition duration-500 ease-in-out">Фармацевты</a>
            <Image
                alt="Palka"
                className="hidden md:block ml-[30px] mr-[30px]"
                height="15"
                width="1"
                src="/images/palka.svg"
            />
            <a className="text-[14px] cursor-pointer border-b-2 border-transparent hover:border-blue-light tracking-wide transition duration-500 ease-in-out">О нас</a>
        </div>
    );
}


export default Menu;