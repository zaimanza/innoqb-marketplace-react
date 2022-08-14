import React from 'react'
import FlatButton from '../buttons/flat_button.component'

const CardFlat = ({ product }) => {
    return (
        <li className="min-w-[14rem] max-w-[14rem] p-5 h-[25rem]">
            <div className="relative h-full">
                <img className='rounded h-[14rem] w-[14rem] object-cover' src={product.images[0]} alt="" />
                <h2 className="mt-4 line-clamp-2">{product.title} - {product.category}</h2>
                <label><label className='line-through'>${product.price.toFixed(2)}</label> From <label className='text-red-700 font-semibold'>${(product.price - (product.price * (product.discountPercentage / 100))).toFixed(2)}</label></label>
                <div className="h-max"></div>
                <FlatButton message={"Add To Cart"} />
            </div>
        </li>
    )
}

export default CardFlat