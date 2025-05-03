import { ReactNode } from "react";

function Header({children}: {children: ReactNode}) {
    return (
        <header className="bg-[url(/img/hero-image.webp)] bg-center bg-cover h-screen">
            <div className="relative bg-gradient-to-b from-slate-950/75 from-30% to-blue-950/75 h-full flex flex-col">
                {children}
            </div>
        </header>
    );
}

export default Header;