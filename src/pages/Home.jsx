import React from 'react'
import Marquee from "react-fast-marquee";
import PP from '../assets/PP.png'
import { FaArrowDown } from "react-icons/fa6";
import Middle from './Middle';
import Layout from './Layout.jsx'
import Bottom from './Bottom.jsx'



const Home = () => {
  return (
    <>
    <div className='w-full h-screen bg-gradient-to-b from-[#4a494a] to-[#1c1c1c]'>
        <div className='flex max-w-none w-100% h-screen lg:px-14 lg:pr-0 px-6 pt-36 justify-between'>
            <div className='flex w-[50%] '>
              <div className='leading-[120px] lg:mt-12'>
                <h1 className='w-full sm:text-[130px] text-[90px] font-bold text-white'>IMAGE</h1>
                <h1 className='w-full sm:text-[130px] text-[90px] font-bold text-white'>YOU</h1>
                <h1 className='w-full sm:text-[130px] text-[90px] font-bold text-white pl-16'>CAN</h1>
                <h1 className='w-full sm:text-[130px] text-[90px] font-bold text-white'>SEE</h1>
              </div>

              <div className=''>
                <img className='absolute h-[60%] lg:h-auto sm:h-[60%] sm:pr-14 right-0 lg:left-24 bottom-0  sm:mt-0  lg:ml-44 lg:mt-[75px] object-cover ' src={PP} alt="/" />
                <div className=' absolute bg-gradient-to-t from-[#000000] to-[#00000004] bottom-0 w-[100%] h-[7em] left-0 lg:left-10 lg:right-0 lg:translate-x-[-50%] lg:translate-y-0'>
                </div>
                <button className='flex absolute bottom-5  lg:translate-x-[-50%] lg:translate-y-0 text-white border-[0.5px] border-gray-400 hover:border-white px-2 py-2 rounded-full items-center gap-4 font-bold backdrop-blur-md bg-black/10 lg:left-96  left-5 mx-2 '>Discover More<FaArrowDown /></button>
              </div>
              
            </div>
            <div className='bg-gradient-to-b from-[#000000] to-[#000000c1] h-auto hidden lg:block w-[50%]'>
            <Marquee >
              <img className='w-[400px] h-[275px] space-x-5 p-2 pt-0 object-cover ' src='https://images.pexels.com/photos/5400806/pexels-photo-5400806.jpeg?auto=compress&cs=tinysrgb&w=600' alt="/" />
              <img className='w-[400px] h-[275px] space-x-5 p-2 pt-0 object-cover' src='https://images.pexels.com/photos/24286136/pexels-photo-24286136.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt="/" />
              <img className='w-[400px] h-[275px] space-x-5 p-2 pt-0 object-cover' src='https://images.pexels.com/photos/22644812/pexels-photo-22644812/free-photo-of-light-will-guide-you-home.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt="/" />
              <img className='w-[400px] h-[275px] space-x-5 p-2 pt-0 object-cover' src='https://images.pexels.com/photos/22674331/pexels-photo-22674331/free-photo-of-a-black-and-white-photo-of-a-person-making-coffee.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt="/" />
            </Marquee>
            <Marquee direction='right'>
              <img className='w-[400px] h-[275px] space-x-5 p-2 object-cover ' src='https://images.pexels.com/photos/953457/pexels-photo-953457.jpeg?auto=compress&cs=tinysrgb&w=600' alt="/" />
              <img className='w-[400px] h-[275px] space-x-5 p-2 object-cover' src='https://images.pexels.com/photos/2985097/pexels-photo-2985097.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt="/" />
              <img className='w-[400px] h-[275px] space-x-5 p-2 object-cover' src='https://images.pexels.com/photos/2846361/pexels-photo-2846361.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt="/" />
              <img className='w-[400px] h-[275px] space-x-5 p-2 object-cover' src='https://images.pexels.com/photos/2256268/pexels-photo-2256268.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt="/" />
            </Marquee>
            </div>
        </div>
    </div>
    <div className='lg:hidden pt-4 pb-2'>
    <Marquee direction='right'>
              <img className='w-[400px] h-[275px] space-x-5 p-2 pt-0 object-cover ' src='https://images.pexels.com/photos/5400806/pexels-photo-5400806.jpeg?auto=compress&cs=tinysrgb&w=600' alt="/" />
              <img className='w-[400px] h-[275px] space-x-5 p-2 pt-0 object-cover' src='https://images.pexels.com/photos/24286136/pexels-photo-24286136.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt="/" />
              <img className='w-[400px] h-[275px] space-x-5 p-2 pt-0 object-cover' src='https://images.pexels.com/photos/22644812/pexels-photo-22644812/free-photo-of-light-will-guide-you-home.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt="/" />
              <img className='w-[400px] h-[275px] space-x-5 p-2 pt-0 object-cover' src='https://images.pexels.com/photos/22674331/pexels-photo-22674331/free-photo-of-a-black-and-white-photo-of-a-person-making-coffee.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt="/" />
            </Marquee>
    </div>
    <Middle/>
    <Layout/>
    <Bottom/>
    </>
  )
}

export default Home