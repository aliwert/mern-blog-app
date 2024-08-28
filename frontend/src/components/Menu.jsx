const Menu = () => {
  const user = true;

  return (
    <div className="bg-sky-500 w-[200px] flex flex-col items-start absolute top-10 right-10 rounded-lg p-5 space-y-5">
      {!user && (
        <h3 className="text-white text-lg hover:text-sky-900 ">Login</h3>
      )}
      {!user && (
        <h3 className="text-white text-lg hover:text-sky-900 ">Sign Up</h3>
      )}
      {user && (
        <h3 className="text-white text-lg hover:text-sky-900 ">Profile</h3>
      )}
      {user && (
        <h3 className="text-white text-lg hover:text-sky-900 ">Create Post</h3>
      )}
      {user && (
        <h3 className="text-white text-lg hover:text-sky-900 ">My Blogs</h3>
      )}
      {user && (
        <h3 className="text-white text-lg hover:text-sky-900 ">Logout</h3>
      )}
    </div>
  );
};

export default Menu;
