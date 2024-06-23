import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Error 404 - Page Not Found</h2>
                <p className="text-gray-600 mb-8">Please sign in first!!</p>
                <Link to={'/browse'}><p className='bg-blue-600 w-24 px-5 py-2 text-white font-bold'>Sign in</p></Link>
            </div>
        </div>
    );
};

export default ErrorPage;
