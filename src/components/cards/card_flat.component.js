import React, { useState } from 'react'
import FlatButton from '../buttons/flat_button.component'

const CardFlat = ({ product }) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };
    return (
        <li className="min-w-[14rem] max-w-[14rem] p-5 h-[25rem]">

            <div className="relative h-full">
                <div
                    className="group relative h-[14rem] w-full"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="h-[14rem] w-full absolute flex justify-center items-center">
                        <div className="hidden group-hover:block w-fit px-2 py-1 rounded-full bg-white">Quick View</div>
                    </div>
                    <div
                        className='rounded h-[14rem] w-full'
                        style={{
                            backgroundImage: isHover ? `url(${product.images[1]})` : `url(${product.images[0]})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    />
                </div>
                <h2 className="mt-4 line-clamp-2">{product.title} - {product.category}</h2>
                <label><label className='line-through'>${product.price.toFixed(2)}</label> From <label className='text-red-700 font-semibold'>${(product.price - (product.price * (product.discountPercentage / 100))).toFixed(2)}</label></label>
                <div className="h-max"></div>
                <FlatButton message={"Add To Cart"} />
            </div>
        </li>
    )
}

export default CardFlat