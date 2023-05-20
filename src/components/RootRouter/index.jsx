import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
  import Home from "../../pages/Home";
  import Blog from "../../pages/Blog";
  import AddToy from "../../pages/AddToy";
  import AllToys from "../../pages/AllToys";
  import Layout from "../Layout";
  import NotFoundPage from "../../pages/404";
  import BlogDetails from "../../pages/BlogDetails";
  import Login from "../../pages/Login";
  import SignUp from "../../pages/SignUp";
  import PrivateRoute from "../Shared/PrivateRoute";
  import MyToys from "../../pages/MyToys";
  import ToyDetails from "../../pages/ToyDetails";
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/toys" element={<AllToys />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
          <Route path="my-toys" element={<MyToys />} />
          <Route path="/add-toy" element={<AddToy />} />
          <Route path="/toys/:slug" element={<ToyDetails />} />
        </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  
  export default router;