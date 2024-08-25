import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-5 md:px- [150px] py-3">
      <h1 className="text-3xl">
        <Link>Blogs</Link>
      </h1>
      <div className="flex items-center justify-center space-x-3 md:space-x-3">
        <h2>Login</h2>
        <h2>Register</h2>
      </div>
    </div>
  );
};

export default Navbar;
