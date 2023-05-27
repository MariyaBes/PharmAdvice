'use client';

import Image from "next/image"

const Notification = () => {
    return (
        <div>
            <Image
                alt="Notification"
                className="hidden md:block ml-auto mr-[20px] cursor-pointer"
                height="30"
                width="30"
                src="/images/notification.svg"
            />
        </div>
    );
}

export default Notification;