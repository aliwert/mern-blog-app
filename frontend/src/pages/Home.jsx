import Footer from "../components/Footer";
import HomePost from "../components/HomePost";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-[12rem]">
        <HomePost />
        <HomePost />
        <HomePost />
        <HomePost />
      </div>
      <Footer />
    </>
  );
};

export default Home;
