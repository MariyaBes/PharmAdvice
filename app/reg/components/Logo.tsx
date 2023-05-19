'use client';

import Image from "next/image"
import Link from "next/link";

const Logo = () => {

    return (
        <Link href={'/'}>
            <Image
                alt="Logo"
                className="md:block ml-8 mt-8 cursor-pointer"
                height="38"
                width="240"
                src="/images/LOGO.png"
            />
        </Link>
        
    );
}

export default Logo;