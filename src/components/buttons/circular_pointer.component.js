import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

const CircularPointer = ({ button_icon, onClick, styles }) => {

    const RenderIcon = () => {
        switch (button_icon) {
            case "AiOutlineArrowLeft":
                return (<AiOutlineArrowLeft className="h-6 w-6" />)
            case "AiOutlineArrowRight":
            default:
                return (<AiOutlineArrowRight className="h-6 w-6" />)
        }
    }
    return (
        <button
            onClick={onClick}
            className={`p-3 rounded-full bg-white border border-gray-100 shadow-lg ${styles}`}>
            <RenderIcon />
        </button>
    )
}

export default CircularPointer