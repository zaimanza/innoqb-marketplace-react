import React from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
import { RiShoppingBagLine } from "react-icons/ri"
import { BiUserCircle } from "react-icons/bi"

const NavbarMobile = () => {
    return (

        <div className='px-[1rem] flex md:hidden h-[4rem] w-full bg-[#FFFFFF] justify-center items-center'>
            <GiHamburgerMenu className='h-[1.8rem] w-[1.8rem] text-black cursor-pointer' />
            <div className='w-[1.25rem]' />
            <AiOutlineSearch className='h-[1.8rem] w-[1.8rem] text-black cursor-pointer' />
            <div className='ml-auto flex'>
                <BiUserCircle className='ml-[1.25rem] h-[1.8rem] w-[1.8rem] text-black cursor-pointer' />
                <div className="ml-[1.25rem] relative w-[1.25rem] cursor-pointer">
                    <div className="bg-blue-400 min-w-[1rem] h-[1rem] absolute rounded-full flex justify-center items-center ml-[1rem] mb-[1rem] text-white text-[0.6rem]">0</div>
                    <RiShoppingBagLine className='h-[1.8rem] w-[1.8rem] text-black' />
                </div>
            </div>
        </div>
    )
}

export default NavbarMobile