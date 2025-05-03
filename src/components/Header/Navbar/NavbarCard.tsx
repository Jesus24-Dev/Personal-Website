function NavbarCard() {

    const goToGit = () => {
        window.location.href = "https://github.com/Jesus24-Dev";
    }

    return (
        <aside className="group flex items-center gap-3 w-fit px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer" onClick={goToGit}>
            <div className="relative">
                <img 
                    src="/img/Avatar.png" 
                    alt="Jesus24-Dev" 
                    className="w-12 h-12 rounded-full border-2 border-lime-400/30 group-hover:border-lime-400/80 transition-all duration-500 object-cover shadow-lg"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-lime-400 rounded-full border-2 border-slate-900"></span>
            </div>
            
            <div className="text-white overflow-hidden">
                <strong className="block font-semibold text-lg group-hover:text-lime-300 transition-colors duration-300">
                    Jesus Sirit
                </strong>
                <p className="text-sm text-white/80 group-hover:text-white/90 -translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                    FullStack Developer
                </p>
            </div>
            
            <svg className="w-5 h-5 text-lime-400 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300" 
                 fill="none" 
                 viewBox="0 0 24 24" 
                 stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </aside>
    );
}

export default NavbarCard;