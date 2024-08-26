import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="flex items-center justify-between px-5 md:px- [150px] py-3">
        <h1 className="text-3xl font-bold">
          <Link>Blogs</Link>
        </h1>
        <h2>
          <Link to="/signup">Sign Up</Link>
        </h2>
      </div>
      <div className="w-full flex justify-center items-center h-[75vh]">
        <div className="flex flex-col justify-center items-center space-y-5 w-[75%] md:w-[25%]">
          <h1 className="text-lg text-sky-400">
            Welcome to Blog App Please Login To Your Account
          </h1>
          <input
            className="w-full px-3 py-2 border border-yellow-400"
            type="text"
            placeholder="Enter Your Email"
          />
          <input
            className="w-full px-3 py-2 border border-yellow-400"
            type="password"
            placeholder="Enter Your Password"
          />
          <button className="w-full px-2 py-2 text-lg font-bold text-center min-w-[8rem] text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px">
            Log In
          </button>
          <div className="flex justify-center items-center space-x-3">
            <p>Don't have an account?</p>
            <p className="text-sky-500 hover:text-sky-950">
              <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
