import { useEffect, useState } from 'react';
import axios from 'axios';

export const UseProducts = () => {
  const [products, setProducts] = useState<any[]>([]);

  const fetchProducts = async() => {
    const response = await axios.get(
        "https://fakestoreapi.com/products"
    );
    const data = await response?.data;
    if(data) setProducts(response.data);
  }

  useEffect(()=>{
    fetchProducts();
  },[])

  return {products};
}
