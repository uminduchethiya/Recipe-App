import React, { useState } from "react";
import { Link } from "react-router-dom";
import signupimg from "../../assets/signup.jpg";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConpassword] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any of the form fields are empty
    if (!name || !email || !password || !conpassword) {
      setError("All fields are required");
      return;
    }
    // Check if password and confirm password match
    if (password !== conpassword) {
      setError("Passwords do not match");
      return;
    }
    // Proceed with signup if all validation passes
    axios
      .post("http://localhost:5001/register", {
        name,
        email,
        password,
        conpassword,
      })
      .then((result) => {
        console.log(result);
        setSignupSuccess(true); // Set signup success to true
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      <div className="flex flex-col md:flex-row w-full h-screen">
        <div className="md:w-1/2 h-screen  bg-opacity-50  rounded-lg  md:bg-white md:rounded-none z-10">
          <img src={signupimg} alt="image" className="w-full h-full " />
        </div>
        <div className="md:w-1/2">
          <div className="md:text-start mx-10 mt-10 text-center md:mt-20">
            <h1 className="text-primaryColor font-bold md:text-6xl text-3xl">
              Welcome <span className="text-black ">Back</span>
            </h1>
            <h1 className="text-black font-bold text-2xl mt-5">
              Sign in with your email and password{" "}
            </h1>
          </div>
          {signupSuccess ? (
            <div className="text-center text-green-600 font-bold mt-4">
              Signup Successful!
            </div>
          ) : (
            //form signup
            <form
              onSubmit={handleSubmit}
              action="#"
              className="md:bg-transparent md:px-0 md:py-0 bg-orange-50 bg-opacity-75 px-10 py-10 rounded-xl mt-20"
            >
              <div className="flex flex-col space-y-1 md:w-[650px] w-[300px] mt-6 md:mx-10">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-gray-500"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1 md:w-[650px] w-[300px] mt-6 md:mx-10 ">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-500"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1 md:w-[650px] w-[300px] mt-6 md:mx-10 ">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1 md:w-[650px] w-[300px] mt-6 md:mx-10">
                <label
                  htmlFor="conpassword"
                  className="text-sm font-semibold text-gray-500"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  onChange={(e) => setConpassword(e.target.value)}
                />
              </div>
              {error && (
                <div className="text-center text-red-600 font-bold mt-4">
                  {error}
                </div>
              )}
              <div className="flex flex-col space-y-1 md:w-[600px] w-[250px] mt-6 md:mx-16 mx-5">
                <button className="justify-center border w-[100px] ml-[250px] px-4 py-2 text-lg font-semibold text-black transition-colors duration-300 bg-primaryColor rounded-lg focus:outline-none focus:ring-blue-200 focus:ring-4">
                  Signup
                </button>
              </div>
            </form>
          )}
          <div className="flex flex-col space-y-5">
            <span className="flex items-center justify-center space-x-2">
              <span className="h-px bg-gray-400 w-14"></span>
              <p className="message">
                Already registered? <Link to="/login">Sign In</Link>
              </p>
              <span className="h-px bg-gray-400 w-14"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
