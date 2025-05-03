import SkillCard from "./SkillCard";

function Section() {

    const techData = [
        { img: 'java', name: 'Java' },
        { img: 'spring', name: 'Spring Boot' },
        { img: 'node', name: 'NodeJS' },
        { img: 'express', name: 'ExpressJS' },
        { img: 'typescript', name: 'TypeScript' },
        { img: 'react', name: 'React' },
        { img: 'tailwind', name: 'TailwindCSS' },
        { img: 'js', name: 'JavaScript' },
        { img: 'css', name: 'CSS' },
        { img: 'html', name: 'HTML' },
        { img: 'git', name: 'Git' },
        { img: 'postgresql', name: 'PostgreSQL' },
        { img: 'mysql', name: 'MySQL' },
        { img: 'sqlite', name: 'SQLite' }
    ];

    return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <header className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-3">
                Skills
            </h2>
            <div className="w-20 h-1 bg-slate-800 mx-auto"></div>
        </header>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-2.5 md:gap-3">
            {techData.map((tech, index) => (
                <SkillCard key={index} img={tech.img} name={tech.name}/>
            ))}

        </div>
    </section>
    );
}

export default Section;