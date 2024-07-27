import Link from 'next/link'
import React from 'react'
import { FaUserDoctor } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import { BiBookBookmark } from "react-icons/bi";
import { PiSignInBold } from "react-icons/pi";

function Header() {
  return (
    <div className='flex items-center justify-between px-[3rem] py-[1rem] bg-slate-200 shadow-lg fixed top-0 left-0 w-[100vw] cursor-pointer'>
      <Link href='/' className='text-[3rem]'>Home</Link>
      <div  className='flex items-center gap-6 md:gap-4'>  
      <Link href='/' className='text-[2.1rem] font-medium cursor-pointer'>
       <div className='flex items-center '>  
        <FaCircleUser className='text-[1.7rem] mr-2'/>
       <a className='text-[2.1rem] hidden md:block font-medium'>User</a>
       </div></Link>
       <Link href='/' className='text-[2.1rem] font-medium cursor-pointer'> <div className='flex items-center '> 
        <BiBookBookmark className='text-[1.7rem] mr-2'/>
       <a className='text-[2.1rem] hidden md:block font-medium'>Appoitment</a>
       </div></Link>

       <Link href='/' className='text-[2.1rem] font-medium cursor-pointer'>
       <div className='flex items-center '>  
        <FaUserDoctor className='text-[1.7rem] mr-2'/>
       <a className='text-[2.1rem] hidden md:block font-medium'>Doctor</a>
       </div></Link>
 
       <Link href='/' className='text-[2.1rem] font-medium cursor-pointer'>
       <div className='flex items-center '>  
        <PiSignInBold className='text-[1.7rem] mr-2'/>
       <a className='text-[2.1rem] hidden md:block font-medium'>SignUp</a>
       </div></Link>

</div>
    </div>
  )
}

export default Header
