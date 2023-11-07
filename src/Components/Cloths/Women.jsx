import React, { useEffect, useState } from 'react'
import { useStateProvider } from '../../Utils/StateProvider';

export const Women = () => {
    const [{ filteredProducts, products }] = useStateProvider();
    const [filteredProduct, setFilteredProduct] = useState(null);
    const [duplicateFilter, setduplicateFilter] = useState(null);
  
    useEffect(() => {
      const filtered = products?.filter(
        (obj) =>
          obj.sellerTag.charAt(0).toUpperCase(1) + obj.sellerTag.slice(1) ===
          filteredProducts,
      );
      
      setFilteredProduct(filtered);
      setduplicateFilter(filtered);
    }, []);
  
    useEffect(() => {
      console.log(filteredProduct);
    }, [filteredProduct]);
  
    const handleFilter = (value, key) => {
      if (key === "gender") {
        const newFiltered = duplicateFilter.filter((obj) => obj.gender === value);
        console.log(newFiltered);
        setFilteredProduct(newFiltered);
      } else if (key === "price") {
        const newFiltered = duplicateFilter.filter((obj) => obj.price <= value);
        console.log(newFiltered);
        setFilteredProduct(newFiltered);
      } else {
        const newFiltered = duplicateFilter.filter((obj) => obj.color === value);
        console.log(newFiltered);
        setFilteredProduct(newFiltered);
      }
    };
  return (
    <div>Women</div>
  )
}
