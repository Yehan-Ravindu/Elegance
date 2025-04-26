import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkBrown text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">ELEGANCE</h3>
            <p className="text-beige mb-4 font-body">
              Your premier destination for elegant fashion and accessories. Where luxury meets style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-beige hover:text-warmPink transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-beige hover:text-warmPink transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-beige hover:text-warmPink transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 font-body">
              <li>
                <Link to="/category/gents" className="text-beige hover:text-warmPink transition-colors duration-300">
                  Gents
                </Link>
              </li>
              <li>
                <Link to="/category/ladies" className="text-beige hover:text-warmPink transition-colors duration-300">
                  Ladies
                </Link>
              </li>
              <li>
                <Link to="/category/kids" className="text-beige hover:text-warmPink transition-colors duration-300">
                  Kids
                </Link>
              </li>
              <li>
                <Link to="/" className="text-beige hover:text-warmPink transition-colors duration-300">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/" className="text-beige hover:text-warmPink transition-colors duration-300">
                  Sale
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Information</h3>
            <ul className="space-y-2 font-body">
              <li>
                <a href="#" className="text-beige hover:text-warmPink transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-beige hover:text-warmPink transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-beige hover:text-warmPink transition-colors duration-300">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-beige hover:text-warmPink transition-colors duration-300">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-beige hover:text-warmPink transition-colors duration-300">
                  Returns & Exchanges
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 font-body">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-warmPink flex-shrink-0 mt-1" />
                <span className="text-beige">123 Fashion Street, Style City, SC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-warmPink flex-shrink-0" />
                <span className="text-beige">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-warmPink flex-shrink-0" />
                <span className="text-beige">info@elegance.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-mediumBrown mt-8 pt-6 text-center">
          <p className="text-beige text-sm font-body">
            &copy; {new Date().getFullYear()} Elegance Shopping Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;