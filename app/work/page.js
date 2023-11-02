"use client" 
import {HiOutlineArrowDownCircle} from 'react-icons/hi2'
import { works } from '../data/work'
import Image from 'next/image'

const Work = () => {


    return (
        <div className="animate-fade-down animate-delay-300">

          <div className="flex flex-col gap-y-8 items-center my-11">
          <h1 className="text-xl md:text-3xl lg:text-4xl text-center text-slate-700 font-bold" >Work we’ve done. Clients we’ve helped.</h1>
          <h1 className="text-xl md:text-3xl lg:text-4xl text-center text-slate-700 font-bold">Check out our recent results to see what we could deliver for you.</h1>
           <HiOutlineArrowDownCircle size={90} className="text-slate-700"/> 
        </div>

        {/* works images on work we have done for other clients */} 
        <div className="bg-zinc-200 p-9 my-11">
   <div className="grid grid-cols-1 w-[95%] md:w-[90%] mx-auto md:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-9">
    {works.map((phase) => (
        <div key={phase.image} className="flex flex-col  gap-y-3 items-center  w-[100%] md:w-[90%] mx-auto"> 
         <Image src={phase.image} className="w-full"/> 
        </div>
    ))}
   </div>
  </div>
        </div>
    )
} 

export default Work