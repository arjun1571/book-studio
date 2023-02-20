import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../../Book/Book';

const Books = () => {
    const data = useLoaderData();
    const book=data.books;

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-4'>
            {
                book.map(book => <Book key={book.isbn13} book={book} ></Book>  )
            }
        </div>
    );
};

export default Books;