interface SkillCardProps {
    img: string,
    name: string,
}

function SkillCard({img, name}: SkillCardProps) {
    return (
        <article className="relative bg-slate-800/90 hover:bg-slate-700/90 transition-all duration-300 h-40 w-full flex flex-col justify-center items-center gap-3 p-4 shadow-lg hover:shadow-xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>                 
            <div className="relative z-10 h-16 w-16 flex items-center justify-center p-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-300">
                <img 
                 src={`/svg/tech/${img}.svg`}
                 alt={`${name} logo`}
                 className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110" 
                 />
            </div>           
            <h3 className="relative z-10 text-white font-bold text-xl md:text-2xl tracking-tight text-center">
                {name}
            </h3>
        </article>
    );
}

export default SkillCard;