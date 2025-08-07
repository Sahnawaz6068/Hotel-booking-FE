import React from 'react';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-md">
      <h1 className="text-3xl font-bold text-center mb-4">About Me</h1>
      
      <p className="text-gray-700 mb-6 leading-relaxed">
       I love everything about what Happenstance is doing. I don't have many hobbies outside coding. I am not athletic, bad at singing, don't drink, can't dance. Building is the only thing I am good at. At this point, I want to be a part of taking something from 0-1 or 1 -{'>'} 100. I just want to be heads down chasing that goal
      </p>

      <h2 className="text-xl font-semibold mb-3">Connect With Me</h2>
      <ul className="space-y-2">
        <li>
          <a 
            href="https://www.linkedin.com/in/sahnawaz-husain-2a7373265/" 
            target="_blank" 
            className="text-blue-700 hover:underline"
          >
             LinkedIn
          </a>
        </li>
        <li>
          <a 
            href="https://github.com/Sahnawaz6068" 
            target="_blank"
            className="text-blue-500 hover:underline"
          >
             GitHub
          </a>
        </li>
        <li>
          <a 
            href="https://x.com/Sahnawaz_7" 
            target="_blank" 
            className="text-blue-500 hover:underline"
          >
            Twitter
          </a>
        </li>
        <li>
          <a 
           
            target="_blank" 
            className="text-gray-500 hover:underline"
          >
            9199643786
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
