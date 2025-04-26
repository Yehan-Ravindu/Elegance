import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts } from '../data/products';

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="flex flex-col space-y-12 pb-12">
      {/* Hero Section */}
      <section className="relative bg-darkBrown text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-darkBrown to-transparent z-10"></div>
        <div 
          className="h-[70vh] bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center z-20">
          <div className="container mx-auto px-4">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 animate-fade-in">
                Elegance Redefined
              </h1>
              <p className="text-lg md:text-xl mb-8 font-body animate-fade-in">
                Discover our curated collection of premium fashion for the entire family.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in">
                <Link
                  to="/category/gents"
                  className="px-6 py-3 bg-mediumBrown hover:bg-warmPink transition-colors duration-300 rounded font-body"
                >
                  Shop Men
                </Link>
                <Link
                  to="/category/ladies"
                  className="px-6 py-3 bg-warmPink hover:bg-mediumBrown transition-colors duration-300 rounded font-body"
                >
                  Shop Women
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-darkBrown text-center mb-10">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard 
            title="Gents Collection" 
            image="https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            link="/category/gents"
          />
          <CategoryCard 
            title="Ladies Collection" 
            image="https://images.pexels.com/photos/4947741/pexels-photo-4947741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            link="/category/ladies"
          />
          <CategoryCard 
            title="Kids Collection" 
            image="https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            link="/category/kids"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-heading font-bold text-darkBrown">
            Featured Products
          </h2>
          <Link 
            to="/"
            className="flex items-center text-mediumBrown hover:text-warmPink transition-colors duration-300 font-body"
          >
            View All
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Highlight Banner */}
      <section className="bg-beige py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-heading font-bold text-darkBrown mb-4">
                Premium Quality, Timeless Style
              </h2>
              <p className="text-mediumBrown mb-6 font-body">
                We believe in crafting experiences, not just clothes. Each piece in our collection 
                is carefully selected to ensure quality, style, and comfort.
              </p>
              <Link
                to="/"
                className="inline-block px-6 py-3 bg-darkBrown text-white hover:bg-mediumBrown transition-colors duration-300 rounded font-body"
              >
                Learn More
              </Link>
            </div>
            <div className="md:w-1/2 pl-0 md:pl-8">
              <img
                src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Premium Fashion"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, link }) => {
  return (
    <Link to={link} className="group block relative overflow-hidden rounded-lg shadow-md h-80">
      <div className="absolute inset-0 bg-gradient-to-t from-darkBrown to-transparent opacity-70 z-10 transition-opacity duration-300 group-hover:opacity-90"></div>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 w-full p-6 z-20">
        <h3 className="text-2xl font-heading font-bold text-white mb-2">{title}</h3>
        <span className="inline-flex items-center text-cream font-body group-hover:text-warmPink transition-colors duration-300">
          Shop Now
          <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
};

export default HomePage;