'use client';

import { User } from "@prisma/client";
import Image from "next/image"

interface AvatarProps {
    user?: User;
}

const Avatar: React.FC<AvatarProps> = ({
    user
}) => {
    return (
        <div className="flex image">
            <div className="relative h-[30px] w-[30px] md:block ml-auto mr-auto">
                
            </div>
            <Image
                    // alt="User"
                    // className="hidden md:block ml-auto mr-auto cursor-pointer "
                    // height="30"
                    // width="30"
                    // src="/images/placeholder.jpg"
                    fill
                    src={user?.image || '/images/placeholder.jpg'}
                    alt="Avatar"
                    className="rounded-full"
                />
            
        </div>
        
    );
}

export default Avatar;