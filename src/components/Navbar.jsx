import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../quiz.png'

function Navbar() {
    return (
        <>
            <nav class="flex items-center bg-gray-800 p-3 px-20 flex-wrap">
                <p class="p-2 mr-4 inline-flex items-center">
                <img class='h-8 mr-2' src={logo} alt="logo" />
                    <span class="text-xl text-white font-bold uppercase tracking-wide"
                    >Quiz Center</span
                    >
                </p>
                <button
                    class="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
                    data-target="#navigation"
                >
                    <i class="material-icons">menu</i>
                </button>
                <div
                    class="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
                    id="navigation"
                >
                    <div
                        class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"
                    >
                        <p
                            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
                        >
                            <NavLink to="/">Home</NavLink>
                        </p>
                        <p
                            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
                        >
                            <NavLink to="/">About</NavLink>
                        </p>
                        <p
                            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
                        >
                            <NavLink to="/contact">Contact Us</NavLink>
                        </p>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar