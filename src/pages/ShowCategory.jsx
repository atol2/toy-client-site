

import React from 'react';
import { Link } from 'react-router-dom';

const ShowCategory = ({ category }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={category.imageUrl} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{category.name}</h2>
        <h2 className="card-title">{category.subCategory}</h2>
        <p>$ {category.price}</p>
        <div className="card-actions">
          <Link to={`/details/${category._id}`} className="btn btn-primary">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ShowCategory;
