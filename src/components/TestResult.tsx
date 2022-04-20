import React from 'react'
import { FaFlask, FaHome } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import emoji from '../assets/emoji.png'

const TestResult = () => {
    const { state }: any = useLocation()
    return (
        <div className='flex flex-col gap-12 justify-center items-center h-screen px-12 md:px-24 pt-24'>
        <div className='flex items-center justify-around w-full px-24'>
            <Link to="/" className='flex items-center text-sm md:text-base border-2 border-primary  rounded-md py-2 px-4'>
                <FaHome className='mx-1' />
                Home
            </Link>
            <Link to="/test" className='flex items-center text-sm md:text-base bg-primary text-slate-50 rounded-md py-2 px-4'>
                <FaFlask className='mx-1' />
                Retake the test
            </Link>
        </div>
            <p className='animate__animated animate__fadeInUp text-4xl text-center font-bold text-slate-600'>
                You are an {state.score > 10 ? 'Extrovert' : 'Introvert'}
            </p>
            <p className='animate__animated animate__fadeInUp animate__delay-2s text-4xl text-center font-bold text-slate-600'> You are awesome </p>
            <img src={emoji} alt="Emoji" className='animate__animated animate__fadeInUp animate__delay-3s w-48' />
        </div>
    )
}

export default TestResult