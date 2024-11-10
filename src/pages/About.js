import React from 'react';

function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-2xl md:text-4xl font-bold text-green-600">About Us</h1>
      <p className="text-sm md:text-lg mt-4 text-gray-700">
        This is the about page, where you can learn more about us.
      </p>
    </div>
  );
}

export default About;
