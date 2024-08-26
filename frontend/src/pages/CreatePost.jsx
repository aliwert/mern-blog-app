import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePost;
