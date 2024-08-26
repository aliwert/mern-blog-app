import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MdModeEdit, MdDelete } from "react-icons/md";

const PostDetail = () => {
  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[12rem] mt-7">
        <div className="flex justify-between items-center ">
          <h1 className="text-4xl font-bold text-sky-400 md:text-5xl">
            What Is MERN Stack?
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p className="text-yellow-500 hover:cursor-pointer">
              <MdModeEdit />
            </p>
            <p className="text-red-700 hover:cursor-pointer">
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3 md:mt-5">
          <p className="text-sm md:text-lg">@aliwert</p>
          <div className="flex space-x-3">
            <p>08.25.2024</p>
            <p>20.07</p>
          </div>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbJS-A8NEllfqbKf-4GUKetJe8J3GKqKP6A&s"
          className=""
          mx-auto
          mt-8
          alt=""
        />
        <p className="mx-auto mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nam
          suscipit illum vel mollitia. Mollitia sit voluptatibus vitae nihil
          eveniet consectetur similique illo magni soluta quidem, quasi
          incidunt, nesciunt harum?
        </p>
        <div className="flex items-center mt-7 space-x-3 font-semibold">
          <p>Categories: </p>
          <div className="flex justify-center items-center space-x-3">
            <div className="bg-sky-700 rounded-lg px-4 py-2 text-white">
              Tech
            </div>
            <div className="bg-sky-700 rounded-lg px-4 py-2 text-white">ML</div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h1 className="mt-5 mb-3 font-bold text-center text-sky-500">
            COMMENTS
          </h1>
          <div className="px-3 py-3 bg-sky-600 rounded-lg my-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-white">@aliwert</h4>
              <div className="flex justify-center items-center space-x-3">
                <p className="text-white">08.25.2024</p>
                <p className="text-white">20.07</p>
                <div className="flex items-center justify-center space-x-2">
                  <p className="text-yellow-500 hover:cursor-pointer">
                    <MdModeEdit />
                  </p>
                  <p className="text-red-700 hover:cursor-pointer">
                    <MdDelete />
                  </p>
                </div>
              </div>
            </div>
            <p className="px-3 mt-3 text-white">Thank You</p>
          </div>
          <div className="px-3 py-3 bg-sky-600 rounded-lg my-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-white">@aliwert</h4>
              <div className="flex justify-center items-center space-x-3">
                <p className="text-white">08.25.2024</p>
                <p className="text-white">20.07</p>
                <div className="flex items-center justify-center space-x-2">
                  <p className="text-yellow-500 hover:cursor-pointer">
                    <MdModeEdit />
                  </p>
                  <p className="text-red-700 hover:cursor-pointer">
                    <MdDelete />
                  </p>
                </div>
              </div>
            </div>
            <p className="px-3 mt-3 text-white">Thank You</p>
          </div>
          <div className="px-3 py-3 bg-sky-600 rounded-lg my-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-white">@aliwert</h4>
              <div className="flex justify-center items-center space-x-3">
                <p className="text-white">08.25.2024</p>
                <p className="text-white">20.07</p>
                <div className="flex items-center justify-center space-x-2">
                  <p className="text-yellow-500 hover:cursor-pointer">
                    <MdModeEdit />
                  </p>
                  <p className="text-red-700 hover:cursor-pointer">
                    <MdDelete />
                  </p>
                </div>
              </div>
            </div>
            <p className="px-3 mt-3 text-white">Thank You</p>
          </div>
        </div>
        <div className="flex flex-col mt-3 md:flex-row">
          <input
            className="md:w-[80%] outline-none px-3 mt-3 md:mt-0 bg-yellow-500"
            type="text"
            placeholder="Enter Your Comment"
          />
          <button className="w-full px-2 py-2 text-lg font-bold text-center min-w-[8rem] text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px">
            Add Comment
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetail;
