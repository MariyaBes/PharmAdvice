'use client';

import Image from "next/image"

const Logo = () => {

    return (
        <Image
            alt="Logo"
            className="md:block ml-8 mt-8"
            height="38"
            width="240"
            src="/images/LOGO.png"
        />
    );
}

export default Logo;