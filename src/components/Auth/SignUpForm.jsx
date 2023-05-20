import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import AuthButton from "./AuthButton";
import Spinner from "../Shared/Spinner";
const EMAIL_REGEX = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !name || !profileImageUrl) {
      setError("Please fill up all fields!");
      return;
    }
    
    if (!EMAIL_REGEX.test(email)) {
      setError("Please provide a valid email address!");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    setLoading(true);
    try {
      const authResponse = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("Account created successfully!");
      console.log(authResponse);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
      <p className="text-red-500 text-center mb-2 ">{error ?? ""}</p>
      <form onSubmit={handleSubmit}>
        {" "}
        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="peer border-2  block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
            id="exampleFormControlInput3"
            placeholder="Name"
          />
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            value={profileImageUrl}
            onChange={(e) => setProfileImageUrl(e.target.value)}
            type="text"
            className="peer border-2  block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
            id="exampleFormControlInput3"
            placeholder="Profile Image Url"
          />
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="peer border-2  block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
            id="exampleFormControlInput3"
            placeholder="Email address"
          />
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
            id="exampleFormControlInput33"
            placeholder="Password"
          />
        </div>
        <div className="mb-6 flex items-center justify-between">
          <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"></div>

          <div
            className=" transition duration-150
            ease-in-out hover:text-primary-600 focus:text-primary-600
            active:text-primary-700 dark:text-primary-400
            dark:hover:text-primary-500 dark:focus:text-primary-500
            dark:active:text-primary-600"
          >
            {" "}
            Already have an account?{" "}
            <Link className="text-primary" to="/login">
              Login
            </Link>
          </div>
        </div>
        <button
          type="submit"
          className="flex items-center justify-center w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          {loading ? <Spinner /> : "Sign Up"}
        </button>
        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
            OR
          </p>
        </div>
        <AuthButton />
      </form>
    </div>
  );
};

export default SignUpForm;