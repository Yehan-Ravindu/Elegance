import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { UserRole } from '../types';

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('admin');
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    // For demo purposes, simple validation
    if (role === 'admin' && password !== 'admin123') {
      setError('Invalid admin credentials');
      return;
    }

    if (role === 'delivery' && password !== 'delivery123') {
      setError('Invalid delivery agent credentials');
      return;
    }

    login(username, role);
    onClose();
    
    // Redirect based on role
    if (role === 'admin') {
      navigate('/admin');
    } else if (role === 'delivery') {
      navigate('/delivery');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative z-10 animate-fade-in">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-heading font-bold text-darkBrown">Login</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-darkBrown transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="bg-error bg-opacity-10 text-error p-3 rounded text-sm font-body">
              {error}
            </div>
          )}
          
          <div>
            <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-700 font-body">
              Login As
            </label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center font-body">
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={role === 'admin'}
                  onChange={() => setRole('admin')}
                  className="h-4 w-4 text-mediumBrown"
                />
                <span className="ml-2">Admin</span>
              </label>
              <label className="inline-flex items-center font-body">
                <input
                  type="radio"
                  name="role"
                  value="delivery"
                  checked={role === 'delivery'}
                  onChange={() => setRole('delivery')}
                  className="h-4 w-4 text-mediumBrown"
                />
                <span className="ml-2">Delivery Agent</span>
              </label>
            </div>
          </div>
          
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700 font-body">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warmPink focus:border-transparent font-body"
              placeholder="Enter your username"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700 font-body">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warmPink focus:border-transparent font-body"
              placeholder="Enter your password"
            />
            <p className="mt-1 text-xs text-gray-500 font-body">
              For demo: Admin password is "admin123", Delivery password is "delivery123"
            </p>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-darkBrown text-white rounded-md hover:bg-mediumBrown transition-colors duration-300 font-body"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;