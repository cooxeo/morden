import React from 'react'
import ag from '../assets/ag.jpg'
import AA from '../assets/AA.jpg'

const Bottom = () => {
  return (
    <div><div className="relative">
    {/* Image */}
    <img
      className="w-full h-screen object-cover"
      src={AA}
      alt="Your image"
    />
    
    {/* Transparent black overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
        {/* Text */}
        <h1 className="text-white text-7xl font-bold mb-4">IMAGE</h1>
        <h1 className="text-white text-center text-7xl font-bold mb-4">YOU CAN SEE</h1>
        
        {/* Paragraph */}
        <p className="text-white text-xl font-normal text-center px-4 mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, dolor.</p>
        
        {/* Button */}
        <button className="bg-white text-black px-4 py-2 font-bold mt-6 text-xl w-44  rounded-full hover:text-white hover:bg-black">Discover More</button>
      </div>
  </div></div>
  )
}

export default Bottom