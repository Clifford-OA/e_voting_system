import React, { useState } from 'react'

export default function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-4xl cursor-pointer flex items-center font-[poppins] text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                        <ion-icon name="archive-outline"></ion-icon>
                    </span>
                    E-voting
                </div>
                <div onClick={() => setOpen(!open)} className='text-5xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>

                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 
                        ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} 
                        md:opacity-100`}>
                    <li className='md:ml-8 text-2xl md:my-0 my-7'>
                        <a className='text-gray-800 hover:text-gray-400 duration-500' href='/'>Home</a>
                    </li>
                    <li className='md:ml-8 text-2xl md:my-0 my-7'>
                        <a className='text-gray-800 hover:text-gray-400 duration-500' href='/service'>Service</a>
                    </li>
                    <li className='md:ml-8 text-2xl md:my-0 my-7'>
                        <a className='text-gray-800 hover:text-gray-400 duration-500' href='/signin'>Sign in</a>
                    </li>
                    <button className='bg-indigo-600 text-white font-[poppins] py-2 px-6 rounded md:ml-8 
                    hover:bg-indigo-400 duration-500'
                    >Get Started</button>
                </ul>
            </div>
        </div>
    )
}
