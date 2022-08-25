import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import logo from "../assets/logo.png";
import { UserAuth } from "../context/AuthContext";

const style = {
  loginContainer: `w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700`,
  loginForm: `space-y-4 md:space-y-6`,
  heading: `text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white`,
  label: `block mb-2 text-sm font-medium text-gray-900 dark:text-white`,
  input: `bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`,
  signInButton: `w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`,
};

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };

  const { googleSignIn, user } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/chat");
    }
  }, []);

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-blue-900 px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a
        href="#"
        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
        Chat App
      </a>
      <div className={style.loginContainer}>
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className={style.heading}>Sign in to your account</h1>
          <form className={style.loginForm} action="#">
            <div>
              <label htmlFor="email" className={style.label}>
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={style.input}
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label htmlFor="password" className={style.label}>
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className={style.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required=""
              />
            </div>
            <button
              type="submit"
              className={style.signInButton}
              onClick={signIn}
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
              Or
            </p>
            <div className="flex justify-center items-center">
              <GoogleButton onClick={handleGoogleSignIn} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
