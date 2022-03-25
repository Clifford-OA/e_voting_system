import React from 'react'

export default function AdminScreen() {
    return (
        <div className=''>
            <div className='bg-slate-100 w-full items-center pt-7'>
                <div className='h-1/4 w-4/5 m-auto justify-between flex pb-5'>
                    <h1 className='font-bold text-4xl'>Dashboard</h1>
                    <button className='bg-indigo-600 h-3/5 text-white font-[poppins] py-2 px-6 rounded md:ml-8 
                    hover:bg-indigo-400 duration-500'
                    >
                        <span className='text-3xl text-white mr-1 pt-5'>
                            <ion-icon name="add-circle-outline"></ion-icon>
                        </span>
                        New Election</button>
                </div>
            </div>
            <div className='w-full pb-10'>
                <div className='flex justify-between p-3'>
                    <div className='m-auto w-3/5'>
                        <input className='border-2 p-1 w-3/5 rounded-sm' type='text' placeholder='Search by election title' />
                        <span className='border-2 p-3 bg-slate-200 rounded'>
                            <ion-icon name="search-outline"></ion-icon>
                        </span>
                    </div>
                    <div>filter input</div>
                </div>
            </div>
            <div className='w-4/5 border-2 h-28 bg-white m-auto justify-between flex items-center text-black p-5'>
                <div>student election</div>
                <div>Start date</div>
                <div>end date</div>
            </div>
        </div>
    )
};
