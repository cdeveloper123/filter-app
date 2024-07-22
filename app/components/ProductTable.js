// components/ProductTable.js
import React from 'react';

const ProductTable = ({ products }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Regions</th>
          <th>Tags</th>
          <th>Active</th>
          <th>Public</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.name}>
            <td>{product.name}</td>
            <td>{product.regions.join(', ')}</td>
            <td>
              {product.tags.map((tag) => (
                <span key={tag} className="badge bg-info text-dark mx-1">
                  {tag}
                </span>
              ))}
            </td>
            <td>{product.active ? '✔️' : '❌'}</td>
            <td>{product.public ? '✔️' : '❌'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
