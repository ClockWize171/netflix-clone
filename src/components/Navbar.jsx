import React from 'react'
import logo from '../assets/neatflex.png'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
            <img src={logo} alt="NEATFLEX" className='w-28 md:w-32 lg:w-48 sm:w-28' />
            <div>
                <button
                    className='text-white pb-2 pr-4'>
                    Sign In
                </button>
                <button
                    className='bg-red-600 hover:bg-red-500 px-6 py-2 rounded cursor-pointer text-white'>
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default Navbar