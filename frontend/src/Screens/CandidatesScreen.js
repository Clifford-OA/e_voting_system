import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listCandidates } from '../actions/candidateActions';
import MessageBox from '../Components/MessageBox';
import LoadingBox from '../Components/LoadingBox';

export default function CandidatesScreen() {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [voteIds, setVoteIds] = useState([]);
    const [counter, setCounter] = useState(0);

    const candidateList = useSelector(state => state.candidateList);
    const { loading, error, candidates } = candidateList;

    let keyObjects;
    let numberOfPositions;
    let currentPositionCandidates;

    if (candidates) {
        keyObjects = Object.keys(candidates);
        numberOfPositions = keyObjects.length;
        currentPositionCandidates = candidates[keyObjects[counter]];
        console.log(currentPositionCandidates)
    }

    const takeIdHandler = (cand) => {
        setVoteIds([...voteIds, cand._id]);
        if (counter < numberOfPositions ) {
            setCounter(counter + 1);

            console.log(counter, ' counter')
            console.log(numberOfPositions, ' numogposi')
        } else {
            console.log(voteIds, ' votes ids')
            // navigate('/done')
        }
    };


    useEffect(() => {
        dispatch(listCandidates());
        setVoteIds(voteIds)
        setCounter(counter)
        console.log(voteIds, ' ids')
    }, [voteIds, counter, dispatch]);


    return (
        <div>
            <div className='flex flex-wrap gap-10 px-2 mt-10 justify-center'>
                {loading ? (<LoadingBox></LoadingBox>
                ) : error ? (<MessageBox></MessageBox>
                ) : counter < numberOfPositions ? (
                    currentPositionCandidates.map((currentPositionCandidate) => (
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
                    ))) : (<div>
                        <div className='mt-10 right-20  absolute'>
                            <button className='bg-indigo-600 text-white font-[poppins] py-2 px-6 rounded md:ml-8 
                            hover:bg-indigo-400 duration-500'
                            >submit</button></div>
                    </div>)
                }

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
