'use client';

import Image from "next/image"

const Avatar = () => {
    return (
        <div>
            <Image
                alt="User"
                className="hidden md:block ml-auto mr-auto cursor-pointer rounded-full"
                height="30"
                width="30"
                src="/images/usersquare.svg"
            />
        </div>
    );
}

export default Avatar;