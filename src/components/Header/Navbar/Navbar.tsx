import NavbarCard from "./NavbarCard";
import NavbarList from "./NavbarList";
import NavbarListElements from "./NavbarListElement";

function Navbar() {
    return (
        <nav className="flex items-center py-4 fixed w-full top-0 right-0 left-0 z-1 bg-slate-950/75 shadow-lg">
            <NavbarCard/>
            <NavbarList>
                <NavbarListElements linkTo='Home' content="Home"/>
                <NavbarListElements linkTo='About me' content="About me"/>
                <NavbarListElements linkTo='Projects' content="Projects"/>
                <NavbarListElements linkTo='Skills' content="Skills"/>  
            </NavbarList>
        </nav>
    );
}

export default Navbar;