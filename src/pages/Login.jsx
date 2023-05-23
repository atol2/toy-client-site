import { useNavigate, Outlet } from "react-router-dom";
import LoginForm from "../components/Auth/LoginForm";


const Login = () => {

    return (
        <div>
            <section className="h-screen">
                <div className="container h-full px-6 py-24">
                    <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="w-full"
                                alt="Phone image"
                            />
                        </div>
                        <LoginForm />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;