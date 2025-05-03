import Icon from "./Icon";

function IconList() {

    const tech = ['java', 'spring', 'ts', 'node', 'react', 'tailwind', 'git']

    return (
        <aside className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-[90vw]">
            {tech.map((icon) => (
                <div key={icon} className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                    <Icon imgName={icon}/>
                </div>
            ))}
        </aside>
    );
}

export default IconList;