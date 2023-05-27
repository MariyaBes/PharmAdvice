
import {  User } from "@prisma/client";

import Avatar from "@/app/Avatar";

interface UserProfileProps {
  data: User
}

const UserProfile: React.FC<UserProfileProps> = ({ 
  data
}) => {
  
  return (
    <div>
        <div className="relative h-[140px] w-[146px] mr-auto ml-auto">
            <Avatar user={data}/>
        </div>

        <div className="mr-auto ml-auto mt-6">
            <p className="text-center font-semibold text-base text-gray-darkvar2 font-['Lato'] tracking-wider">
                {data.name}
            </p>
            <p className="text-center text-[#4b5563] text-sm tracking-wider">{data.email}</p>

            <div className="flex flex-row mt-6 justify-center">
                <p className="pr-8 text-center font-['Lato'] tracking-wide">Возраст: {data.age ?? 'укажите свой возраст'}</p>
                <p className="pr-2 tracking-wide text-center font-['Lato']">Пол: {data.sex ?? 'укажите ваш пол'}</p>
            </div>
        </div>
    </div>


  );
}
 
export default UserProfile;