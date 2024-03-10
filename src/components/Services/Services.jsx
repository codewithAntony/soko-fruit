import React from 'react'
import Fruits1 from "../../assets/fruits/fruits1.webp"
import Fruits2 from "../../assets/fruits/fruits2.png"
import Fruits3 from "../../assets/fruits/fruits3.png"

const ServicesData = [
    {
        id: 1,
        image: Fruits1,
        title: "Fresh Fruits",
        subtitle: "",
        aosDelay: "300"
    },
    {
        id: 2,
        image: Fruits2,
        title: "Fresh Fruits",
        subtitle: "",
        aosDelay: "500"
    },
    {
        id: 3,
        image: Fruits3,
        title: "Orange Juice",
        subtitle: "",
        aosDelay: "700"
    },
]

const Services = () => {
    return (
        <div className='container my-16 space-y-4'>
            {/* header section */}
            <div className='text-center max-w-lg mx-auto space-y-2'>
                <h1 className='text-3xl font-bold text-dark'>Fresh and <span className='text-primary'>Tasty Fruits</span>
                </h1>

            </div>

            {/* card section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {ServicesData.map(({ id, image, aosDelay}) => (
                    <div key={id} data-aos="fade-up" data-aos-delay={aosDelay}>
                        <img src={image} alt="" />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Services