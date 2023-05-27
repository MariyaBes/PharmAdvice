'use client';

import { User } from "@prisma/client";
import UserProfile from "./UserProfile";

interface UserInfoProps {
  data: User;
}

const UserInfo: React.FC<UserInfoProps> = ({ 
  data
}) => {
  return ( 
    <div className="absolute h-[290px] w-[421px] mt-[139px] border-b-[1px] border-b-gray-lightest border-opacity-40 ">
        <UserProfile
            key={data.id}
            data={data}
        />
    </div>
    
  );
}
 
export default UserInfo;