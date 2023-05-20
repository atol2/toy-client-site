import ReactMarkdown from "react-markdown";
import Container from "../components/Shared/Container";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const getBlog = async () => {
    const response = await fetch(
      import.meta.env.VITE_API_URL + `/blogs/${slug}`
    );
    const data = await response.json();
    setBlog(data.blog);
  };
  useEffect(() => {
    getBlog();
  }, []);
  return (
    <Container className="py-12 mx-auto w-[80%]">
      <h1 className="text-4xl text-center mb-8">{blog?.title}</h1>
      <ReactMarkdown>{blog?.content}</ReactMarkdown>
    </Container>
  );
};

export default BlogDetails;