"use client" 
import React from 'react';
import Image from 'next/image';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import flyer from './images/flyer.jpg'; 
import slider1 from './images/slider1.jpg'
import slider2 from './images/slider2.jpg' 
import slider3 from './images/slider3.jpg'
import slider4 from './images/slider4.jpg' 
import slider5 from './images/slider5.jpg'
import { products1 } from './data/products1';  
import { products2 } from './data/products2';
import support from './images/support.jpg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Page = () => {

  const settings = {
    dots: false, // Hides the dots
    arrows: false, // Hides the arrows
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enables autoplay
    autoplaySpeed: 3000, // Sets the delay to 3 seconds (3000 milliseconds)
  };

 
  // image carousel sliders 
  const sliders = [
    {image: flyer}, {image: slider1}, 
    {image: slider2}, {image: slider3},
     {image: slider4}, {image: slider5}
    ]

    let phoneNumber = 27760299975

    const openWhatsApp = () => {
      // Message that you want to pre-fill in the WhatsApp chat
      const message = "Hi there, I'm interested in availing your services for __________..";
  
      // Construct the URL with the phone number and message
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
      // Open the WhatsApp link in a new tab/window
      window.open(whatsappURL, '_blank');
    };
  
       


  return (
    <div className="mt-3 md:mt-9">

      {/* overview about dhehwagraphics */}
      <div className="relative animate-fade-down animate-delay-700"> 

        <Slider {...settings}>
         {sliders.map((pic) => (
          <Image src={pic.image}  
          alt="dhewagraphics"
          className="h-64 object-cover lg:h-96"
          />
         ))}
        </Slider>

        <div className="absolute top-11 space-y-3 text-slate-700 left-2 lg:left-12">
          <h1 className="text-3xl lg:text-5xl font-semibold invisible md:visible">
            Design your vision
          </h1>
          <h1 className="text-lg lg:text-xl invisible md:visible">
            Transform your ideas into stunning visuals
          </h1>
          <button onClick={openWhatsApp} className="text-lg lg:text-xl invisible md:visible shadow rounded-full bg-white  text-slate-700 p-2 px-4 font-bold inline-flex items-center gap-x-2 animate-fade-right animate-delay-1000">
            <FaSquareWhatsapp size={40} color="green" /> Message us on Whatsapp
          </button>
        </div>
      </div>

      <div className="space-y-3 text-slate-700 left-2 lg:left-40 flex flex-col items-center my-5">
        <h1 className="text-3xl font-semibold flex md:hidden">Design your vision</h1>
        <h1 className="text-lg flex md:hidden">Transform your ideas into stunning visuals</h1>

        <button
       className="text-lg md:hidden rounded-full shadow border bg-white text-slate-700 p-2 px-4 font-bold inline-flex items-center gap-x-2"
        onClick={openWhatsApp}
          >
         <FaSquareWhatsapp size={40} color="green" /> Message us on Whatsapp
        </button>

      </div>

      {/* best selling products */}
      <div className="my-14 animate-fade animate-delay-1000">
        <h1 className="text-2xl md:text-2xl text-slate-700 lg:text-3xl text-center font-bold">Our top selling products</h1>
         
         <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4   w-[90%] mx-auto gap-x-6 gap-y-14 mt-9">
          {products1.map((prod) => (
            <div key={prod.title} className="space-y-1 border overflow-y-auto shadow-md hover:shadow-xl"> 
             <Image src={prod.image} alt="dhehwagraphics" className="h-[50%]"/> 
             <h1 className="text-slate-700 text-lg p-2 font-semibold">{prod.title}</h1>  
             <h1 className="text-slate-700 font-thin p-2">{prod.description}</h1>
              
            </div>
          ))}
         </div>
      </div> 

     {/* support  component with image for what we do  */} 
     <div className="flex flex-col md:flex-row shadow-lg  border rounded-none md:rounded-md w-[100%] gap-y-3 md:w-[90%]  mb-20 mx-auto gap-x-11 items-center">
      <Image src={support} alt="dhehwagraphics" className="w-[100%] md:w-[50%]"/> 
      <div className="md:space-y-2 w-[90%] md:w-[50%]">
        <h1 className="text-lg lg:text-xl text-slate-700 font-semibold px-2">Support for brands big and small</h1> 
        <h1 className="text-slate-700 font-thin lg:text-lg px-2 py-2 md:py-0">Whether you’re a startup or a household name, our business plans are designed for you. With all the help you need – like easy ordering for your team, special business discounts and pro design support.</h1>
      </div>
     </div>  

     {/* another components for products md and lg screens */}
     <div className="my-14 animate-fade animate-delay-1000">
         <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4  w-[90%] mx-auto gap-x-6 gap-y-14 mt-9">
          {products2.map((prod) => (
            <div key={prod.title} className="space-y-1 border overflow-y-auto shadow-md hover:shadow-xl"> 
             <Image src={prod.image} alt="dhehwagraphics" className="h-[50%] w-full"/> 
             <h1 className="text-slate-700 text-lg p-2 font-semibold">{prod.title}</h1>  
             <h1 className="text-slate-700 font-thin p-2">{prod.description}</h1>
              
            </div>
          ))}
         </div>
      </div>  

   
    
    </div>
  );
};

export default Page;

