'use client';


import { User } from "@prisma/client";

import UserBox from "./UserBox";

interface UserListProps {
  items: User[];
}

const UserList: React.FC<UserListProps> = ({ 
  items, 
}) => {
  return ( 
    <aside 
      className="
        absolute 
        lg:pb-0
        mt-[420px]
      "
    >
      <div className="px-5 w-[421px]">
        <div className="flex-col">
          <div 
            className="
              text-2xl 
              font-bold 
              text-[#262626]
              py-4 font-['Lato'] tracking-wider 
            "
          >
            Чаты
          </div>
        </div>
        {items.map((item) => (
          <UserBox
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </aside>
  );
}
 
export default UserList;