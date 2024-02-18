import React from 'react'
import { Link } from "react-router-dom";
import signupimg from '../../assets/signup.jpg'

const signup = () => {
  return (
    <div className="">
            <div className="flex flex-col md:flex-row w-full h-screen">
                <div className="md:w-1/2 h-screen  bg-opacity-50  rounded-lg  md:bg-white md:rounded-none z-10">
                    <img
                        src={signupimg}
                        alt="image"
                        className="w-full h-full "
                    />
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
                    <form
                        onSubmit={""}
                        action="#"
                        className="md:bg-transparent md:px-0 md:py-0 bg-orange-50 bg-opacity-75 px-10 py-10 rounded-xl mt-20"
                    >
                        
                        <div className="flex flex-col space-y-1 md:w-[650px] w-[300px] mt-6 md:mx-10">
                            <label
                                htmlFor="email"
                                className="text-sm font-semibold text-gray-500"
                            >
                                Full Name
                            </label>
                            <input
                                
                                type="text"
                                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
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
                            />
                        </div>
                        <div className="flex flex-col space-y-1 md:w-[650px] w-[300px] mt-6 md:mx-10 ">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="text-sm font-semibold text-gray-500"
                                >
                                    Password
                                </label>
                            </div>
                            <input
                             
                                type="password"
                                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>

                        <div className="flex flex-col space-y-1 md:w-[650px] w-[300px] mt-6 md:mx-10">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="text-sm font-semibold text-gray-500"
                                >
                                    Confirm Password
                                </label>
                            </div>
                            <input
                               
                                type="password"
                                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>

                        <div className="flex flex-col space-y-1 md:w-[600px] w-[250px] mt-6 md:mx-16 mx-5">
                            <button className="justify-center px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-primaryColor rounded-lg focus:outline-none focus:ring-blue-200 focus:ring-4">Signup</button>
                        </div>
                        <div className="flex flex-col space-y-5">
                            <span className="flex items-center justify-center space-x-2">
                                <span className="h-px bg-gray-400 w-14"></span>
                                <p className="message">
                                    Not registered?{" "}
                                    <Link to="/login">Sign In</Link>
                                </p>
                                <span className="h-px bg-gray-400 w-14"></span>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default signup
