import { aboutDetails } from "../data/aboutData" 
import Image from 'next/image'
import Location from "../components/location" 

const About = () => {

    return (
        <div>
           <div className="my-12 animate-fade-down animate-delay-300"> 
      <h1 className="text-2xl md:text-2xl text-slate-700 lg:text-3xl text-center font-bold">About Dhehwa Graphics</h1>
      
      {/* about sections */}
      <div className="space-y-20 my-11">
        {aboutDetails.map((detail) => (
          <div key={detail.item} className="grid  grid-cols-1  md:grid-cols-2 justify-items-center"> 
           <Image src={detail.image} alt="dhehwagraphics" className="max-w-[90%]"/> 

           <div className="flex flex-col items-center gap-y-4 max-w-[90%] my-4 md:my-0"> 
            <h1 className="text-xl  font-bold text-slate-700" >{detail.title}</h1> 
            <h1 className="text-center text-lg text-slate-700">{detail.description}</h1>
           </div>
          </div>
        ))}
        </div>
      </div>

      <Location/>
        </div>
    )
}

export default About