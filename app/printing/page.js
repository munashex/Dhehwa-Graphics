import printing from '../images/printing.png'
import Image from 'next/image' 
import { products1 } from '../data/products1' 
import { products2 } from '../data/products2'

const Printing = () => {
    return (
        <div className="animate-fade-down animate-delay-300">  
           
           {/* about printing image and description */}
        <div className=" my-9 md:my-12 w-[90%] border lg:border lg:shadow-lg md:border-none md:shadow-none  shadow-md mx-auto gap-y-5 flex flex-col md:flex-row gap-x-8 items-center">
         <Image src={printing}  alt="dhehwagraphics" className="w-full md:w-[50%]"/> 

           <div className="space-y-3 w-full md:w-[50%]">
            <h1 className="text-xl md:text-3xl lg:text-4xl text-center text-slate-700 font-bold">Printing</h1> 
             <h1 className="text-lg lg:text-xl p-2 md:p-0 lg:px-1 text-slate-700 text-center">At Dhehwa graphics, we provide high-quality printing services for both personal and business use. We use advanced printing technology and top-quality materials to ensure that your prints look amazing.</h1>
            </div>
         </div>
         
         <div className="my-16 animate-fade animate-delay-1000">
         <h1 className="text-2xl md:text-2xl text-slate-700 lg:text-3xl text-center font-bold">Our most popular items for sale.</h1>
         <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4   w-[90%] mx-auto gap-x-6 gap-y-14 mt-9">
          {products1.concat(products2).map((prod) => (
            <div key={prod.title} className="space-y-1 border overflow-y-auto shadow-md hover:shadow-xl"> 
             <Image src={prod.image} alt="dhehwagraphics" className="h-[50%] w-full"/> 
             <h1 className="text-slate-700 text-lg p-2 font-semibold">{prod.title}</h1>  
             <h1 className="text-slate-700  p-2">{prod.description}</h1>
              
            </div>
          ))}
         </div>
      </div> 
         

        </div>
    )
}

export default Printing