import Logo from "./Logo";
import Menu from "./Menu";
import Notification from "./Notification";
import Link from "next/link";
import Container from "@/app/Container";
import Avatar from "@/app/Avatar";

const Navbar = () => {
    return (
        <div className="fixed w-full bg-white z-15 shadow-sm navbar">
            <div className="flex py-[4.5px] border-gray-lightest border-b-[1px] border-opacity-30">
                <Link href={'/pharmacist'}>
                    <p className="text-[11px] xl:px-[365px] md:px-10 sm:px-2 font-normal font-['Lato'] cursor-pointer">Для фармацевтов</p>
                </Link>
            </div>

            <div className="py-3 border-b-[1px] border-gray-lightest border-opacity-75">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                            <Logo/>
                        
                        <Menu/>
                        <Notification/>
                        <div className="relative h-[30px] w-[30px] md:block">
                            <Link href='/reg'>
                                <Avatar/>
                            </Link>
                        </div>
                    
                        
                    </div>
        
                </Container>
            </div>
        </div>
    );
}

export default Navbar;