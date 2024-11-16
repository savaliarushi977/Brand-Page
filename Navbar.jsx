import React from 'react'

const Navbar = () => {
  return (
    <nav className=" h-[72px] w-[1440px] py-[15px] px-[85px]  flex items-center justify-between ">
        
        <img src="./images/brand_logo.png" alt="logo" className='w-[76px] h-[42.75px]'/> 
        <ul className='flex flex-row gap-[24px] h-[24px] w-[333px] my-[24px]'>
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
        <button className='bg-red-600 text-white px-5 py-1'>Login</button>
    </nav>
  )
}

export default Navbar
