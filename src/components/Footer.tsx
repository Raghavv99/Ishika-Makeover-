import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Instagram, Facebook, Twitter, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-3xl text-gold">ISHIKA</h2>
              <p className="text-xs tracking-[0.3em] uppercase text-ivory/50">Makeover Salon</p>
            </div>
            <p className="text-ivory/70 text-sm leading-relaxed">
              Experience the pinnacle of luxury beauty. Our professional experts provide premium makeover, hair, and skin services ensuring you look your absolute best.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-ivory hover:border-gold hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-ivory hover:border-gold hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-ivory hover:border-gold hover:text-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-ivory">Quick Links</h3>
            <ul className="space-y-4 text-sm text-ivory/70">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Our Services</Link></li>
              <li><Link to="/packages" className="hover:text-gold transition-colors">Packages</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link to="/testimonials" className="hover:text-gold transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
              <li><Link to="/book-appointment" className="hover:text-gold transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-ivory">Opening Hours</h3>
            <ul className="space-y-4 text-sm text-ivory/70">
              <li className="flex justify-between items-center border-b border-white/10 pb-2">
                <span>Monday - Sunday</span>
                <span className="text-gold">10:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/10 pb-2 pt-2">
                <span>Booking Status</span>
                <span className="text-emerald-400">Open Daily</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-ivory">Contact Us</h3>
            <ul className="space-y-4 text-sm text-ivory/70">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>Ram Ganj Ki Dhal, Etawah, Uttar Pradesh 206001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>072755 05871</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>hello@ishikamakeover.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-ivory/50">
          <p>&copy; {new Date().getFullYear()} Ishika Makeover Salon. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
