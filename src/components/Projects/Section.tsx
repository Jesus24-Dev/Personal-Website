import ProjectList from "./ProjectList";

function Section() {
    return (
      <section className="relative py-16 sm:py-20 lg:py-14 w-full">      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-block text-lime-200 font-medium mb-3">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-lime-200">Creative Works</span>
            </h2>
            <div className="w-20 h-1 bg-lime-300 mx-auto"></div>
          </div>      
          <div className="px-0 sm:px-4 lg:px-6">
            <ProjectList />
          </div>
        </div>
      </section>
    );
  }
  
  export default Section;