import React from 'react';
import { Link } from 'react-router';
import useProducts from '../Hooks/useProducts';
import ProductCard from '../components/ProductCard';
import SkeletonLoader from '../components/SkeletonLoader';
import HeroSection from '../components/HeroSection';
const Home = () => {
      const { loading, error, products } = useProducts()
         
  const featuredProducts = products.slice(0, 6)
    return (
        <div>
        <HeroSection></HeroSection>

             <div className='flex justify-between py-5 items-center'>
        <h1 className='text-3xl font-semibold'>Featured Products</h1>
        <Link className='btn btn-outline' to='/products'>
          See All Products
        </Link>
      </div>
       {loading ? (
        <SkeletonLoader />
      ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
        </div>
    );
};

export default Home;