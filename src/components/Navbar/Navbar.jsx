import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = ({ sideBar, setSideBar }) => {
    return (
        <div className='absolute top-0 left-0 w-full py-2 text-white z-20'>
            <div className="container">
                <div className="flex justify-between items-center">
                    {/* logo section */}
                    <h1 className='text-4xl font-bold uppercase'>Soko <span className='font-normal text-2xl'>Fruit</span>
                    </h1>

                    {/* Navlinks section */}
                    <ul className='lg:flex hidden space-x-5 text-xl'>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Where to find</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>

                    {/* Hamburger menu */}
                    <div>
                        <GiHamburgerMenu className='text-3xl cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar