import React from 'react';

const Home = () => {
    return (
        <div className='flex w-1/2 m-20'>
            <div>
                <p >ON SALE!</p>
                <h1>Areader lives a </h1>
                <h1>thousand lives <span>before he dies</span> </h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae sapiente omnis fugiat corporis magni debitis repudiandae in? Optio, tempora commodi.
                </p>
                <button className="btn">Visit Store</button>
                <button>Learn more</button>
            </div>
            <div className='w-1/2'>
                <img className='m-10 h-48 w-96' src="https://img.freepik.com/premium-vector/web-design-ui-ux-programmer-with-computer-software-developer-flat-illustration-vector_128772-1138.jpg" alt="" />
            </div>
        </div>
    );
};

export default Home;