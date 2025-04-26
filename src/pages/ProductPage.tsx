import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { getProductById } from '../data/products';

interface ProductPageParams {
  id: string;
}

const ProductPage: React.FC = () => {
  const { id } = useParams<ProductPageParams>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = id ? getProductById(id) : undefined;
  
  const [selectedSize, setSelectedSize] = useState(product?.size ? product.size[0] : undefined);
  const [selectedColor, setSelectedColor] = useState(product?.color ? product.color[0] : undefined);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-heading text-darkBrown mb-4">Product Not Found</h2>
        <p className="text-mediumBrown mb-6 font-body">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center px-4 py-2 bg-darkBrown text-white rounded hover:bg-mediumBrown transition-colors duration-300 font-body"
        >
          <ArrowLeft size={16} className="mr-2" />
          Go Back
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity,
      size: selectedSize,
      color: selectedColor,
    });
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center text-mediumBrown hover:text-darkBrown transition-colors duration-300 font-body"
      >
        <ArrowLeft size={16} className="mr-1" />
        Back
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="md:w-1/2">
          <h1 className="text-3xl font-heading font-bold text-darkBrown mb-2">
            {product.name}
          </h1>
          <p className="text-2xl text-mediumBrown font-bold mb-4 font-body">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-600 mb-6 font-body">
            {product.description}
          </p>
          
          {product.size && product.size.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2 font-body">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.size.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 border rounded font-body
                      ${selectedSize === size 
                        ? 'border-darkBrown bg-darkBrown text-white' 
                        : 'border-gray-300 text-gray-700 hover:border-warmPink'
                      }
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {product.color && product.color.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2 font-body">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.color.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1 border rounded font-body
                      ${selectedColor === color 
                        ? 'border-darkBrown bg-darkBrown text-white' 
                        : 'border-gray-300 text-gray-700 hover:border-warmPink'
                      }
                    `}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2 font-body">Quantity</h3>
            <div className="flex items-center">
              <button
                onClick={decreaseQuantity}
                className="px-3 py-1 border border-gray-300 rounded-l hover:bg-gray-100 font-body"
              >
                -
              </button>
              <span className="px-4 py-1 border-t border-b border-gray-300 font-body">
                {quantity}
              </span>
              <button
                onClick={increaseQuantity}
                className="px-3 py-1 border border-gray-300 rounded-r hover:bg-gray-100 font-body"
              >
                +
              </button>
            </div>
          </div>
          
          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-darkBrown text-white rounded-md flex items-center justify-center hover:bg-mediumBrown transition-colors duration-300 font-body"
          >
            <ShoppingBag size={18} className="mr-2" />
            Add to Cart
          </button>
          
          <div className="mt-8 border-t border-gray-200 pt-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2 font-body">Details</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600 font-body">
              <li>Premium quality material</li>
              <li>Available in multiple sizes and colors</li>
              <li>Free shipping on orders over $100</li>
              <li>30-day return policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;