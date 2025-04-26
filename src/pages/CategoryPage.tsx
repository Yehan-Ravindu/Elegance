import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';

interface CategoryParams {
  category: string;
}

const CategoryPage: React.FC = () => {
  const { category } = useParams<CategoryParams>();
  
  // Title case the category name for display
  const formattedCategory = category ? 
    category.charAt(0).toUpperCase() + category.slice(1) : '';
  
  const products = category ? getProductsByCategory(category) : [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-bold text-darkBrown mb-2">
          {formattedCategory} Collection
        </h1>
        <p className="text-mediumBrown font-body">
          Discover our range of {category} clothing and accessories.
        </p>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 font-body text-lg">No products found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;