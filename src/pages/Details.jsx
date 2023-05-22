import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';



const Details = () => {
    const toy = useLoaderData();
    console.log(toy);
  const {description,
    imageUrl,
    name,
    price,
    quantity,
    rating,
    sellerEmail,
    sellerId,
    sellerName,
    
    subCategory} = toy
        
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={imageUrl} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <h1 className="text-5xl font-bold">{subCategory}</h1>
            <p>{price}</p>
            <p>{quantity}</p>
            <p>Rating: {rating}</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      
    );
};

export default Details;