import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 md:px-16 py-16 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-white">
            MediQueue
          </h1>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Newsletter */}
          <div>
            <h3 className="text-white mb-3 tracking-wide">NEWSLETTER</h3>
            <p className="mb-4 text-sm">
              Subscribe for exclusive travel deals and inspiration.
            </p>

            <div className="flex items-center bg-gray-800 px-4 py-3">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent outline-none flex-1 text-sm"
              />
              <span className="text-white text-lg">↗</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-3 tracking-wide">Tutor Service Links</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Tutors</li>
              <li className="hover:text-white cursor-pointer">My Tutors</li>
              <li className="hover:text-white cursor-pointer">My Booked Sessions</li>
              <li className="hover:text-white cursor-pointer">My Profile</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-3 tracking-wide">CONTACT US</h3>
            <ul className="space-y-2">
              <li>786 901 1622</li>
              <li>info@MediQueue.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2026 Wanderlust. All rights reserved.
          </p>

          <div className="flex gap-5 mt-4 md:mt-0 text-white text-lg">
            <span className="cursor-pointer"><FaXTwitter/></span>
            <span className="cursor-pointer"><FaLinkedin/></span>
            <span className="cursor-pointer"><IoIosMail/></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;