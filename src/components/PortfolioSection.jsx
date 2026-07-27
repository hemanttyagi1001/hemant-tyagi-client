const projects = [
  {
    title: 'Predictive Maintenance',
    category: 'Python / Azure ML',
    filterClass: 'category-1',
  },
  {
    title: 'GenAI Knowledge Assistant',
    category: 'FastAPI / Claude / RAG',
    filterClass: 'category-2',
  },
  {
    title: 'Conversational Voice AI',
    category: 'Whisper / LLM / TTS',
    filterClass: 'category-2',
  },
  {
    title: 'AI Resume Screening',
    category: 'Python / NLP',
    filterClass: 'category-1',
  },
];

export default function PortfolioSection() {
  return (
    <div id="portfolio" className="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]">
      <div className="md:w-4/5 lg:w-3/4">
        <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="Portfolio">Portfolio</h6>
        <h2 className="text-3xl lg:text-4xl font-poppins font-semibold mb-3 lg:mb-4 dark:text-white">Featured AI/ML Projects</h2>
        <p className="text-pColor dark:text-white/70">Production AI systems spanning GenAI/LLM apps, Retrieval-Augmented Generation, conversational voice AI, and predictive analytics.</p>
      </div>
      <div className="mt-6 lg:mt-12">
        <ul className="filter space-x-2">
          <li className="list-none inline-block font-mono text-sm px-4 py-2 border border-black border-dashed rounded-full hover:bg-black hover:text-white transition ease-linear duration-100 cursor-pointer dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black mixitup-control-active" data-filter="all">Show All</li>
          <li className="list-none inline-block font-mono text-sm px-4 py-2 border border-black border-dashed rounded-full hover:bg-black hover:text-white transition ease-linear duration-100 cursor-pointer dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black" data-filter=".category-1">ML / Data Science</li>
          <li className="list-none inline-block font-mono text-sm px-4 py-2 border border-black border-dashed rounded-full hover:bg-black hover:text-white transition ease-linear duration-100 cursor-pointer dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black" data-filter=".category-2">GenAI / LLM</li>
        </ul>
        <div className="portfolio-grid grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {projects.map((project, index) => (
            <div key={index} className={`portfolio-item ${project.filterClass}`}>
              <div className="relative overflow-hidden group rounded-lg after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/30 after:to-transparent after:opacity-0 after:transition after:ease-out after:duration-[160ms] hover:after:opacity-100">
                <img className="transition ease-custom duration-500 group-hover:scale-105 group-hover:blur-[1.4px]" src="/assets/images/portfolio-img.png" alt={project.title} />
                <div className="z-[1] absolute top-4 right-4 bg-black/20 px-4 py-2 rounded-full backdrop-blur-[5px] text-white font-mono font-normal text-sm uppercase tracking-[0.5px]">
                  {project.category}
                </div>
                <div className="z-[1] absolute bottom-0 left-0 w-full px-7 pb-6 invisible opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100 group-hover:mb-0 transition ease-out duration-[160ms]">
                  <span className="font-poppins font-semibold text-3xl lg:text-4xl tracking-[0.5px] portfolio-stroke-text transition-all ease-linear duration-100">{project.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
