
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleRegisterClick = () => {
    window.open('https://forms.gle/RgFmduC1seRnN4F5A', '_blank');
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8",
        isScrolled ? "py-3 bg-glass shadow-soft" : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="font-display font-bold text-xl md:text-2xl bg-gradient-to-r from-cyfuture-primary to-cyfuture-secondary bg-clip-text text-transparent">
            Cyfuture AI Hackathon 1.0
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#challenges">Challenges</NavLink>
          <NavLink href="#timeline">Timeline</NavLink>
          <NavLink href="#prizes">Prizes</NavLink>
          <NavLink href="#sponsors">Sponsors</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
          <Button 
            className="bg-gradient-to-r from-cyfuture-primary to-cyfuture-accent text-white font-medium px-6 py-2 rounded-full shadow-sm hover:shadow-md transition-all"
            onClick={handleRegisterClick}
          >
            Register Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-glass backdrop-blur-md transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
          <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
          <MobileNavLink href="#challenges" onClick={() => setMobileMenuOpen(false)}>Challenges</MobileNavLink>
          <MobileNavLink href="#timeline" onClick={() => setMobileMenuOpen(false)}>Timeline</MobileNavLink>
          <MobileNavLink href="#prizes" onClick={() => setMobileMenuOpen(false)}>Prizes</MobileNavLink>
          <MobileNavLink href="#sponsors" onClick={() => setMobileMenuOpen(false)}>Sponsors</MobileNavLink>
          <MobileNavLink href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</MobileNavLink>
          <Button 
            className="w-full bg-gradient-to-r from-cyfuture-primary to-cyfuture-accent text-white font-medium px-8 py-3 rounded-full shadow-sm hover:shadow-md transition-all"
            onClick={() => {
              setMobileMenuOpen(false);
              handleRegisterClick();
            }}
          >
            Register Now
          </Button>
        </div>
      </div>
    </header>
  );
};

// Desktop NavLink component
const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-foreground/90 hover:text-foreground font-medium text-sm transition-colors"
  >
    {children}
  </a>
);

// Mobile NavLink component
const MobileNavLink = ({ href, onClick, children }: { 
  href: string, 
  onClick: () => void,
  children: React.ReactNode 
}) => (
  <a 
    href={href} 
    className="text-foreground font-medium text-2xl" 
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;
