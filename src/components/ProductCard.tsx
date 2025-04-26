import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: 1,
      size: product.size ? product.size[0] : undefined,
      color: product.color ? product.color[0] : undefined,
    });
  };

  return (
    <div 
      className="group relative bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative pb-[125%] overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
          {product.featured && (
            <span className="absolute top-2 left-2 bg-warmPink text-white text-xs px-2 py-1 rounded font-body">
              Featured
            </span>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-heading font-medium text-lg text-darkBrown mb-1">{product.name}</h3>
          <p className="font-body text-mediumBrown font-bold">${product.price.toFixed(2)}</p>
          <p className="mt-2 text-sm text-gray-600 line-clamp-2 font-body">{product.description}</p>
        </div>
      </Link>
      
      <button
        onClick={handleAddToCart}
        className="absolute bottom-4 right-4 bg-darkBrown text-white p-2 rounded-full transition-all duration-300 transform hover:bg-warmPink flex items-center justify-center"
      >
        <ShoppingBag size={20} />
      </button>
    </div>
  );
};

export default ProductCard;