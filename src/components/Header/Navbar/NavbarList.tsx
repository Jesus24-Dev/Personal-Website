import { ReactNode } from "react";

function NavbarList({children}: {children: ReactNode}) {
    return (
        <ul className="flex justify-evenly grow">
            {children}
        </ul>
    );
}

export default NavbarList;