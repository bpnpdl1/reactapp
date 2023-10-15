'use client'
import Header from '@/Components/Header';
import React, { useState } from 'react';

const Page = () => {
    const [marks, setMarks] = useState(80); // set marks to 0
    const [name, setName] = useState('Bikram Paudel'); // set name to 'Bipin Paudel'
    return (
       
        <>

        <Header name={name} />
      
         <div>
        <h1 className='text-xl text-blue-900'>My Marks is {marks}</h1>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setMarks(marks + 1)}>Increment</button>
        </div>
        
        </>
    );
}

export default Page;  // export the component