const Login = () => {
  return (
    <div className="w-full flex justify-center items-center h-[75vh]">
      <div className="flex flex-col justify-center items-center space-y-5 w-[75%] md:w-[25%]">
        <h1 className="text-lg text-sky-400">
          Welcome to Blog App Please Login To Your Account
        </h1>
        <input className="" type="text" placeholder="Enter Your Email" />
        <input className="" type="password" placeholder="Enter Your Password" />
        <button className="w-full px-4 py-4 text-lg font-bold text-center min-w-[100px] text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
