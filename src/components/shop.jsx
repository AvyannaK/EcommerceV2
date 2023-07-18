import React, { useEffect, useState } from 'react';
// products represents the array of products to be displayed in the shop.
// filterPrice represents the filter value for price.
// filterType represents the filter value for type. 
// All initially set to an empty array using useState([])
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filterPrice, setFilterPrice] = useState('');
  const [filterType, setFilterType] = useState('');

//   The useEffect hook is used to fetch products from the server
// It sends an HTTP request to the specified URL 
  useEffect(() => {
    fetch('http://localhost:5000/shop')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

// setProducts is the function returned by the useState hook, and it is used to update the value of the products state variable.

//   The handleFilterPrice function is an event handler 
// that updates the filterPrice state variable based on the input value change.
  const handleFilterPrice = (event) => {
    setFilterPrice(event.target.value);
  };

  const handleFilterType = (event) => {
    setFilterType(event.target.value);
  };

//   The filteredProducts variable filters the products array based on the selected filters.
// It checks if the price of each product matches the filterPrice value and same for type (name)

  const filteredProducts = products.filter((product) => {
    const filterPriceMatch = filterPrice === '' || product.price.toString() === filterPrice;
    const filterTypeMatch = filterType === '' || product.name.toLowerCase().includes(filterType.toLowerCase());
    return filterPriceMatch && filterTypeMatch;
  });

  return (
    <div>
      <div className="filter-container">
        <label htmlFor="filterPrice">Search by Price:</label>
        <input type="text" id="filterPrice" value={filterPrice} onChange={handleFilterPrice} />
        <label htmlFor="filterType">Search by Type:</label>
        <input type="text" id="filterType" value={filterType} onChange={handleFilterType} />
      </div>
      {/* products are by id and then the info is pulled by the name of each column in my db table */}
      <div className="products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} className="image" />
            <h1 className="title">{product.name}</h1>
            <p className="description">{product.description}</p>
            <p className="price">Price: ${product.price}</p>
            <p className="cart">
              Add to cart <i className="bx bx-cart-alt"></i>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

