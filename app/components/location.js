

const Location = () => {

    return (
        <div className="text-center bg-gray-100 p-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Location</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50945.63210120908!2d28.340615930805612!3d-26.136997401159036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e953ea1a352bf37%3A0xec7ee329009aac86!2s6%20Henschel%20St%2C%20Crystal%20Park%2C%20Benoni%2C%201515!5e0!3m2!1sen!2sza!4v1698679749485!5m2!1sen!2sza"
         className="w-full"
          height="450" 
          style={{border: 0}} 
          allowfullscreen=""
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade"> 
           </iframe>
      </div>
      
    )
}

export default Location

