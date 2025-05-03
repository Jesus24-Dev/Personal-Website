interface NavbarListElementProps {
    linkTo: string;
    content: string;
}


function NavbarListElements({linkTo, content}: NavbarListElementProps) {
    return (
        <li className="group relative active:scale-95 transition-transform">
            <a 
                href={`#${linkTo}`}
                className="font-roboto text-white hover:text-lime-200 transition-colors duration-300 px-4 py-2 block relative font-semibold"
            >
                {content}
                <span className="absolute inset-0 bg-lime-200 opacity-0 group-hover:opacity-10 rounded-md transition-opacity duration-300"></span>
            </a>
        </li>
    );
}

export default NavbarListElements;