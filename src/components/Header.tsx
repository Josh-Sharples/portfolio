 // @ts-ignore
import { HashLink as Link} from 'react-router-hash-link';
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

export default function Header() {
  const navRef = useRef<HTMLElement>(null);

  const showNavBar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };

  return (
    <header className="bg-orange-100">
      <div style={{display: 'flex'}}>
      <Link to={"#home"} smooth className="text-xl font-bold">
        Josh.
      </Link>
      </div>
      <div style={{display: 'flex'}}>
      <button className="nav-btn" onClick={showNavBar} aria-label="Open menu">
        <FaBars />
      </button>
      <nav ref={navRef}>
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavBar}
          aria-label="Close menu"
        >
          <FaTimes />
        </button>
        <Link to={"#home"} smooth className="btn btn-ghost text-l" aria-label="Home" onClick={showNavBar}>
          Home
        </Link>
        <Link to={"#about"} smooth className="btn btn-ghost text-l" aria-label="About" onClick={showNavBar}>
          About
        </Link>
        <Link
          to={"#skills"} smooth
          className="btn btn-ghost text-l"
          aria-label="Skills"
          onClick={showNavBar}
        >
          Skills
        </Link>
        <Link
          to={"#projects"} smooth
          className="btn btn-ghost text-l"
          aria-label="Projects"
          onClick={showNavBar}
        >
          Projects
        </Link>
        <Link
          to={"#contact"} smooth
          className="btn btn-ghost text-l"
          aria-label="Contact"
          onClick={showNavBar}
        >
          Contact
        </Link>
      </nav>
      </div>
    </header>
  );
}
