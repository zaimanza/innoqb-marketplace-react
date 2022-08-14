import React from 'react'

const FlatButton = ({ message }) => {
    return (
        <button className='absolute inset-x-0 bottom-0 w-full border border-gray-500 rounded-full p-2 font-semibold'>{message}</button>
    )
}

export default FlatButton