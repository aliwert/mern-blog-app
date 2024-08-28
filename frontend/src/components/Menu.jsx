const Menu = () => {
  const user = true;

  return (
    <div className="bg-sky-500 w-[200px] flex flex-col items-start absolute top-10 right-10 rounded-lg p-5 space-y-5">
      {!user && (
        <h3 className="text-white text-lg hover:text-sky-900 cursor-pointer">
          Login
        </h3>
      )}
      {!user && (
        <h3 className="text-white text-lg hover:text-sky-900 cursor-pointer">
          Sign Up
        </h3>
      )}
      {user && (
        <h3 className="text-white text-lg hover:text-sky-900 cursor-pointer">
          Profile
        </h3>
      )}
      {user && (
        <h3 className="text-white text-lg hover:text-sky-900 cursor-pointer">
          Create Post
        </h3>
      )}
      {user && (
        <h3 className="text-white text-lg hover:text-sky-900 cursor-pointer">
          My Blogs
        </h3>
      )}
      {user && (
        <h3 className="text-white text-lg hover:text-sky-900 cursor-pointer">
          Logout
        </h3>
      )}
    </div>
  );
};

export default Menu;
