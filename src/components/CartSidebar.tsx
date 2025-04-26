import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const total = getCartTotal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl flex flex-col animate-slide-in">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-darkBrown text-white">
          <h2 className="text-xl font-heading font-bold flex items-center">
            <ShoppingBag size={20} className="mr-2" />
            Shopping Cart
          </h2>
          <button onClick={onClose} className="text-white hover:text-warmPink transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <ShoppingBag size={64} className="mb-4 text-warmPink opacity-50" />
              <p className="text-lg font-body">Your cart is empty</p>
              <button 
                onClick={onClose}
                className="mt-4 px-4 py-2 bg-mediumBrown text-white rounded hover:bg-warmPink transition-colors duration-300 font-body"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex border-b border-gray-200 pb-4">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name} 
                    className="w-20 h-24 object-cover rounded"
                  />
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between">
                      <h3 className="font-body font-semibold">{item.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-error transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <p className="text-mediumBrown font-body">${item.price.toFixed(2)}</p>
                    {item.size && <p className="text-sm text-gray-500 font-body">Size: {item.size}</p>}
                    {item.color && <p className="text-sm text-gray-500 font-body">Color: {item.color}</p>}
                    
                    <div className="flex items-center mt-2">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 border border-gray-300 rounded-l hover:bg-gray-100 transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-3 py-1 border-t border-b border-gray-300 font-body">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 border border-gray-300 rounded-r hover:bg-gray-100 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="flex justify-between mb-4">
              <span className="font-body font-semibold">Total:</span>
              <span className="font-body font-bold text-mediumBrown">${total.toFixed(2)}</span>
            </div>
            <div className="space-y-2">
              <button className="w-full py-3 bg-darkBrown text-white rounded hover:bg-mediumBrown transition-colors duration-300 font-body">
                Proceed to Checkout
              </button>
              <button 
                onClick={clearCart}
                className="w-full py-2 text-mediumBrown hover:text-darkBrown transition-colors duration-300 font-body text-sm"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;