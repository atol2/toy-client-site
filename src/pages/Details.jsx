import { Container } from 'postcss';
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
        
        
        <div className="hero min-h-screen bg-base-200 mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <img src={imageUrl} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className=" py-2 text-2xl font-bold">Toy Name:{name}</h1>
            <h1 className=" py-2 text-2xl font-bold">Catagory:{subCategory}</h1>
            <p className='py-2 font-bold'>Price:{price}</p>
            <p className='py-2 font-bold'>Available:{quantity}</p>
            <p className='py-2 font-bold'>Rating:{rating}</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      
    );
};

export default Details;