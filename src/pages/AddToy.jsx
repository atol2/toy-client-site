


import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Container from "../components/Shared/Container";
import InputGroup from "../components/Shared/InputGroup";
import useFirebaseUser from "../hooks/useFirebaseUser";




  const AddToy = () => {
  const { user } = useFirebaseUser();
  const [form, setForm] = useState({
    name: "",
    sellerName: user?.displayName ?? "",
    sellerEmail: user?.email ?? "",
    subCategory: "",
    price: "",
    quantity: "",
    description: "",
  });

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      sellerName: user?.displayName ?? "",
      sellerEmail: user?.email ?? "",
    }));
  }, [user]);

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // First fetch request
      const response1 = await fetch('http://localhost:5000/toys', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          price: Number(form.price),
          quantity: Number(form.quantity),
          sellerId: user.uid,
          rating: Number(form.rating),
        }),
      });
  
      const data1 = await response1.json();
      console.log(data1);
      toast.success('Toy Added Successfully');
  
      // Second fetch request
      const response2 = await fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Specify the data for the second request
          ...form,
          price: Number(form.price),
          quantity: Number(form.quantity),
          sellerId: user.uid,
          rating: Number(form.rating),
        }),
      });
  
      const data2 = await response2.json();
      
      toast.success('Booking Added Successfully');
      console.log(data2);
      // Perform actions with the second fetch response data
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };
    
  return (
    <Container className="my-16">
      <h1 className="text-center text-4xl font-semibold mb-4">Add a Toy</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-[4%] justify-start px-8">
          <InputGroup
            required
            name="name"
            placeholder="Enter Name"
            label="Name"
            value={form.name}
            onClick={handleChange}
          />
          <InputGroup
            required
            name="sellerName"
            placeholder="Enter Seller Name"
            value={form.sellerName}
            onClick={handleChange}
            label="Seller Name"
          />
          <InputGroup
            required
            name="sellerEmail"
            placeholder="Enter Seller Email"
            value={form.sellerEmail}
            onClick={handleChange}
            label="Seller Email"
            type="email"
          />
          <InputGroup
            required
            name="imageUrl"
            placeholder="Enter Image Url"
            value={form.imageUrl}
            onClick={handleChange}
            label="Image Url"
          />
          <InputGroup
            required
            name="rating"
            placeholder="Enter Rating"
            value={form.rating}
            onClick={handleChange}
            label="Rating"
            type="number"
            min="0"
            max="5"
          />
          <InputGroup
            required
            name="subCategory"
            value={form.subCategory}
            onClick={handleChange}
            placeholder="Enter Sub Category"
            label="Sub Category"
          />
          <InputGroup
            value={form.price}
            required
            onClick={handleChange}
            name="price"
            placeholder="Enter Price"
            label="Price"
            type="number"
          />
          <InputGroup
            value={form.quantity}
            required
            onClick={handleChange}
            name="quantity"
            placeholder="Enter Quantity"
            label="Available Quantity"
            type="number"
          />
          <InputGroup
            required
            value={form.description}
            onClick={handleChange}
            name="description"
            placeholder="Enter Description"
            label="Description"
            inputType="textarea"
          />
          <div className="flex w-full justify-end my-4">
            <button type="submit" className="btn ">
              Add Toy
            </button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default AddToy;