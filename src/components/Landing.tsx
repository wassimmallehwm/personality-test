import React, { useState } from 'react'
import { FaArrowDown } from 'react-icons/fa';
import Navbar from './shared/Navbar';
import landImg from '../assets/land2.svg'
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className='h-screen flex items-center justify-center'>
      <div className='landingPageContainer md:landingPageContainerMd'>
        <div className='py-8 grid grid-cols-1 justify-items-center md:justify-items-stretch md:grid-cols-[10fr_8fr] xl:grid-cols-[10fr_9fr] md:gap-4'>
          <div className='flex flex-col justify-start md:justify-center items-center'>
            <h1 className='text-4xl text-text_color md:text-5xl font-header leading-normal p-2'>
              <span className='border-b-4 border-b-green_1'>Personality test</span>
            </h1>
            <div className='flex gap-4 flex-wrap mx-auto text-center my-8'>
              <Link to="/test" className='flex items-center px-4 py-2 text-sm md:text-base font-semibold uppercase border-2 bg-primary text-slate-50 rounded-md'>
                Take the test
                {/* animate-bounce */}
                {/* <FaArrowDown className='ml-2 ' /> */}
              </Link>
              <Link to='/management' className='flex items-center px-4 py-2 text-sm md:text-base font-semibold uppercase border-2 border-primary rounded-md'>
                Test management
                {/* animate-bounce */}
                {/* <FaArrowDown className='ml-2 ' /> */}
              </Link>
            </div>
          </div>

          <div className='w-[330px] md:w-[400px] md:order-2 relative flex my-8 md:my-auto'>
            <img className='w-9/12 m-auto rounded-lg' src={landImg} alt="Landing" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing