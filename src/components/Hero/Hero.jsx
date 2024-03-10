import React from 'react'
import OrangeImg from '../../assets/orangebg.png'
import Navbar from '../Navbar/Navbar';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

const Hero = () => {
    const [sideBar, setSideBar] = React.useState(false);

    return (
        <main className='md:px-12 md:py-6 bg-primaryDark'>
            <section className='relative min-h-[400px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md'>
                <div className="container">
                    {/* Navbar */}
                    <Navbar sideBar={sideBar} setSideBar={setSideBar} />
                    {/* Hero section */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[400px]'>
                    {/* text content section */}
                    <div className='flex text-white mt-[100px] md:mt-0 p-4 space-y-9'>
                        <div>
                            <h1 className='text-3xl pl-6 md:pl-14'>01_______</h1>
                        <h1 className='text-5xl font-bold uppercase text-shadow'>Healthy fruits</h1>
                        <p className='text-sm'>A new and authentic way to buy your fruits online. At Fruit Soko you will get fresh fruits at an affordable price.</p>
                        <button className='primary-btn'>Shop Now</button>
                        </div>
                        
                        {/* image section */}
                        <div>
                            <img src={OrangeImg} alt='Not Found' className='relative z-10 w-[600px] img-shadow lg:left-[100px]'/>
                        </div>

                        {/* blank div section */}
                        <div className='md:hidden'>

                        </div>
                    </div>
                    </div>
                </div>

                {/* background large text */}
                <h1 className='large-text'>Orange</h1>

                {/* sidebar section */}
                {sideBar && (
                    <div className='absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-primary to-secondary z-10'>
                        <div className='w-full h-full flex justify-center items-center'>
                            <div className='text-white flex flex-col justify-center items-center gap-6'>
                                {/* line */}
                                <div className='w-[1px] h-[70px] bg-white'></div>
                                    <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                                        <FaFacebookF className='text-2xl' />
                                    </div>
                                    <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                                        <FaInstagram className='text-2xl' />
                                    </div>
                                    <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                                        <FaLinkedinIn className='text-2xl' />
                                    </div>
                                {/* line */}
                                <div className='w-[1px] h-[70px] bg-white'></div>

                            </div>

                        </div>
                    </div>
                )}
            </section>
        </main>
    )
}

export default Hero