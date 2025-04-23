import React from 'react';

const Card = ({ children, className }) => (
    <div className={`bg-white rounded-lg shadow-lg p-4 ${className}`}>
        {children}
    </div>
);

export default Card;