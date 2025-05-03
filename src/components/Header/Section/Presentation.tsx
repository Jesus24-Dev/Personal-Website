function Presentation() {
    return (
        <div className="text-center space-y-4">
            <h3 className="text-white text-4xl md:text-5xl opacity-90 animate-fadeIn">
                Hello World! <span className="text-lime-200">It's me</span>
            </h3>
            
            <h1 className="text-7xl md:text-9xl font-bold tracking-tight
                           bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-emerald-400
                           hover:scale-105 transition-transform duration-500 cursor-default">
                Jesus Sirit
            </h1>
            
            <h3 className="text-white text-3xl md:text-4xl font-light animate-pulse-slow">
                FullStack <span className="font-medium text-lime-200">Developer</span>
            </h3>
        </div>
    );
}

export default Presentation;