import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const user = true;

  return (
    <div className="flex items-center justify-between px-5 md:px- [150px] py-3">
      <h1 className="text-3xl font-bold">
        <Link>Blogs</Link>
      </h1>
      <div className="flex justify-center items-center space-x-1">
        <p className="text-sky-500">
          <FaSearch />
        </p>
        <input
          className="w-[200px] md:w-[300px] px-2 py-1 rounded-full border border-sky-800 text-sky-500 outline-sky-500"
          placeholder="Search Post..."
          type="text"
        />
      </div>
      <div className="flex items-center justify-center space-x-1 md:space-x-10">
        <h2>
          <Link></Link>
        </h2>
        {user ? (
          <h2 className="text-sky-500">
            <Link to="/createpost">Create A Post</Link>
          </h2>
        ) : (
          <h2 className="text-sky-500">
            <Link to="/login">Login</Link>
          </h2>
        )}
        {user ? (
          <h2 className="text-sky-500">Profile</h2>
        ) : (
          <h2>
            <Link to="/signup">Sign Up</Link>
          </h2>
        )}
      </div>
    </div>
  );
};

export default Navbar;
