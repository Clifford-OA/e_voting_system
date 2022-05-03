import React from 'react'

import "flatpickr/dist/themes/material_green.css";


export default function InputIdScreen() {
    return (
        <div className='w-full items-center justify-center'>
            <div className='flex flex-col w-4/6 p-5 shadow-lg m-auto items-center justify-center'>
                <div className='block justify-center items-center pb-5'>
                    <h1 className='text-6xl font-medium mb-10'>E-Voting Runner</h1>
                    <h1 className='text-7xl font-sans mb-5'>Input Election ID</h1>
                </div>
                <div className='w-5/6 shadow-lg px-10 pt-10 pb-20'>
                    <form>
                        <div className='block w-full text-2xl p-3 mb-5'>
                            <label className="pb-10">Election ID :</label>
                            <input className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-2xlplaceholder-slate-400
                                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                    invalid:border-pink-500 invalid:text-pink-600
                                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
                                type='text' />
                        </div>
                       
                        <div className='mt-10 right-20 justify-center items-center'>
                            <button className='bg-indigo-600 text-white font-[poppins] py-2 px-6 rounded md:ml-8 
                            hover:bg-indigo-400 duration-500'
                            >Continue <i className='shadow-sm justify-center items-center bg-slate-400 rounded  text-white'><ion-icon  name="arrow-forward-outline"></ion-icon></i> </button></div>
                    </form>
                </div>
            </div>
        </div>
    )
}
