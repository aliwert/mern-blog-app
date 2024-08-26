import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProfilePost from "../components/ProfilePost";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="px-7 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse">
        <aside className="flex flex-col md:w-[70%] w-full">
          <h1 className="text-2xl font-bold text-sky-500 mb-4">Your Posts</h1>
          <ProfilePost />
        </aside>

        <aside className="flex flex-col space-y-4 md:w[35%] w-full">
          <h1 className="text-2xl font-bold text-sky-500 mb-4">Profile</h1>
          <input
            type="text"
            className="bg-transparent border p-3 rounded-lg outline-none px-4 py-2"
            placeholder="Username"
          />
          <input
            type="email"
            className="bg-transparent border p-3 rounded-lg outline-none px-4 py-2"
            placeholder="Email"
          />
          <input
            type="Password"
            className="bg-transparent border p-3 rounded-lg outline-none px-4 py-2"
            placeholder="Password"
          />
          <div className="flex items-center space-x-4 mt-7">
            <button className="bg-slate-600 text-white px-3 py-2 font-bold cursor-pointer transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-translate-y-px">
              Update
            </button>
            <button className="bg-red-600 text-white px-3 py-2 font-bold cursor-pointer transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-red-600 to-red-500 hover:bg-gradient-to-b dark:shadow-red-900 shadow-red-200 hover:shadow-2xl hover:shadow-red-400 hover:-translate-y-px">
              Delete
            </button>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
