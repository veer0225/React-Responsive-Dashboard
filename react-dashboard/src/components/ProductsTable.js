import React from 'react';

const ProductsTable = () => {
  const products = [
    { name: 'ASOS Ridley High Waist', price: '$79.49', qty: 82, total: '$6,518.18' },
    { name: 'Marco Lightweight Shirt', price: '$128.50', qty: 37, total: '$4,754.50' },
    { name: 'Half Sleeve Shirt', price: '$39.99', qty: 64, total: '$2,559.36' },
    { name: 'Lightweight Jacket', price: '$20.00', qty: 184, total: '$3,680.00' },
    { name: 'Marco Shoes', price: '$79.49', qty: 64, total: '$1,965.81' }
  ];

  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3>Top Selling Products</h3>
      </div>
      <div className="chart-content">
        <div className="products-table">
          <div className="table-row header">
            <div className="table-cell">Product</div>
            <div className="table-cell">Price</div>
            <div className="table-cell">Qty</div>
            <div className="table-cell">Total</div>
          </div>
          {products.map((product, index) => (
            <div key={index} className="table-row">
              <div className="table-cell">{product.name}</div>
              <div className="table-cell">{product.price}</div>
              <div className="table-cell">{product.qty}</div>
              <div className="table-cell">{product.total}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsTable;
