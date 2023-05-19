import Avatar from "../Avatar";
import Container from "../Container";
import Logo from "./Logo";
import Menu from "./Menu";
import Notification from "./Notification";
import Link from "next/link";


const Navbar = () => {
    return (
        <div className="fixed w-full bg-white z-15 shadow-sm">
            <div className="flex py-[4.5px] border-gray-lightest border-b-[1px] border-opacity-30">
                <p className="text-[11px] xl:px-[365px] md:px-10 sm:px-2 font-normal font-['Lato']">Местоположение: Республика Крым</p>
            </div>

            <div className="py-3 border-b-[1px] border-gray-lightest border-opacity-75">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo/>
                        <Menu/>
                        <Notification/>
                        <Link href='/reg'><Avatar/>
                        </Link>
                        
                    </div>
        
                </Container>
            </div>
        </div>
    );
}

export default Navbar;