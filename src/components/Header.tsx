import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

type NavLinkProps = {
  href: string;
  title: string;
  onClick: () => void;
};

const NavLink = ({ href, title, onClick }: NavLinkProps) => {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({
          behavior: 'smooth',
        });
        onClick();
      }}
      className="text-gray-700 hover:text-blue-600 transition-colors py-2 px-4 block lg:inline-block font-medium"
    >
      {title}
    </a>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold text-gray-900">
          Abhishek Bhaduri
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-1">
          <NavLink href="#about" title="About" onClick={closeMenu} />
          <NavLink href="#experience" title="Experience" onClick={closeMenu} />
          <NavLink href="#blog" title="Blog" onClick={closeMenu} />
          <NavLink href="#book" title="Book a Time" onClick={closeMenu} />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col">
          <NavLink href="#about" title="About" onClick={closeMenu} />
          <NavLink href="#experience" title="Experience" onClick={closeMenu} />
          <NavLink href="#blog" title="Blog" onClick={closeMenu} />
          <NavLink href="#book" title="Book a Time" onClick={closeMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;