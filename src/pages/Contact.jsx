import Title from "../components/Title"
import { assets } from "../assets/assets";
import NewsletterBox from '../components/NewsletterBox';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={' US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>2, Fashina Strt Iwaya, <br />Yaba Lagos</p>
          <p className='text-gray-500'>Tel: (+234) 8143720395 <br />Tel: (+234) 7044232797</p>
          <p><Link to="mailto:vantastmzcollections@outlook.com">vantastmzcollections@outlook.com</Link></p>
          <p><Link to="mailto:vantacollections@outlook.com">vantacollections@outlook.com</Link></p>
        </div>
      </div>
      <NewsletterBox/>
      <Footer />
    </div>
  )
}

export default Contact
