import ReactMarkdown from "react-markdown";
import Container from "../components/Shared/Container";

const title =
  "What is an access token and refresh token? How do they work and where should we store them on the client-side?";
const content = `
# If a dog chews shoes whose shoes does he choose?
We need to talk about the dog's choice of shoes. It's a very
important topic that we need to discuss. The dog's choice of
shoes is very important to the dog. The dog's choice of shoes
is very important to the dog. The dog's choice of shoes is

## very important to the dog. The dog's choice of shoes is very
important to the dog. The dog's choice of shoes is very
important to the dog. The dog's choice of shoes is very

### important to the dog. The dog's choice of shoes is very
`;
const BlogDetails = () => {
  return (
    <Container className="py-12 mx-auto w-[80%]">
      <h1 className="text-4xl text-center mb-8">{title}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Container>
  );
};

export default BlogDetails;