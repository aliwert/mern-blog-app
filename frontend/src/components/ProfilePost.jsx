const ProfilePost = () => {
  return (
    <div>
      {" "}
      <div className="w-full flex mt-6 space-x-2">
        <div className="w-[38%] h-[200px] flex justify-center items-center">
          {/* Image's here */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbJS-A8NEllfqbKf-4GUKetJe8J3GKqKP6A&s"
            className=""
            alt=""
          />
        </div>
        <div className="flex flex-col w-[%60]">
          <h2 className="text-lg font-bold md:mb-2 mb-1 md:text-xl">
            What Is MERN Stack?
          </h2>
          <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
            <p className="text-sm md:text-lg">@aliwert</p>
            <div className="flex space-x-3">
              <p>08.25.2024</p>
              <p>20.07</p>
            </div>
          </div>
          <p className="text-sm">
            React is a declarative, efficient, and flexible JavaScript library
            for building user interfaces or UI components. It lets you compose
            complex UIs from small and isolated pieces of code called components
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePost;
