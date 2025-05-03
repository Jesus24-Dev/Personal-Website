import {useState} from 'react'
import NavbarCard from "./NavbarCard";
import NavbarList from "./NavbarList";
import NavbarListElements from "./NavbarListElement";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex flex-wrap items-center justify-between py-4 fixed w-full top-0 right-0 left-0 z-50 bg-slate-950/95 backdrop-blur-sm px-4 lg:px-8">
            <NavbarCard/>
            
            <button 
                className="lg:hidden p-2 rounded-md text-lime-400 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>
            
            <div className={`${isOpen ? 'block' : 'hidden'} w-full lg:flex lg:w-auto lg:items-center transition-all duration-300`}>
                <NavbarList>
                    <NavbarListElements linkTo='Home' content="Home"/>
                    <NavbarListElements linkTo='About' content="About me"/>
                    <NavbarListElements linkTo='Projects' content="Projects"/>
                    <NavbarListElements linkTo='Skills' content="Skills"/>  
                </NavbarList>
            </div>
        </nav>
    );
}


export default Navbar;