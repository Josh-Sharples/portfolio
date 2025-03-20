 // @ts-ignore
import { HashLink as Link} from 'react-router-hash-link';
import { useRef, useEffect, useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const navContainer = useRef<HTMLElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const body = document.body;

  const showNavBar = () => {
    console.log('show nav');
    if (navContainer.current) {
      navContainer.current.classList.toggle("active-nav");
    }

    if (hamburgerRef.current) {
      hamburgerRef.current.classList.toggle('animate');
      body.classList.toggle('show');
    }
    
    body.classList.add("show");
  };

  const closeNavBar = () => {
    console.log('close nav');
    if (navContainer.current) {
      hamburgerRef.current?.classList.remove('animate');
      navContainer.current.classList.remove("active-nav");
    }
    body.classList.remove("show");
  };

  const handleHamburgerClick = () => {

    if (navOpen) {
        closeNavBar();
    } else {
        showNavBar();
    }
    setNavOpen(!navOpen);
  };

  // Manage event listeners for nav links
  useEffect(() => {
    const navLinks = document.querySelectorAll('nav a');
    const closeNavBarOnLinkClick = () => closeNavBar();

    // Add event listeners
    navLinks.forEach((link) => {
      link.addEventListener('click', closeNavBarOnLinkClick);
    });

    // Cleanup event listeners on component unmount
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', closeNavBarOnLinkClick);
      });
    };
  }, []); 


  return (
    <header className="bg-orange-100">
      <div style={{display: 'flex'}}>
      <Link to={"#home"} smooth className="text-xl font-bold">
        Josh.
      </Link>
      </div>
      <div style={{display: 'flex'}}>
      <button className="nav-btn" onClick={handleHamburgerClick} aria-label="Open menu">
        <div className="flex items-center lg:hidden">
						<button
              type="button"
              ref={hamburgerRef}
              id="hamburger"
              className="mt-1 relative z-40 inline-block cursor-pointer ml-[14px] lg:hidden"
            >
							<span className="sr-only">Open menu</span>
							<span className="absolute block w-full bar"></span>
							<span className="absolute block w-full bar"></span>
							<span className="absolute block w-full bar"></span>
						</button>
					</div>
      </button>
      <nav ref={navContainer}>
        <button
          className="nav-btn nav-close-btn"
          onClick={closeNavBar}
          aria-label="Close menu"
        >
        </button>
        <Link to={"#home"} smooth className="btn btn-ghost text-l" aria-label="Home" onClick={closeNavBar}>
          Home
        </Link>
        <Link to={"#about"} smooth className="btn btn-ghost text-l" aria-label="About" onClick={closeNavBar}>
          About
        </Link>
        <Link
          to={"#skills"} smooth
          className="btn btn-ghost text-l"
          aria-label="Skills"
          onClick={closeNavBar}
        >
          Skills
        </Link>
        <Link
          to={"#projects"} smooth
          className="btn btn-ghost text-l"
          aria-label="Projects"
          onClick={closeNavBar}
        >
          Projects
        </Link>
        <Link
          to={"#contact"} smooth
          className="btn btn-ghost text-l"
          aria-label="Contact"
          onClick={closeNavBar}
        >
          Contact
        </Link>
      </nav>
      </div>
    </header>
  );
}
