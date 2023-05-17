'use client';

import Image from "next/image"
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return (
        <Image
            alt="Logo"
            className="hidden md:block cursor-pointer mr-[422px]"
            height="100"
            width="240"
            src="/images/LOGO.png"
        />
    )
}

export default Logo;