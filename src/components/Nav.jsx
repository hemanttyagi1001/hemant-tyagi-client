import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { href: '#about', label: 'About Me', letter: 'A' },
  { href: '#portfolio', label: 'Portfolio', letter: 'P' },
  { href: '#services', label: 'Services', letter: 'S' },
  { href: '#testimonial', label: 'Testimonial', letter: 'T' },
  { href: '#resume', label: 'Resume', letter: 'R' },
  // { href: '#blog', label: 'Blog', letter: 'B' },
  { href: '#contact', label: 'Contact', letter: 'C' },
];

export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (!isHome) return;

    const sections = {};
    let currentActive = null;

    const updateSections = () => {
      document.querySelectorAll('.section').forEach((el) => {
        sections[el.id] = el.offsetTop;
      });
    };

    const handleScroll = () => {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      let newActive = null;

      for (const id in sections) {
        if (sections[id] <= scrollPosition + 48) {
          newActive = id;
        }
      }

      if (newActive && newActive !== currentActive) {
        currentActive = newActive;
        const activeEl = document.querySelector('.section-link.active');
        if (activeEl) activeEl.classList.remove('active');
        const newActiveEl = document.querySelector(`.section-link[href*='${CSS.escape(newActive)}']`);
        if (newActiveEl) newActiveEl.classList.add('active');
      }
    };

    updateSections();
    window.addEventListener('resize', updateSections);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', updateSections);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome]);

  const handleClick = (e, href) => {
    if (!isHome) {
      e.preventDefault();
      navigate('/' + href);
    }
  };

  return (
    <div className="z-10 sticky top-2 lg:top-6 lg:h-fit lg:w-1/4 bg-black/90 dark:bg-boxDark backdrop-blur-[5px] rounded-lg px-4 py-3 lg:bg-black lg:px-8 lg:py-5 xl:px-10 xl:py-7 lg:backdrop-blur-none">
      <ul className="font-mono font-normal uppercase text-sm tracking-wider text-center lg:text-left space-x-4 lg:space-x-0">
        {navItems.map((item, index) => (
          <li key={item.href} className="list-none inline-block lg:block">
            <a
              className={`section-link ${index === 0 && isHome ? 'active' : ''} group inline-flex justify-center items-center lg:block lg:justify-normal relative w-9 h-9 border border-transparent border-dashed rounded-full lg:w-auto lg:h-auto lg:border-none lg:rounded-none text-white/70 py-3 transition ease-linear duration-100 hover:text-white`}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
            >
              <span className="hidden lg:inline-block">{item.label}</span>
              <span className="lg:hidden">{item.letter}</span>
              <span className="nav-circle hidden lg:inline-block absolute top-1/2 right-0 -translate-y-1/2 w-[5px] h-[5px] before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white before:w-[5px] before:h-[5px] before:rounded-full before:opacity-70 before:transition-all before:ease-out before:duration-200 group-hover:before:opacity-100"></span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
