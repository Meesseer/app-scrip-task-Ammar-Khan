"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from '@/app/components/Hero/Hero';
import Margin from '@/app/components/Margin/Margin';
import NavBar from '@/app/components/NavBar/NavBar';
import Products from '@/app/components/Products/Products';
import Footer from '@/app/components/Footer/Footer';
import Connect from '@/app/components/Footer/Connect/Connect';
import ProductToolBar from '@/app/components/ProductToolbar/ProductToolBar';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [filterFlag, setFilterFlag] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Margin />
      <NavBar />
      <Hero />
      <ProductToolBar
        products={products}
        filterFlag={filterFlag}
        setFilterFlag={setFilterFlag}
      />
      <Products
        products={products}
        filterFlag={filterFlag}
        setFilterFlag={setFilterFlag}
      />
      <Connect />
      <Footer />
    </>
  );
}
