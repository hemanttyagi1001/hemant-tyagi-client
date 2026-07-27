import { useEffect, useRef } from 'react';

export default function ToggleMenu() {
  const menuRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const menu = menuRef.current;
    const closeBtn = closeRef.current;

    const handleClose = () => menu.classList.remove('show');
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.toggle-menu, .menu-btn')) {
        menu.classList.remove('show');
      }
    };

    closeBtn.addEventListener('click', handleClose);
    document.addEventListener('click', handleOutsideClick);

    return () => {
      closeBtn.removeEventListener('click', handleClose);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={menuRef} className="toggle-menu z-20 toggle-menu fixed top-0 right-0 translate-x-3 w-196 h-full bg-black dark:bg-boxDark dark:shadow-darkBox px-10 py-12 invisible opacity-0 transition-all ease-out duration-[160ms]">
      <span className="block font-mono font-normal uppercase text-sm tracking-[0.5px] text-white mb-2">Phone:</span>
      <h4 className="font-poppins font-medium text-2xl text-white">+91-9548550009</h4>
      <div className="mt-6">
        <span className="block font-mono font-normal uppercase text-sm tracking-[0.5px] text-white mb-2">Email:</span>
        <h4 className="font-poppins font-medium text-2xl text-white">hemanttyagi1001@gmail.com</h4>
      </div>
      <ul className="space-x-2 mt-4">
        <li className="list-none inline-block">
          <a className="inline-flex justify-center items-center bg-white/15 w-10 h-10 rounded-full text-white transition ease-out duration-[120ms] hover:bg-white/20" href="https://linkedin.com/in/hemanttyagi1001" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
        </li>
        <li className="list-none inline-block">
          <a className="inline-flex justify-center items-center bg-white/15 w-10 h-10 rounded-full text-white transition ease-out duration-[120ms] hover:bg-white/20" href="mailto:hemanttyagi1001@gmail.com">
            <i className="bi bi-envelope"></i>
          </a>
        </li>
      </ul>
      <div className="absolute bottom-12 left-10 right-10">
        <p className="text-sm mb-2  flex justify-end">
          <a href="/privacy-policy" className="text-white/70 hover:text-white transition ease-out duration-[120ms] underline">Privacy Policy</a>
          <span className="text-white/70 mx-2">|</span>
          <a href="/terms-of-service" className="text-white/70 hover:text-white transition ease-out duration-[120ms] underline">Terms of Service</a>
        </p>
        <p className="text-white/70 text-sm flex justify-end">&copy;&nbsp;{new Date().getFullYear()} Hemant Tyagi</p>
      </div>
      <button ref={closeRef} className="menu-close absolute top-4 right-4 inline-flex justify-center items-center bg-white/15 w-10 h-10 rounded-full text-white text-xl transition ease-out duration-150 hover:bg-white/20">
        <i className="bi bi-x"></i>
      </button>
    </div>
  );
}
