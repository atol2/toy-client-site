import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../utils/firebase";
import toast from "react-hot-toast";
import { useState } from "react";
import Spinner from "../Shared/Spinner";
import { useNavigate } from "react-router-dom";
const AuthButton = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const SignUpWithGoogle = async () => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      const authResponse = await signInWithPopup(auth, provider);
      navigate('/');
      toast.success("Logged in successfully!");
      console.log(authResponse);
    } catch (error) {
      setLoading(false);
      console.error(error.message);
      toast.error("Login Failed!");
    }

    setLoading(false);
  };

  return (
    <button
      onClick={SignUpWithGoogle}
      className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-gray-800 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      style={{ backgroundColor: "white" }}
      href="#!"
      role="button"
      data-te-ripple-init
      data-te-ripple-color="light"
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          {" "}
          <svg
            id="Capa_1"
            version="1.1"
            viewBox="0 0 150 150"
            className="w-8 h-8"
          >
            <g>
              <path
                className="st14"
                d="M120,76.1c0-3.1-0.3-6.3-0.8-9.3H75.9v17.7h24.8c-1,5.7-4.3,10.7-9.2,13.9l14.8,11.5   C115,101.8,120,90,120,76.1L120,76.1z"
              />
              <path
                className="st15"
                d="M75.9,120.9c12.4,0,22.8-4.1,30.4-11.1L91.5,98.4c-4.1,2.8-9.4,4.4-15.6,4.4c-12,0-22.1-8.1-25.8-18.9   L34.9,95.6C42.7,111.1,58.5,120.9,75.9,120.9z"
              />
              <path
                className="st12"
                d="M50.1,83.8c-1.9-5.7-1.9-11.9,0-17.6L34.9,54.4c-6.5,13-6.5,28.3,0,41.2L50.1,83.8z"
              />
              <path
                className="st13"
                d="M75.9,47.3c6.5-0.1,12.9,2.4,17.6,6.9L106.6,41C98.3,33.2,87.3,29,75.9,29.1c-17.4,0-33.2,9.8-41,25.3   l15.2,11.8C53.8,55.3,63.9,47.3,75.9,47.3z"
              />
            </g>
          </svg>
          Sign in with Google
        </>
      )}
    </button>
  );
};

export default AuthButton;