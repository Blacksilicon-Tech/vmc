import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
      <Footer />
    </div>
  );
};

export default Home;
