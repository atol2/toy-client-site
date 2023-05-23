import React, { useState } from 'react';
import Container from '../components/Shared/Container';
import InputGroup from '../components/Shared/InputGroup';
import { useLoaderData } from 'react-router';

const Upadate = () => {
  const toy = useLoaderData();
  const [updateData, setUpdateData] = useState({

    description: toy.description,
    price: toy.price,
    quantity: toy.quantity,

  })
  console.log(toy);  
  const { _id,
    imageUrl,
    name,
    price,
    description,
    quantity,
    rating,
    sellerEmail,
    sellerId,
    sellerName,

    subCategory } = toy
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const imageUrl = form.imageUrl.value;
    const rating = form.rating.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;


    const dataObj = { name, subCategory, rating, sellerName, description, imageUrl, sellerEmail, price, quantity };
    fetch(`https://toy-shop-server-new.vercel.app/toys/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(dataObj)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert('Updated successfully')
        }
      })


  }
  const handleChange = (e) => {
    setUpdateData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))

  }
  return (
    <Container className="my-16">
      <h1 className="text-center text-4xl font-semibold mb-4">Update Toy</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-[4%] justify-start px-8">
          <InputGroup
            disabled={true}
            name="name"
            value={name}
            label="Name"
            onClick={handleChange}
          />
          <InputGroup
            disabled={true}
            name="sellerName"
            value={sellerName}

            onClick={handleChange}
            label="Seller Name"
          />
          <InputGroup
            disabled={true}
            name="sellerEmail"
            value={sellerEmail}

            onClick={handleChange}
            label="Seller Email"
            type="email"
          />
          <InputGroup
            disabled={true}
            name="imageUrl"
            value={imageUrl}

            onClick={handleChange}
            label="Image Url"
          />
          <InputGroup
            disabled={true}
            name="rating"
            value={rating}

            onClick={handleChange}
            label="Rating"
            type="number"
            min="0"
            max="5"
          />
          <InputGroup
            disabled={true}
            name="subCategory"

            onClick={handleChange}
            value={subCategory} 
            label="Sub Category"
          />
          <InputGroup

            required={true}
            onClick={handleChange}
            name="price"
            label="Price"
            type="number"
          />
          <InputGroup

            required={true}
            onClick={handleChange}
            name="quantity"
            label="Available Quantity"
            type="number"
          />
          <InputGroup

            required={true}
            onClick={handleChange}
            name="description"
            label="Description"
            inputType="textarea"
          />
          <div className="flex w-full justify-end my-4">
            <button type="submit" className="btn ">
              Update Toy
            </button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default Upadate;