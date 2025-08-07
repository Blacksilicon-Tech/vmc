import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Title from "../components/Title";
const User = () => {
  return (
    <div>
        <Navbar />
      <div className="ml-8 py-8 text-3xl">
        <Title text1={"User"} text2={" Profile"} />
      </div>
        <Footer />
    </div>
  );
};

export default User;
