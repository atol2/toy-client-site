import React from 'react';
import { useLoaderData } from 'react-router';


const ToyDetails = () => {
    const toy = useLoaderData()
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
    <img src={imageUrl} />
    <div>
      <h1 className="text-5xl font-bold">{name}</h1>
      <h1 className="text-3xl font-bold">{subCategory}</h1>
      <p className="py-6">{description}</p>
      <p className="py-6">$ {price}</p>
      <p className="py-6">Rating : {rating}</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default ToyDetails;