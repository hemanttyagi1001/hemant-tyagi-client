import { useEffect } from 'react';

export default function AboutSection() {
  useEffect(() => {
    // Typer effect
    const typerEl = document.getElementById('typer1');
    if (!typerEl) return;

    const words = ['Hi There!', "I'm Hemant"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    const type = () => {
      const current = words[wordIndex];
      if (isDeleting) {
        typerEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typerEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
      }

      let delay = isDeleting ? 30 : 50;

      if (!isDeleting && charIndex === current.length) {
        delay = 1500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 300;
      }

      timeout = setTimeout(type, delay);
    };

    type();
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Counter animation
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-target'), 10);
            let current = 0;
            const duration = 2400;
            const step = target / (duration / 16);

            const animate = () => {
              current += step;
              if (current >= target) {
                el.textContent = target;
              } else {
                el.textContent = Math.ceil(current);
                requestAnimationFrame(animate);
              }
            };
            animate();
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    counters.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" className="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]">
      <div className="lg:flex lg:space-x-10">
        <div className="relative h-fit mb-6">
          <img className="min-w-52 min-h-52 max-w-64 max-h-64 rounded-full" src="/assets/images/hero-avatar.jpg" alt="Hemant Tyagi" />
          <div className="absolute bottom-4 left-2 bg-black/30 dark:bg-black/60 px-4 py-2 rounded-full shadow-avatarText backdrop-blur-[5px] text-white font-mono font-normal uppercase text-sm tracking-wider">
            <span id="typer1"></span><span className="cursor">|</span>
          </div>
        </div>
        <div>
          <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="About Me">About Me</h6>
          <h2 className="text-4xl font-poppins font-semibold mb-2 dark:text-white">AI/ML Developer <br />&amp; LLM Engineer</h2>
          <ul className="space-y-3 mb-4">
            <li className="list-none inline-block px-4 py-2 me-2 rounded-full border border-black/20 dark:border-white/30 border-dashed text-pColor hover:text-black dark:text-white/70 dark:hover:text-white transition ease-linear duration-100">
              <i className="bi bi-robot pe-1"></i>
              LLM / GenAI
              <div className="inline-block font-mono text-sm">(<span className="counter" data-target="95">0</span>%)</div>
            </li>
            <li className="list-none inline-block px-4 py-2 me-2 rounded-full border border-black/20 dark:border-white/30 border-dashed text-pColor hover:text-black dark:text-white/70 dark:hover:text-white transition ease-linear duration-100">
              <i className="bi bi-code-slash pe-1"></i>
              Python / FastAPI
              <div className="inline-block font-mono text-sm">(<span className="counter" data-target="92">0</span>%)</div>
            </li>
            <li className="list-none inline-block px-4 py-2 me-2 rounded-full border border-black/20 dark:border-white/30 border-dashed text-pColor hover:text-black dark:text-white/70 dark:hover:text-white transition ease-linear duration-100">
              <i className="bi bi-cloud pe-1"></i>
              Azure AI
              <div className="inline-block font-mono text-sm">(<span className="counter" data-target="90">0</span>%)</div>
            </li>
          </ul>
          <p className="text-pColor dark:text-white/70">AI/ML Developer with 14+ years of software engineering experience, now focused on applied machine learning, Large Language Model (LLM) applications, and intelligent automation. Hands-on building and shipping production AI systems including GenAI/LLM apps, Retrieval-Augmented Generation (RAG), conversational and voice AI, and predictive analytics using Python, FastAPI, and Azure AI, backed by a deep engineering foundation in .NET Core, microservices, and cloud infrastructure.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8">
        <div className="flex items-center">
          <div className="pe-2">
            <div className="font-mono font-semibold text-6xl stroke-text"><span className="counter" data-target="14">0</span></div>
          </div>
          <div className="dark:text-white">
            <span className="block text-2xl font-normal mb-1">+</span>
            <p className="font-mono font-medium text-sm uppercase tracking-[0.5px]">Years of Experience</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="pe-2">
            <div className="font-mono font-semibold text-6xl stroke-text"><span className="counter" data-target="500">0</span></div>
          </div>
          <div className="dark:text-white">
            <span className="block text-2xl font-normal mb-1">k+</span>
            <p className="font-mono font-medium text-sm uppercase tracking-[0.5px]">Users Served</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="pe-2">
            <div className="font-mono font-semibold text-6xl stroke-text"><span className="counter" data-target="20">0</span></div>
          </div>
          <div className="dark:text-white">
            <span className="block text-2xl font-normal mb-1">+</span>
            <p className="font-mono font-medium text-sm uppercase tracking-[0.5px]">Projects Delivered</p>
          </div>
        </div>
      </div>
    </div>
  );
}
