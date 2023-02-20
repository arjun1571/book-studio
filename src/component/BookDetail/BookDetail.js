import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetail = () => {
    const data = useLoaderData()
    console.log(data);
    const {authors,image,language,desc}=data
    return (
        <div>
            <div className="card lg:card-side h-3/5 m-20 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{authors}</h2>
                    <p>{language}</p>
                    <h2>{desc}</h2>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;