import React from 'react';

export default function BackgroundAnimation() {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    </div>
  );
}
