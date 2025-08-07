import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return  (
    <div className="bg-gray-400">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm">
        <div>
          <Link to="/">
            <img className="w-20" src={assets.logo} alt="" />
          </Link>
          <p className="text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            aspernatur!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About us</li>
            </Link>
            <Link to="/orders">
              <li>Delivery</li>
            </Link>
            <Link to="">
              <li>Privacy policy</li>
            </Link>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <p className="text-gray-500">
              <Link to="Telto:08143720395">Tel: (+234) 8143720395</Link> <br />
              Tel: (+234) 7044232797
            </p>
            <Link to="mailto:vantascollections@outlook.com"><li>segunjoshua85@gmail.com</li></Link>
            <Link to="mailto:vantastmzcollections@outlook.com"><li>vantastmzcollections@outlook.com</li></Link>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ Vanta - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
