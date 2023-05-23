
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFirebaseUser from "../hooks/useFirebaseUser";
import Container from "../components/Shared/Container";

const MyToys = () => {
    const { user,loading } = useFirebaseUser();
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`https://toy-shop-server-new.vercel.app/getToys?sellerEmail=${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if(data.length !== 0) {
                    setToys(data)
                }
                
            });
    }, [user?.email]);

    const handleDelete = (id) => {
        const proceed = confirm("Are you sure you want to delete?");
        if (proceed) {
            fetch(`https://toy-shop-server-new.vercel.app/getToys/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remaining = toys.filter((toy) => toy._id !== id);
                        setToys(remaining);
                    }
                }).catch(console.error);
        }
    };

    return (
        <Container className="my-24">
            <h1 className="text-center text-4xl font-bold mb-8">My Toys</h1>
            <div className="overflow-x-auto my-8 w-full mx-auto ">
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Ratings</th>
                            <th>Price</th>
                            <th>Available</th>
                            <th>Update</th>
                            {/* <th>Edit</th> */}
                            <th>Details</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {toys.slice().map((toy) => (
                            <tr key={toy._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={toy.imageUrl}
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{toy.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {toy.subCategory}
                                    <br />
                                    {/* <span className="badge badge-ghost badge-sm"></span> */}
                                </td>
                                <td>{toy.rating}</td>
                                <td>${toy.price}</td>
                                <th>
                                    <span className="btn btn-ghost btn-xs">{toy.quantity}</span>
                                </th>
                                <th>
                                    <Link to={`/update/${toy._id}`} className="btn btn-outline btn-xs">Update</Link>
                                </th>
                                <th>
                                    <Link to={`/toys/${toy._id}`}>
                                        <button className="btn btn-outline btn-xs">
                                            View Details
                                        </button>
                                    </Link>
                                </th>
                                <td>
                                    <button onClick={() => handleDelete(toy._id)} className="btn btn-sm">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Container>
    );
};

export default MyToys;






