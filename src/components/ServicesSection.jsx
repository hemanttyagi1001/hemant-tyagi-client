const services = [
  {
    num: '01',
    icon: 'bi-robot',
    title: 'LLM & GenAI Applications',
    desc: 'Building production LLM apps with Anthropic Claude and OpenAI GPT, applying prompt engineering, prompt caching, and tiered model routing to optimize accuracy and inference cost.',
  },
  {
    num: '02',
    icon: 'bi-search',
    title: 'RAG & Knowledge Assistants',
    desc: 'Designing Retrieval-Augmented Generation pipelines with embeddings, vector databases (pgvector, FAISS, Pinecone), and LLM orchestration for intelligent document search with source citations.',
  },
  {
    num: '03',
    icon: 'bi-graph-up',
    title: 'ML & Predictive Analytics',
    desc: 'Developing time-series forecasting and anomaly-detection models with Python, scikit-learn, and Azure ML for predictive maintenance, demand forecasting, and real-time operational insights.',
  },
  {
    num: '04',
    icon: 'bi-mic',
    title: 'Conversational & Voice AI',
    desc: 'Architecting real-time voice agents (STT → LLM → TTS) with Whisper, Deepgram, ElevenLabs, and Piper, optimizing streaming and barge-in for low-latency, human-like conversations.',
  },
];

export default function ServicesSection() {
  return (
    <div id="services" className="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]">
      <div className="md:w-4/5 lg:w-3/4">
        <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="Services">Services</h6>
        <h2 className="text-3xl lg:text-4xl font-poppins font-semibold mb-3 lg:mb-4 dark:text-white">What I Do</h2>
        <p className="text-pColor dark:text-white/70">Delivering production AI/ML systems end to end, from high-impact use-case discovery through scalable deployment.</p>
      </div>
      <div className="mt-6 lg:mt-10 divide-y divide-dashed divide-black/20">
        {services.map((service) => (
          <div key={service.num} className="md:flex py-6 lg:py-8 space-y-2.5 md:space-y-0">
            <div className="md:min-w-[90px]">
              <span className="font-mono font-semibold text-5xl stroke-text">{service.num}</span>
            </div>
            <div className="md:min-w-[270px] dark:text-white">
              <i className={`bi ${service.icon} text-2xl mb-2`}></i>
              <div className="font-mono font-medium text-sm uppercase tracking-[0.5px]">{service.title}</div>
            </div>
            <div>
              <p className="text-pColor dark:text-white/70 leading-7">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
