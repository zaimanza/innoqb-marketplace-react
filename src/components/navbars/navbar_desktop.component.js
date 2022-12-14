import React from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai"
import CardIcon from '../cards/card_icon.component'

const NavbarDesktop = () => {
    return (
        <div className='hidden md:flex h-[4rem] w-full bg-[#1B1D93] justify-center items-center'>
            <div className='w-[70%] flex justify-center items-center'>
                <div>
                    <img
                        className='max-h-[4rem] w-fit min-w-[7rem] cursor-pointer'
                        src="https://www.innoqb.com/images/logo.svg"
                        alt="innoqb" />
                </div>
                <div className='mx-auto min-w-[1rem]' />
                <div className="relative w-full max-w-[30rem]">
                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search" />
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                </div>
                <div className='mx-auto min-w-[1rem]' />
                <div className='text-white flex space-x-4 text-xs'>
                    <CardIcon iconName={"AiOutlineHeart"} />
                    <CardIcon iconName={"AiOutlineUser"} />
                    <div className='whitespace-nowrap '>
                        <div className="relative w-[1.25rem] hover:w-[1.3rem]">
                            <div className="bg-blue-400 min-w-[1rem] h-[1rem] absolute rounded-full flex justify-center items-center ml-[1rem] mb-[1rem] text-white text-[0.6rem]">0</div>
                            <AiOutlineShoppingCart className='h-[1.25rem] w-[1.25rem] hover:h-[1.3rem] hover:w-[1.3rem] text-yellow-400 cursor-pointer' />
                        </div>
                        <div className="w-full  flex justify-center items-center">
                            <label className='mx-auto'>Cart</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarDesktop