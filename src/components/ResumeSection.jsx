const education = [
  {
    period: '2008 - 2011',
    title: 'Bachelor of Computer Applications (BCA)',
    institution: '@Uttaranchal Institute of Management, Dehradun',
  },
  {
    period: 'Completed',
    title: 'Higher Secondary (Science)',
    institution: '@DAV Inter College, Muzaffarnagar',
  },
];

const experience = [
  {
    period: '2022 - Present',
    title: 'App Development Team Lead - AI/ML & Cloud',
    company: '@TELUS International, Noida',
  },
  {
    period: '2019 - 2022',
    title: 'Assistant Manager - Software Dev & AI',
    company: '@Teleperformance, Gurugram',
  },
  {
    period: '2018 - 2019',
    title: 'Software Developer',
    company: '@Simplex Control Equipments, Dehradun',
  },
  {
    period: '2014 - 2018',
    title: 'Software Developer',
    company: '@Himja Software, Dehradun',
  },
  {
    period: '2011 - 2014',
    title: 'Software Developer',
    company: '@Dreamz Infinite, Delhi',
  },
];

const timelineItemClass = "relative inline-block px-4 py-2 rounded-full border border-black/20 dark:border-white/20 border-dashed font-mono font-medium uppercase text-sm tracking-[0.5px] text-pColor dark:text-white/70 group-hover:text-black dark:group-hover:text-white transition ease-linear duration-100 before:content-[''] before:absolute before:top-1/2 before:left-[-20px] before:w-[20px] before:h-[1px] before:border-t before:border-black/20 dark:before:border-white/20 before:border-dashed after:content-[''] after:absolute after:top-1/2 after:left-[-22px] after:-translate-y-1/2 after:bg-black dark:after:bg-white after:w-[5px] after:h-[5px] after:rounded-full";

export default function ResumeSection() {
  return (
    <div id="resume" className="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]">
      <div className="md:w-4/5 lg:w-3/4">
        <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="Resume">Resume</h6>
        <h2 className="text-3xl lg:text-4xl font-poppins font-semibold mb-3 lg:mb-4 dark:text-white">Education & Experience</h2>
        <p className="text-pColor dark:text-white/70">14+ years of progressive experience in software engineering and team leadership, now focused on applied machine learning, LLM applications, and intelligent automation.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mt-6 lg:mt-12">
        {/* Education */}
        <div className="relative pl-5 space-y-7 before:content-[''] before:absolute before:top-0 before:left-0 before:w-[1px] before:h-full before:border-l before:border-black/20 dark:before:border-white/20 before:border-dashed">
          <div className="text-3xl dark:text-white">
            <i className="bi bi-mortarboard"></i>
          </div>
          {education.map((item, index) => (
            <div key={index} className="group">
              <div className={timelineItemClass}>
                {item.period}
              </div>
              <h4 className="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white">{item.title}</h4>
              <span className="text-pColor dark:text-white/70">{item.institution}</span>
            </div>
          ))}
          {/* Certification */}
          <div className="group">
            <div className={timelineItemClass}>
              Certification
            </div>
            <h4 className="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white">Certified Scrum Master (CSM)</h4>
            <span className="text-pColor dark:text-white/70">Scrum Alliance</span>
          </div>
        </div>
        {/* Experience */}
        <div className="relative pl-5 space-y-7 before:content-[''] before:absolute before:top-0 before:left-0 before:w-[1px] before:h-full before:border-l before:border-black/20 dark:before:border-white/20 before:border-dashed">
          <div className="text-3xl dark:text-white">
            <i className="bi bi-briefcase"></i>
          </div>
          {experience.map((item, index) => (
            <div key={index} className="group">
              <div className={timelineItemClass}>
                {item.period}
              </div>
              <h4 className="font-poppins font-medium text-lg lg:text-xl mt-2 mb-1 lg:mt-3 lg:mb-2 dark:text-white">{item.title}</h4>
              <span className="text-pColor dark:text-white/70">{item.company}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
