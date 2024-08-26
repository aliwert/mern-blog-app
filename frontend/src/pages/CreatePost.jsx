import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { RxCross2 } from "react-icons/rx";

const CreatePost = () => {
  return (
    <div>
      <Navbar />
      <div className="px-5 md:px-[12rem] mt-7">
        <h1 className="font-bold md:text-2xl text-xl mt-7 text-center text-sky-500">
          Create Post
        </h1>
        <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-5">
          <input
            type="text"
            className="bg-transparent border p-3 rounded-lg outline-none px-4 py-2"
            placeholder="Enter Post Title"
          />
          <input
            type="file"
            className="bg-transparent border p-3 rounded-lg outline-none px-4 py-2"
          />
          <div className="flex flex-col ">
            <div className="flex items-center space-x-4 md:space-x-8 ">
              <input
                type="text"
                className="bg-transparent border rounded-lg px-3 py-2 outline-none"
                placeholder="Enter Post Category"
              />
              <div className="bg-slate-600 text-white px-3 py-2 font-bold cursor-pointer transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px">
                Add
              </div>
            </div>
            <div className="flex px-4 mt-3">
              <div className="flex justify-center items-center space-x-3 mr-3 bg-sky-600 px-2 py-1 rounded-md mt-4 w-28">
                <p>Tech</p>
                <p className="text-red-700rounded-full cursor-pointer p-1">
                  <RxCross2 />
                </p>
              </div>
              <div className="flex justify-center items-center space-x-3 mr-3 bg-sky-600 px-2 py-1 rounded-md mt-4 w-28">
                <p>Tech</p>
                <p className="text-red-700rounded-full cursor-pointer p-1">
                  <RxCross2 />
                </p>
              </div>
              <div className="flex justify-center items-center space-x-3 mr-3 bg-sky-600 px-2 py-1 rounded-md mt-4 w-28">
                <p>Tech</p>
                <p className="text-red-700rounded-full cursor-pointer p-1">
                  <RxCross2 />
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePost;
