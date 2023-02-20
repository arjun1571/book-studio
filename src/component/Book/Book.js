import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {isbn13,image,price,title}=book;
    return (
        <div>
            <Link to={`../books/${isbn13}`}>
            <div className="card w-96 h-auto	 glass">
                <figure><img src={image} alt="car!"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Price:${price}</p>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Book;