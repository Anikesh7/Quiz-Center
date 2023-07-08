import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';

function Submit({ final }) {
    const navigate = useNavigate();
    // function again() {
    //     navigate('/test');
    // }
    function change() {
        navigate('/');
    }
    return (
        <>
        <Navbar />
            <div class='flex items-center flex-col'>
                <div class='shadow-lg h-auto mt-32 w-60 flex justify-center p-3'>
                    <h1 class='text-2xl text-teal-500 '>Your Score:   </h1>
                    <h2 class='text-2xl text-orange-500 '>{final}/10</h2>
                </div>
                <div class='mt-10'>
                    {/* <button onClick={again} class='mx-6 bg-green-400 border hover:bg-white hover:border-green-500 hover:text-green-500 rounded-lg p-3 delay-100'>Try Again</button> */}
                    <button onClick={change} class='mx-6 bg-green-400 border hover:bg-white hover:border-green-500 hover:text-green-500 rounded-lg p-3 delay-100'>Change Topic</button>
                </div>
            </div>
        </>
    )
}

export default Submit