import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';


const ToyDetails = () => {
  // const toy = useLoaderData()

  const [toy, setToy] = useState([]);
  const params = useParams();

  const getToy = async () => {
    const response = await fetch(`https://toy-shop-server-new.vercel.app/getToys/${params.id}`)
    const data = await response.json()
    setToy(data);
  }

  useEffect(() => {
    getToy();
  }, [])

  console.log(toy);
  const { description,
    imageUrl,
    name,
    price,
    quantity,
    rating,
    sellerEmail,
    sellerId,
    sellerName,

    subCategory } = toy
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={imageUrl} />
        <div>
          <h1 className=" py-2 text-2xl font-bold">Toy Name:{name}</h1>
          <h1 className=" py-2 text-2xl font-bold">Catagory:{subCategory}</h1>
          <p className="py-3 font-semibold">Description:{description}</p>
          <p className="py-3 font-semibold">Price:{price}</p>
          <p className="py-3 font-semibold">Rating : {rating}</p>
          <button className="btn btn-primary">Buy Me</button>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;