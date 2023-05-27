'use client';

import Avatar from "@/app/Avatar";
import useRoutes from "@/app/hooks/useRoutes";
import { User } from "@prisma/client";
import DesktopItem from "./DesktopItem";

interface DesktopSidebarProps {
    currentUser: User;
    data: User;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
    currentUser,
    data
}) => {
    const routes = useRoutes();

    console.log({currentUser});

    return (
        <div className="absolute h-[50px] w-[421px] mt-[89px]">
            <nav className="flex flex-row justify-between float-right">
                <ul role="list" className="flex flex-row items-center space-y-1">
                    {routes.map((item) => (
                        <DesktopItem
                            key={item.label}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                            active={item.active}
                            onClick={item.onClick}
                        />
                    ))}
                </ul>
            </nav>
        
        </div>
    );
}

export default DesktopSidebar;