import React from 'react'
import CheckoutSteps from '../Components/CheckoutSteps'

export default function AddPositionScreen() {
    return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <div className='w-full items-center justify-center'>
                <div className='flex flex-col w-11/12 p-5 shadow-lg m-auto items-center justify-center'>
                    <div className='block justify-center items-center pb-5'>
                        <h1 className='text-6xl font-medium mb-10'>E-Voting Runner</h1>
                        <h1 className='text-7xl font-sans mb-5'>Add All Positions</h1>
                    </div>
                    <div className='flex w-full shadow-lg justify-around px-10 pt-10 pb-20'>
                        <form className='lg:w-5/12 md:w-full'>
                            <div className='block w-full text-2xl p-3 mb-5'>
                                <label className="pb-10">Position Name:</label>
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
                                >Add <i className='shadow-sm justify-center items-center bg-slate-400 rounded  text-white'>
                                        <ion-icon name="add-outline"></ion-icon>
                                    </i>
                                </button>
                            </div>
                        </form>
                        <div className='lg:w-5/12 md:w-full'>
                            <div className='block p-3 shadow-lg rounded-sm'>
                                <div className='flex py-3'>
                                    <div className=' border p-2 w-10/12'>
                                        <h3>Name of Candidates</h3>
                                    </div>
                                    <div>
                                        <button className='h-full bg-red-600 text-white font-[poppins] py-2 rounded px-2
                                    hover:bg-red-400 duration-500'
                                        >Delete <i className='shadow-sm justify-center items-center bg-slate-400 rounded  text-white'>
                                                <ion-icon name="arrow-forward-outline"></ion-icon>
                                            </i>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className=' border p-2 w-10/12'>
                                        <h3>Name of Candidates</h3>
                                    </div>
                                    <div>
                                        <button className='h-full bg-red-600 text-white font-[poppins] py-2 rounded px-2
                                    hover:bg-red-400 duration-500'
                                        >remove <i className='shadow-sm justify-center items-center bg-slate-400 rounded  text-white'>
                                                <ion-icon name="arrow-forward-outline"></ion-icon>
                                            </i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
