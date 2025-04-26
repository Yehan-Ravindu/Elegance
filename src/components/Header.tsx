import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, User, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import LoginModal from './LoginModal';
import CartSidebar from './CartSidebar';

const Header: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const { currentUser, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const cartCount = getCartCount();

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-darkBrown text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-heading font-bold">ELEGANCE</Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <Link to="/category/gents" className="hover:text-warmPink transition-colors duration-300 font-body">
                Gents
              </Link>
              <Link to="/category/ladies" className="hover:text-warmPink transition-colors duration-300 font-body">
                Ladies
              </Link>
              <Link to="/category/kids" className="hover:text-warmPink transition-colors duration-300 font-body">
                Kids
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center">
                <span className="mr-2 font-body text-sm">
                  {currentUser?.role === 'admin' ? 'Admin' : 'Delivery Agent'}
                </span>
                <button 
                  onClick={handleLogout}
                  className="text-warmPink hover:text-cream transition-colors duration-300 text-sm font-body"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={toggleLoginModal}
                className="flex items-center hover:text-warmPink transition-colors duration-300"
              >
                <User size={20} className="mr-1" />
                <span className="hidden md:inline font-body">Login</span>
              </button>
            )}
            
            <button
              onClick={toggleCart}
              className="relative flex items-center hover:text-warmPink transition-colors duration-300"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-warmPink text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link
                to="/category/gents"
                className="hover:text-warmPink transition-colors duration-300 font-body py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gents
              </Link>
              <Link
                to="/category/ladies"
                className="hover:text-warmPink transition-colors duration-300 font-body py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ladies
              </Link>
              <Link
                to="/category/kids"
                className="hover:text-warmPink transition-colors duration-300 font-body py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kids
              </Link>
            </div>
          </nav>
        )}
      </div>

      {isLoginModalOpen && <LoginModal onClose={toggleLoginModal} />}
      <CartSidebar isOpen={isCartOpen} onClose={toggleCart} />
    </header>
  );
};

export default Header;