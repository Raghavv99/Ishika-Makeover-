import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Packages', path: '/packages' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-luxury/95 backdrop-blur-md shadow-lg shadow-black/50 py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Top bar for large screens */}
        <div className="hidden lg:flex justify-between items-center text-sm border-b border-white/10 pb-4">
          <div className="flex items-center space-x-6 text-ivory/80">
            <span className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-gold" />
              <span>072755 05871</span>
            </span>
            <span className="flex items-center space-x-2">
              <span className="text-gold">Location:</span>
              <span>Ram Ganj Ki Dhal, Etawah</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/book-appointment" className="text-gold hover:text-rosegold transition-colors">
              Book via WhatsApp
            </Link>
          </div>
        </div>

        {/* Main Nav */}
        <div className="flex justify-between items-center">
          <Link to="/" className="flex flex-col items-start group">
            <h1 className="font-serif text-2xl md:text-3xl tracking-wider text-gold group-hover:text-rosegold transition-colors">
              ISHIKA
            </h1>
            <span className="text-[0.65rem] md:text-xs tracking-[0.3em] uppercase text-ivory/70">
              Makeover Salon
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  'text-sm tracking-wide uppercase transition-colors hover:text-gold relative group',
                  location.pathname === link.path ? 'text-gold' : 'text-ivory/90'
                )}
              >
                {link.name}
                <span className={clsx(
                  "absolute -bottom-1.5 left-0 h-[1px] bg-gold transition-all duration-300",
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                )}></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/book-appointment"
              className="px-6 py-2.5 bg-transparent border border-gold text-gold hover:bg-gold hover:text-luxury transition-all duration-300 flex items-center space-x-2 uppercase text-sm tracking-widest"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-ivory p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={clsx(
          'lg:hidden absolute top-full left-0 w-full bg-luxury/95 backdrop-blur-md border-t border-white/10 transition-all duration-300 overflow-hidden',
          mobileMenuOpen ? 'max-h-screen border-b pb-6' : 'max-h-0 border-transparent opacity-0'
        )}
      >
        <div className="flex flex-col px-4 pt-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={clsx(
                'text-lg uppercase tracking-wider py-2 border-b border-white/5',
                location.pathname === link.path ? 'text-gold' : 'text-ivory hover:text-gold'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/book-appointment"
            className="mt-6 px-6 py-3 bg-gold text-luxury text-center uppercase tracking-widest font-medium"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
