import React from "react";
import Img from "../assets/images/undraw_reading_time_re_phf7 1.svg";
import google from "../assets/images/Vector.svg";
const Login = () => {
  return (
    <div className="flex h-full gap-4">
      <div className="flex-2 flex item-center justify-center">
        <img src={Img} alt="sample_img" />
      </div>
      <div className="flex-1">
        <div className="bg-white h-full rounded-[2rem]">
          <div className="bg-[#2F8F9D]  rounded-t-[2rem] h-[4rem] flex  items-center justify-around">
                      <button className="text-white font-bold text-2xl">SignUp</button>
                      <h1 className="text-white font-bold text-2xl">|</h1>
            <button className="text-white font-bold text-2xl">SignIn</button>
          </div>
          <div className="flex flex-col items-center ">
            <h1 className="text-black font-bold text-3xl mt-5">
              Dvelve In the world of books!!
            </h1>

            <input
              type="text"
              className="mt-10 w-64 h-10 px-4 bg-[#D9D9D9] border rounded-md focus:outline-none focus:border-[#2F8F9D]"
              placeholder="Username"
              color="blue"
            />
            <input
              type="password"
              className="mt-2 w-64 h-10 px-4 bg-[#D9D9D9] border rounded-md focus:outline-none focus:border-[#2F8F9D] color-blue"
              placeholder="Password"
              color="blue"
            />

            <button
              type="submit"
              className="mt-10 w-64 h-10 px-4 bg-[#2F8F9D] border rounded-md text-white font-bold"
            >
              SignUp/SignIn
            </button>

            <h6 className="text-black font-bold  mt-5">OR</h6>

            <button
              type="submit"
              className="mt-7 w-64 h-10 px-4  border border-[#2F8F9D] rounded-[2rem] text-black font-bold flex justify-around items-center"
                      >
                          <img src={google} alt="" />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
