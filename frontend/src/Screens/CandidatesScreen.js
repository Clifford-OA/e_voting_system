import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function CandidatesScreen() {
    const navigate = useNavigate();
    const [voteIds, setVoteIds] = useState([]);
    const [counter, setCounter] = useState(0);

    const candidates = [
        {
            position1: [
                {
                    _id: '12345',
                    name: 'Osei Clifford',
                    image: 'images/1.jpg',
                },
                {
                    _id: '23451',
                    name: 'Osei Prince',
                    image: 'images/2.jpg',
                },
                {
                    _id: '34512',
                    name: 'Osei Hayford',
                    image: 'images/3.jpg',
                },
                {
                    _id: '45123',
                    name: 'Osei Henry',
                    image: 'images/4.jpg',
                }
            ],
            position2: [
                {
                    _id: 'qwerty',
                    name: 'Osei Rose',
                    image: 'images/4.jpg',
                },
                {
                    _id: 'wertyq',
                    name: 'Osei Linda',
                    image: 'images/3.jpg',
                },
                {
                    _id: 'ertyqw',
                    name: 'Osei Ellen',
                    image: 'images/2.jpg',
                },
                {
                    _id: 'rtyqwe',
                    name: 'Osei Mavis',
                    image: 'images/1.jpg',
                }
            ],
            position3: [
                {
                    _id: '12345',
                    name: 'Osei Clifford',
                    image: 'images/1.jpg',
                },
                {
                    _id: '23451',
                    name: 'Osei Prince',
                    image: 'images/2.jpg',
                },
                {
                    _id: '34512',
                    name: 'Osei Hayford',
                    image: 'images/3.jpg',
                },
                {
                    _id: '45123',
                    name: 'Osei Henry',
                    image: 'images/4.jpg',
                }
            ],
        }
    ];


    const keyObjects = Object.keys(candidates[0]);
    const numberOfPositions = keyObjects.length;
    const currentPositionCandidates = candidates[0][keyObjects[counter]];



    const takeIdHandler = (cand) => {
        setVoteIds([...voteIds, cand._id]);
        if (counter < numberOfPositions -1) {
            setCounter(counter + 1);
        } else {
            navigate('/done')
        }
    };
    

    useEffect(() => {
        console.log(voteIds)
        console.log(counter)
    }, [voteIds,counter]);




    return (
        <div>
            <div className='flex flex-wrap gap-10 px-2 mt-10 justify-center'>

                {currentPositionCandidates.map((currentPositionCandidate) => (
                    <div key={currentPositionCandidate._id} className='block w-80 h-100 mr-5 rounded-md shadow-md'>

                        <div className=' w-full h-80'>
                            <img className='object-cover w-full h-full' src={currentPositionCandidate.image} alt='img not found' />
                        </div>
                        <div className='flex flex-col justify-center items-center py-2 pb-5 ' >
                            <h1 className='font-bold text-3xl py-2'>{currentPositionCandidate.name}</h1>
                            <button onClick={() => takeIdHandler(currentPositionCandidate)} className='bg-indigo-600 text-white font-[poppins] py-2 px-6 rounded md:ml-8 
                            hover:bg-indigo-400 duration-500'
                            >vote</button>
                        </div>
                    </div>
                ))}

            </div>
            {/* <div className='mt-10 right-20  absolute'>
                <button disabled={round === 0 ? true : false} onClick={toPrev} className='bg-indigo-600 text-white font-[poppins] py-2 px-6 rounded md:ml-8 
                    hover:bg-indigo-400 duration-500'
                >Prev</button>
                <button disabled={round === numberOfPosition ? true : false} onClick={toNext} className='bg-indigo-600 text-white font-[poppins] py-2 px-6 rounded md:ml-8 
                    hover:bg-indigo-400 duration-500'
                >Next</button>
            </div> */}
        </div>
    )
}
