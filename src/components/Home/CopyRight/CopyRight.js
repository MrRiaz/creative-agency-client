import React from 'react';

const CopyRight = () => {
    const style={
        color: 'rgba(0, 0, 0, 0.70)',
    }
    return (
        <div className="text-center">
            <p style={style}>Copyright Orange labs {(new Date()).getFullYear()} </p>
        </div>
    );
};

export default CopyRight;