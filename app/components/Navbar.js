"use client" 
import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Logo from '../images/DhehwaLogo.png';
import Image from 'next/image';
import { GrClose } from 'react-icons/gr';
import { HiMiniBars3CenterLeft } from 'react-icons/hi2';
import Link from 'next/link';
import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from 'react-icons/md';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openServicesModal, setOpenServicesModal] = useState(false);

  const openServicesModalHandler = () => {
    setOpenServicesModal(true);
  };

  const closeServicesModalHandler = () => {
    setOpenServicesModal(false);
  };

  return (
    <div>
      {/* navbar bar on small screens */}
           {/* navbar bar on small screens */}
           <div className="flex md:hidden justify-between p-3">

<Link href="/">
<Image src={Logo} alt="dhehwagraphics"  
className="w-40 animate-fade-right animate-delay-300" />
 </Link>

<button className={`${openServices ? 'hidden': "outline-none border-none focus animate-fade-left animate-delay-300" }`}
onClick={() => setToggle(!toggle)}>
  {toggle ? <GrClose size={35} className="animate-fade" /> :
    <HiMiniBars3CenterLeft size={35} className="animate-fade" />}
</button>
</div>

{/* Conditionally render the content based on the state */}
{openServices ? (
<div className="flex flex-col items-center animate-fade-right gap-y-5 text-xl md:hidden">
  <button onClick={() => setOpenServices(false)} className="text-slate-700 border-none inline-flex items-center gap-x-1" >
    <MdOutlineArrowBackIosNew size={20}/> Back</button> 
  <Link href="/graphic-design"  >Graphic Design & Branding</Link> 
  <Link href="/printing"  className="hover:bg-gray-200 p-2">Printing</Link>
</div>
) : (
<div className={`${toggle ? "flex flex-col items-center  animate-fade-left  gap-y-5 text-xl  md:hidden" : 'hidden'}`}>
  
   
  <button className="border-none inline-flex items-center gap-x-1" onClick={() => setOpenServices(true)}>
     Services <MdArrowForwardIos size={20}/></button> 
     <Link href="/about"  onClick={() => setToggle(false)}>About</Link>  
     <Link href="/work" onClick={() => setToggle(false)}>Our work</Link>

</div>
)}

      {/* navbar on md and lg screens */}
      <div className="hidden md:flex items-center my-3 px-9 md:px-6 mx-9 md:mx-6 justify-between">
        
        <Link href="/">
        <Image src={Logo} alt="dhehwagraphics" className="w-44 animate-fade-right animate-delay-300" /> 
        </Link>
     

        <div className="space-x-11 flex text-xl animate-fade-left animate-delay-300">
          <button className="inline-flex gap-x-1 items-center" onClick={openServicesModalHandler}>Services <MdArrowForwardIos size={23}/></button>
          <Link href="/about" className="hover:border-b border-black">
            About
          </Link>
          <Link href="/work" className="hover:border-b border-black">
            Our work
          </Link>
        </div>
      </div>

      {/* Modal for Graphic Design and Printing */}
      <Modal open={openServicesModal} 
      onClose={closeServicesModalHandler} classNames={{modal: 'w-1/3'}}>
        <h1 className="text-xl font-bold">Services</h1> 
        <div className="text-lg my-3 flex flex-col" >
         <Link href="/graphic-design" className="hover:bg-gray-200 p-2" onClick={closeServicesModalHandler}>Graphic Design & Branding</Link> 
         <Link href="/printing"  className="hover:bg-gray-200 p-2" onClick={closeServicesModalHandler}>Printing</Link>
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;





