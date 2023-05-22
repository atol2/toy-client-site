import React from 'react';
import Container from '../components/Shared/Container';
import InputGroup from '../components/Shared/InputGroup';
import { useLoaderData } from 'react-router';

const Upadate = () => {
    const toy = useLoaderData();
    const {description, _id,
        imageUrl,
        name,
        price,
        quantity,
        rating,
        sellerEmail,
        sellerId,
        sellerName,
        
        subCategory} = toy
    const handleSubmit =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.sellerName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const imageUrl = form.imageUrl.value;
        const rating = form.rating.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
    

        const dataObj={ name,subCategory, rating,sellerName,description, imageUrl, sellerEmail, price, quantity};
        fetch(`https://toy-marketplace-server-ashen.vercel.app/bookings/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(dataObj)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
              alert('Updated successfully')
            }
        })

 
    }
    const handleChange=()=>{

    }
    return (
        <Container className="my-16">
        <h1 className="text-center text-4xl font-semibold mb-4">Add a Toy</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap gap-[4%] justify-start px-8">
            <InputGroup
              required
              name="name"
              placeholder={name}
              label="Name"
              onClick={handleChange}
            />
            <InputGroup
              required
              name="sellerName"
              placeholder={sellerName}
             
              onClick={handleChange}
              label="Seller Name"
            />
            <InputGroup
              required
              name="sellerEmail"
              placeholder={sellerEmail}
              
              onClick={handleChange}
              label="Seller Email"
              type="email"
            />
            <InputGroup
              required
              name="imageUrl"
              placeholder={imageUrl}
          
              onClick={handleChange}
              label="Image Url"
            />
            <InputGroup
              required
              name="rating"
              placeholder={rating}
              
              onClick={handleChange}
              label="Rating"
              type="number"
              min="0"
              max="5"
            />
            <InputGroup
              required
              name="subCategory"
              
              onClick={handleChange}
              placeholder={subCategory}
              label="Sub Category"
            />
            <InputGroup
             
              required
              onClick={handleChange}
              name="price"
              placeholder={price}
              label="Price"
              type="number"
            />
            <InputGroup
              
              required
              onClick={handleChange}
              name="quantity"
              placeholder={quantity}
              label="Available Quantity"
              type="number"
            />
            <InputGroup
              required
              
              onClick={handleChange}
              name="description"
              placeholder={description}
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