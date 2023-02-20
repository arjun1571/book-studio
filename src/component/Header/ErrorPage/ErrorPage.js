import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div className='text-center py-10'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            { error && (
                <p>
                <i className='text-red-800'>{error.statusText || error.message}</i>
                <p>
                    {error.status}
                </p>
            </p>
            )
                
            }
        </div>
    );
};

export default ErrorPage;