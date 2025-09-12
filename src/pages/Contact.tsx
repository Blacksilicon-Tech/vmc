import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-pink-700 text-center mb-10">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            VMC Squared Limited
          </h2>
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-pink-600 text-xl mt-1" />
            <p className="text-gray-700">
              No. 20, Camc Street, Ooma Small <br />
              London, Ibafo, Ogun State
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-pink-600 text-xl" />
            <a
              href="mailto:victoraniyi@gmail.com"
              className="text-gray-700 hover:underline"
            >
              victoraniyi@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-pink-600 text-xl" />
            <a
              href="tel:+2349032090817"
              className="text-gray-700 hover:underline"
            >
              0903 209 0817
            </a>
          </div>

          {/* Interactive Google Map */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Find us on the map
            </h3>
            <iframe
              title="VMC Squared Limited Location"
              src="https://www.google.com/maps?q=Ibafo,Ogun+State,Nigeria&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
            <a
              href="https://www.google.com/maps?q=Ibafo,Ogun+State,Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
            >
              View Larger Map
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Send us a message
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-600 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-600 outline-none"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-600 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
