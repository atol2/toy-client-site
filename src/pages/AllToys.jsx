import { Link } from "react-router-dom";
import Container from "../components/Shared/Container";
import { toys } from "../../data/toys";
const AllToys = () => {
  return (
    <Container className="my-24">
      <h1 className="text-center text-4xl font-bold mb-8">All Toys</h1>
      <div className="overflow-x-auto my-8 w-full mx-auto ">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available</th>
              <th>Seller Name</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {toys.slice(0, 20).map((toy) => (
              <tr key={toy.id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{toy.toyName}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {toy.subCategory}
                  <br />
                  <span className="badge badge-ghost badge-sm">Toys</span>
                </td>
                <td>${toy.price}</td>
                <th>
                  <span className="btn btn-ghost btn-xs">{toy.quantity}</span>
                </th>{" "}
                <th>
                  <span className="btn btn-ghost btn-xs">{toy.seller}</span>
                </th>
                <th>
                  <Link to={`/toys/${toy.link}`}>
                    <button className="btn btn-outline btn-xs">
                      View Details
                    </button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default AllToys;