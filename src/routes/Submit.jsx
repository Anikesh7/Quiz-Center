import React from 'react'
import { useNavigate } from 'react-router-dom'

function Submit({ final }) {
    const navigate = useNavigate();
    function again() {
        navigate('/test',{replace: true});
    }
    function change() {
        navigate('/');
    }
    return (
        <>
            <div className='flex items-center flex-col'>
                <div className='shadow-lg h-auto mt-32 w-60 flex justify-center p-3'>
                    <h1 className='text-2xl text-teal-500 '>Your Score:   </h1>
                    <h2 className='text-2xl text-orange-500 '>{final}/10</h2>
                </div>
                <div className='mt-10'>
                    <button onClick={again} className='mx-6 bg-green-400 hover:bg-green-600 rounded-lg p-3'>Try Again</button>
                    <button onClick={change} className='mx-6 bg-green-400 hover:bg-green-600 rounded-lg p-3'>Change Topic</button>
                </div>
            </div>
        </>
    )
}

export default Submit