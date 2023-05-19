import { Link } from "react-router-dom";
import { generateSlugFromTitle } from "../../utils/generateSlugFromTitle";
const SingleBlog = ({ title, content }) => {
  return (
    <div className="card w-[45%] bg-white shadow-xl image-full  lg:w-96">
      <div className="card-body bg-gray-100 ">
        <h2 className="card-title text-gray-800">{title}</h2>
        <p className="text-gray-800">{content}</p>
        <div className="card-actions justify-start">
          <Link to={`/blog/${generateSlugFromTitle(title)}`}>
            <button className="btn btn-outline btn-sm">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;