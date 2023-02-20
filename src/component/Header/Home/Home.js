import React from 'react';
import "./Home.css"
import image from "../../../img/img.jpg"

const Home = () => {
    return (
        <div className='flex m-20 '>
            <div className='lg:w-1/2 md:w-0 p-3'>
                <h1 className='my-2 bg-amber-400 p-2 rounded-lg w-24'>ON SALE!</h1>
                <h1 className='text-xl font-bold'>Areader lives a </h1>
                <h1 className='text-xl font-bold'>thousand lives <span className='text-orange-700 text-2xl'>before he dies</span> </h1>
                <p className='my-3'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae sapiente omnis fugiat corporis magni debitis repudiandae in? Optio, tempora commodi.
                </p>
                <div className='mt-5 '>
                <button className="btn mr-3">Visit Store</button>
                <button >Learn more</button>
                </div>
            </div>
            <div className='w-1/2  '>
                <img className=' rounded p-3' src={image} alt="" />
            </div>
        </div>
    );
};

export default Home;