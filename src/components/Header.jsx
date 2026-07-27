export default function Header() {
  const handleMenuClick = () => {
    const toggleMenu = document.querySelector('.toggle-menu');
    if (toggleMenu) {
      toggleMenu.classList.toggle('show');
    }
  };

  return (
    <div className="lg:flex lg:justify-between">
      <div className="flex h-[50px] items-center space-x-6 lg:order-2 justify-end">
        <ul className="space-x-3.5 font-mono font-medium uppercase text-sm tracking-[0.5px]">
          <li className="list-none inline-block"><a className="hover:underline dark:text-white" href="https://linkedin.com/in/hemanttyagi1001" target="_blank" rel="noopener noreferrer">IN</a></li>
          <li className="list-none inline-block"><a className="hover:underline dark:text-white" href="mailto:hemanttyagi1001@gmail.com">EM</a></li>
        </ul>
        <button onClick={handleMenuClick} className="menu-btn group relative w-[50px] h-[50px] bg-black dark:bg-boxDark rounded-b-lg">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-1 h-1 rounded-full transition-all ease-linear duration-100 delay-100 group-hover:scale-[3]"></span>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 before:content-[''] before:absolute before:top-0 before:-left-[10px] before:bg-white before:w-1 before:h-1 before:rounded-full before:transition-all before:ease-linear before:duration-100 after:content-[''] after:absolute after:top-0 after:-right-[10px] after:bg-white after:w-1 after:h-1 after:rounded-full after:transition-all after:ease-linear after:duration-100 group-hover:before:left-0 group-hover:before:opacity-0 group-hover:after:right-0 group-hover:after:opacity-0"></span>
        </button>
      </div>
      <div className="py-7 lg:order-1">
        <h1 className="text-5xl xl:text-7xl font-poppins font-semibold dark:text-white">Hemant <span className="stroke-text">Tyagi</span></h1>
      </div>
    </div>
  );
}
