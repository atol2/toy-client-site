import React from 'react';
import { useLoaderData } from 'react-router';


const ToyDetails = () => {
    const toy = useLoaderData()
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
    <img src={imageUrl} />
    <div>
      <h1 className="text-5xl font-bold">{name}</h1>
      <h1 className="text-3xl font-bold">{subCategory}</h1>
      <p className="py-3">{description}</p>
      <p className="py-3">$ {price}</p>
      <p className="py-3">Rating : {rating}</p>
      <button className="btn btn-primary">Buy Me</button>
    </div>
  </div>
</div>
    );
};

export default ToyDetails;