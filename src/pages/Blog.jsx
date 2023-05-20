import Container from "../components/Shared/Container";
import SingleBlog from "../components/SingleBlog";
import { useEffect, useState } from "react";



const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const getBlogs = async () => {
    const response = await fetch(import.meta.env.VITE_API_URL + "/blogs");
    const data = await response.json();
    setBlogs(data.blogs);
  };
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <Container className="py-24">
      <h1 className="text-center text-4xl mb-12 font-bold">Blog</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {blogs.map((blog) => (
           <SingleBlog
           key={blog._id}
           title={blog.title}
           content={blog.content}
         />
        ))}
      </div>
    </Container>
  );
};

export default Blog;