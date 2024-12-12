// import React from 'react'

// const Navbar = () => {
//     return (
//         <>
//             <div className='bg-[#ffffff1f] flex items-center w-full justify-between fixed top-0'>
//                 <div className="logo ">
//                     <p className='text-[2vw] px-[6vw] font-bold py-3 '>Ochi</p>
//                 </div>

//                 <div className='flex items-center justify-center'>
//                 {["Service", "Our Work", "About Us", "Insights", "Contact Us"].map((item, index) => {
//                 return (
//                 <p className={`text-lg px-5 ${index === 4 && "ml-28 mr-5"} hover:underline transition-all` }>{item}</p>
//                 )
//             })}
//             </div>
//             </div>
//         </>
//     )
// }

// export default Navbar










import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setIsMobile(false);
    }
  };

  return (
    <nav className="w-full bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">MyLogo</div>

       <ul
        className={`md:flex md:items-center justify-center ${
          isMobile ? 'absolute top-0 left-0 w-full h-screen justify-center flex items-center flex-col bg-gray-800 text-center font-bold text-3xl gap-14' : 'hidden'
        } md:block space-y-8 md:space-y-0 md:space-x-8 text-white`}
      >
        <li>
          <a href="#home" className="hover:text-gray-400" onClick={handleLinkClick}>
          Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-400" onClick={handleLinkClick}>
            About
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-gray-400" onClick={handleLinkClick}>
          Our Work
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-400" onClick={handleLinkClick}>
            Contact
          </a>
        </li>
      </ul>

      <button className="block md:hidden text-white text-2xl" onClick={toggleMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
