import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineLogout } from 'react-icons/ai';
import useConversation from "./useConversation";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(() => [
    { 
      label: 'Edit', 
      href: '/edit', 
      icon: AiOutlineEdit,
      active: pathname === '/edit' || !!conversationId
    },
    {
      label: 'Logout', 
      onClick: () => signOut(),
      href: '/reg',
      icon: AiOutlineLogout, 
    }
  ], [pathname, conversationId]);

  return routes;
};

export default useRoutes;