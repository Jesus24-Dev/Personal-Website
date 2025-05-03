import { ReactNode } from "react";

function NavbarList({children}: {children: ReactNode}) {
    return (
        <ul className="font-roboto flex flex-col lg:flex-row justify-center lg:justify-evenly items-center gap-2 lg:gap-4 mt-4 lg:mt-0 w-full">
            {children}
        </ul>
    );
}

export default NavbarList;