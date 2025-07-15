"use client";
import React from 'react';

const AnimationContainer = ({ children, delay = 0, reverse, className }) => {
    return (
        <div 
            className={`opacity-100 ${className || ''}`}
            style={{ 
                animationDelay: `${delay}s`,
            }}
        >
            {children}
        </div>
    );
};

export default AnimationContainer;
