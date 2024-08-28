import { useState } from "react";
import axios from "axios";
import { URL } from "../url";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const res = await axios.post(URL + "/api/auth/signup", {
        username,
        email,
        password,
      });
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setError(false);
      navigate("/login");
      // console.log(res.data);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between px-5 md:px- [150px] py-3">
        <h1 className="text-3xl font-bold">
          <Link>Blogs</Link>
        </h1>
        <h2>
          <Link to="/login">Login</Link>
        </h2>
      </div>
      <div className="w-full flex justify-center items-center h-[75vh]">
        <div className="flex flex-col justify-center items-center space-y-5 w-[75%] md:w-[25%]">
          <h1 className="text-lg text-sky-400">
            Create an Account and Start Your Journey With Us
          </h1>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-yellow-400"
            type="text"
            placeholder="Enter Your Username"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-yellow-400"
            type="text"
            placeholder="Enter Your Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-yellow-400"
            type="password"
            placeholder="Enter Your Password"
          />
          <button
            onClick={handleSignup}
            className="w-full px-2 py-2 text-lg font-bold text-center min-w-[8rem] text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px"
          >
            Sign Up
          </button>
          {error && (
            <span className="text-red-500 text-lg">Something went wrong!</span>
          )}
          <div className="flex justify-center items-center space-x-3">
            <p>Already have account?</p>
            <p className="text-sky-500 hover:text-sky-950">
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
