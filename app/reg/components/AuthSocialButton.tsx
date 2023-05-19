import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({ 
  icon: Icon,
  onClick,
}) => {
  return ( 
    <button
      type="button"
      onClick={onClick}
      className="
        inline-flex
        w-[305px] 
        mb-6
        justify-center 
        rounded-xl
        bg-white 
        px-4 
        py-4 
        shadow-md 
        ring-1 
        ring-inset 
        ring-gray-light
        hover:bg-[#EFEFEF]
        focus:outline-offset-0 text-gray-dark
      "
    >
      <Icon />
    </button>
   );
}
 
export default AuthSocialButton;