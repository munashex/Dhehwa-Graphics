import graphic from '../images/graphic.jpg' 
import Image from 'next/image' 
import { phases } from '../data/phase' 
import { whatWeDo } from '../data/graphics'


const Graphic = () => {

    const videoSrc = 'https://res.cloudinary.com/ditls34gp/video/upload/v1699094628/jjkvptqpqpl0gput6szb.mp4'

    return ( 
        <div className="animate-fade-down animate-delay-300"> 
         
          {/* image and description about graphic design and branding */}
         <div className=" my-9 md:my-12 w-[90%] border lg:border lg:shadow-lg md:border-none md:shadow-none  shadow-md mx-auto gap-y-5 flex flex-col md:flex-row gap-x-8 items-center">
         <Image src={graphic}  alt="dhehwagraphics" className="w-full md:w-[50%]"/> 

           <div className="space-y-3 w-full md:w-[50%]">
            <h1 className="text-xl md:text-3xl lg:text-4xl text-center text-slate-700 font-bold">Graphic Design & Branding</h1> 
             <h1 className="text-lg lg:text-xl p-2 md:p-0 lg:px-1 text-slate-700 text-center">Your branding is the first thing people see and determines how your brand is perceived. Our team will capture your identity and distil it into remarkable visuals.</h1>
            </div>
         </div>
         
         {/* about graphic desoign and branding */}
         <div className="flex flex-col gap-y-4 max-w-[90%] md:max-w-[70%] lg:max-w-[60%] mx-auto">
            <h1 className="text-xl font-bold   md:text-3xl lg:text-4xl text-slate-700">Building your brand identity.</h1>
             <h1 className="text-lg lg::text-xl text-slate-700">The importance of brand design cannot be overstated. Every surface, space or site people interact with your company is an opportunity for branding to shine and reflect who you are. Your company brand personality and visual identity are so much more than just a logo — they’re everything about how you appear to potential consumers.</h1>
            <h1 className="text-lg lg::text-xl text-slate-700">There are many individual components to a consistent and strong brand identity, including logos, typography and colour palettes, as well as complementary imagery. With a clear brand design strategy, you can create a memorable message about who you are across all platforms. You can have beautifully written copy, great values and the best prices around, but if your branding isn’t visually appealing and tying it all together, it may be for nothing.</h1>
            <h1 className="text-lg lg::text-xl text-slate-700">Whether you need to establish a visual identity or are looking to hit the refresh button on your current logo and branding, we provide a range of bespoke graphic design and advertising options to make sure you are recognisable everywhere.</h1>
        
         </div> 
      
         
         {/* video player */}
    <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
      <video
        className="absolute top-0 left-0 h-full w-full object-cover my-11"
        autoPlay
        muted
        loop
        playsInline // For mobile autoplay
        >
    <source src={`${videoSrc}#video_quality=hd`} type="video/mp4" />
    Your browser does not support the video tag.
  </video> 
  </div>

  {/* branding process */}
   <div className="flex flex-col gap-y-4 mt-24 max-w-[90%] md:max-w-[70%] lg:max-w-[60%] mx-auto">
    <h1 className="text-xl font-bold   md:text-3xl lg:text-4xl text-slate-700">Our branding process</h1> 
    <h1 className="text-lg lg:text-xl text-slate-700">Understanding the importance of brand design in generating a relationship between brand and customer is at the heart of our design work. Specialising in Benoni brand design, our team knows how to design a brand image that will resonate with customers and generate passion within your company.</h1>
   </div>

   {/* phases component */}
  <div className="bg-zinc-600 p-9 my-11">
   <div className="grid grid-cols-1 w-[95%] md:w-[90%] mx-auto md:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-9">
    {phases.map((phase) => (
        <div key={phase.title} className="flex flex-col gap-y-2 items-center  w-[100%] md:w-[90%] mx-auto"> 
         <Image src={phase.image} className="w-80"/> 
         <h1 className="text-white text-xl font-bold text-center">{phase.title}</h1> 
         <h1 className="text-lg  text-white text-center">{phase.description}</h1>
        </div>
    ))}
   </div>
  </div>

  <div className="flex flex-col gap-y-4 my-20 max-w-[90%] md:max-w-[70%] lg:max-w-[60%] mx-auto">
    <h1 className="text-xl font-bold   md:text-3xl lg:text-4xl text-slate-700">Why use a creative brand design agency?</h1> 
    <h1 className="text-lg lg:text-xl text-slate-700">Creating the right visual identity and knowing how to design your brand can be difficult, especially when accounting for your audience and what your competitors are already doing. In a cluttered digital world, ensuring your branding stands out and captures attention is fundamental to success. Our design and branding service will take the pressure off. We conduct research, design concepts and deliver branding solutions that get you results.</h1>
    <h1 className="text-lg lg:text-xl text-slate-700">Our creative minds are committed to delivering concepts and assets that you will love and will give the best possible presentation of your brand. Beyond the assets themselves, we can help you understand how to deploy them effectively and consistently, ensuring that your brand is sending the same message on all fronts.</h1>
    <h1 className="text-lg lg:text-xl text-slate-700">Using our agency’s branding designers and graphic designers ensures that you are getting unique and tailored branding solutions at cost-effective prices. Our graphic designs will transform everything unique about your brand into creative, memorable visuals that your audience will immediately associate with you.</h1>
  </div>


{/* what we do in graphic design  */} 
<div className="bg-zinc-600 p-9 my-11">
   <div className="grid grid-cols-1 w-[95%] md:w-[90%] mx-auto md:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-9">
    {whatWeDo.map((phase) => (
        <div key={phase.description} className="flex flex-col  gap-y-3 items-center  w-[100%] md:w-[90%] mx-auto"> 
         <Image src={phase.image} className="w-80" alt="dhehwagraphics"/> 
         <h1 className="text-lg  text-white text-center">{phase.description}</h1>
        </div>
    ))}
   </div>
  </div>

        </div>
    )
}

export default Graphic