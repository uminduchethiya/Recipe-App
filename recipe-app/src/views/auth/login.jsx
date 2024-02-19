import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginimage from "../../assets/login.jpg";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [emptyFieldError, setEmptyFieldError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setEmptyFieldError(true);
      return;
    }
    try {
      const response = await axios.post("http://localhost:5001/login", {
        email,
        password,
      });
      console.log(response);
      navigate("/home");
    } catch (error) {
      console.error(error);
      setLoginError(true);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="md:w-1/2 h-screen bg-opacity-50 rounded-lg md:bg-white md:rounded-none z-10">
        <img src={loginimage} alt="image" className="w-full h-full" />
      </div>
      <div className="md:w-1/2">
        <div className="md:text-start mx-10 mt-10 text-center md:mt-20">
          <h1 className="text-primaryColor font-bold md:text-6xl text-3xl">
            Welcome <span className="text-black">Back</span>
          </h1>
          <h1 className="text-black font-bold text-2xl mt-5">
            Sign in with your email and password{" "}
          </h1>
        </div>
        {/* login form */}
        <form
          onSubmit={handleSubmit}
          className="md:bg-transparent md:px-0 md:py-0 bg-orange-50 bg-opacity-75 px-10 py-10 rounded-xl"
        >
          <div className="flex flex-col space-y-4 md:w-[650px] w-[300px] mt-6 md:mx-10 ">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-500"
            >
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div className="flex flex-col space-y-4 md:w-[650px] w-[300px] mt-6 md:mx-10 ">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-gray-500"
              >
                Password
              </label>
              <Link to="/forgot-password" className="text-sm">
                Forgot Password?
              </Link>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>

          <div className="flex flex-col mt-6 md:mx-10 ">
            <button
              type="submit"
              className="px-4 py-2 text-lg border w-[100px] ml-[250px] font-semibold text-black transition-colors duration-300 bg-primaryColor rounded-lg focus:outline-none focus:ring-blue-200 focus:ring-4"
            >
              Log in
            </button>
          </div>
          {emptyFieldError && (
            <div className="text-center text-red-600 font-bold mt-4">
              Please fill in all fields.
            </div>
          )}
          {loginError && (
            <div className="text-center text-red-600 font-bold mt-4">
              Invalid email or password. Please try again.
            </div>
          )}
          <div className="flex flex-col mt-20 space-y-5">
            <span className="flex items-center justify-center space-x-2">
              <span className="h-px bg-gray-400 w-14"></span>
              <p className="message">
                Not registered? <Link to="/signup">Create an account</Link>
              </p>
              <span className="h-px bg-gray-400 w-14"></span>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
