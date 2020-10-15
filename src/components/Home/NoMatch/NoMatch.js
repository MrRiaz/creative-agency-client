import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div className="p-5 d-flex flex-column justify-content-center">
            <h2>Page not found</h2>
            <p>404 error</p>
            <Link to="/">Home</Link>
        </div>
    );
};

export default NoMatch;