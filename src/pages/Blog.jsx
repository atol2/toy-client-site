import Container from "../components/Shared/Container";
import SingleBlog from "../components/SingleBlog";

const blogs = [
  {
    id: 1,
    title:
      "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
    content: "If a dog chews shoes whose shoes does he choose?",
  },
  {
    id: 2,
    title: "Compare SQL and NoSQL databases?",
    content: "If a dog chews shoes whose shoes does he choose?",
  },
  {
    id: 3,
    title: "What is express js? What is Nest JS?",
    content: "If a dog chews shoes whose shoes does he choose?",
  },
  {
    id: 4,
    title: "What is MongoDB aggregate and how does it work?",
    content: "If a dog chews shoes whose shoes does he choose?",
  },
];

const Blog = () => {
  return (
    <Container className="py-24">
      <h1 className="text-center text-4xl mb-12 font-bold">Blog</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {blogs.map((blog) => (
          <SingleBlog key={blog.id} title={blog.title} content={blog.content} />
        ))}
      </div>
    </Container>
  );
};

export default Blog;