



import React from 'react';
import { Link } from 'react-router-dom';





const ShowCategory = ({ category }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
  <img
    src={category.imageUrl}
    alt="Shoes"
    className="rounded-xl"
    style={{ width: '50px', height: '50px' }}
  />
</figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-semibold">Toy Name:{category.name}</h2>
        <h2 className="card-title font-semibold">Rating:{category.rating}</h2>
        <p className="font-semibold">Price:{category.price}</p>
        <p className="font-semibold">Description:{category.description}</p>
         <div className="card-actions">
          <Link to={`/details/${category._id}`} className="btn btn-primary">View Details</Link>
        </div> 
    

      </div>
    </div>
  );
};

export default ShowCategory;

 