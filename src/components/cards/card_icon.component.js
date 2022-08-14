import React from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai"

const CardIcon = ({ iconName }) => {
    const SetIcon = () => {
        switch (iconName) {
            case "AiOutlineHeart":
                return (<AiOutlineHeart className='h-[1.25rem] w-[1.25rem] hover:h-[1.3rem] hover:w-[1.3rem] mx-auto text-yellow-400 cursor-pointer' />)
            case "AiOutlineUser":
                return (<AiOutlineUser className='h-[1.25rem] w-[1.25rem] hover:h-[1.3rem] hover:w-[1.3rem] mx-auto text-yellow-400 cursor-pointer' />)
            case "AiOutlineShoppingCart":
            default:
                return (<AiOutlineShoppingCart className='h-[1.25rem] w-[1.25rem] hover:h-[1.3rem] hover:w-[1.3rem] mx-auto text-yellow-400 cursor-pointer' />)
        }
    }
    return (
        <div className='whitespace-nowrap '>
            <SetIcon />
            <div className="w-full  flex justify-center items-center">
                <label className='mx-auto'>Wish Lists</label>
            </div>
        </div>
    )
}

export default CardIcon