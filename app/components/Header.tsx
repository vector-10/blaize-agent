"use client"
import React, { useState } from 'react';
import Link from "next/link"


const Header = () => {   
      return (
       <div className='navigation h-[5rem] md:text-lg bg-black text-white flex items-center justify-around'>
       <div className='logo cursor-pointer'>
         <h1>blaize-agent</h1>
       </div>
       <div className='links flex items-center justify-center py-2 px-2 text-black border divide-x divide-gray-300'>
         <Link href='/about' className='px-4 hover:bg-[#021e60] hover:text-white transition delay-100 ease-in'>Home</Link>
         <Link href='/developers' className='px-4 hover:bg-[#021e60] hover:text-white transition delay-100 ease-in'>About</Link>
         <Link href='/solutions'className='px-4 hover:bg-[#021e60] hover:text-white transition delay-100 ease-in'>Developers</Link>
         <Link href='/resources' className='px-4 hover:bg-[#021e60] hover:text-white transition delay-100 ease-in'>Resources</Link>
       </div>  
       <div className='media flex space-x-4'>
            <a className='border p-2 flex items-center rounded md:text-lg'>X</a>
            <a className='border p-2 flex items-center rounded md:text-lg'>D</a>
            <a className='border p-2 flex items-center rounded md:text-lg'>T</a>         
       </div>
     </div>     
      );
}

export default Header