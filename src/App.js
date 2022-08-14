import React, { useEffect, useRef, useState } from 'react'

import CircularPointer from './components/buttons/circular_pointer.component'
import CardFlat from './components/cards/card_flat.component'
import NavbarDesktop from './components/navbars/navbar_desktop.component';
import NavbarMobile from './components/navbars/navbar_mobile.component';
const axios = require('axios').default;

const App = () => {

  useEffect(() => {
    const initFunction = async () => {
      const products = (await axios?.get(
        `https://dummyjson.com/products`,
      ))?.data?.products
      setProducts(products)
    }
    initFunction()

    return () => { }
  }, [])

  const [getProducts, setProducts] = useState([])

  const sliderContainer = useRef()
  const slider = useRef()
  // console.log((document.getElementById('sliderContainer'))?.offsetWidth)

  return (
    <>
      <NavbarDesktop />
      <NavbarMobile />
      <div className='px-[1rem] w-[100%] flex justify-center items-center'>
        <div className='w-[100%] md:w-[70%]'>
          <div className='h-[1.25rem] md:h-[5rem]' />
          <div className='text-red-600 font-bold text-3xl w-full'>Flash Deals</div>
          <div className='flex'>
            <div className=" flex items-center ">
              <div className="w-full text-right">
                <CircularPointer
                  button_icon={"AiOutlineArrowLeft"}
                  onClick={() => {
                    var slider_doc = document.getElementById('slider')
                    slider_doc.scrollLeft = slider_doc.scrollLeft - 500
                  }}
                  styles={`mr-5`}
                />
              </div>
            </div>
            <div id="sliderContainer" ref={sliderContainer} className="max-w-full w-full overflow-hidden">
              <ul id="slider" ref={slider} className="flex w-full transition-margin duration-700 overflow-x-scroll scroll  scroll-smooth no-scrollbar">
                {
                  getProducts?.map((product, index) => {
                    return (
                      <CardFlat
                        key={index}
                        product={product}
                      />

                    )
                  })
                }
              </ul>
            </div>
            <div className=" flex items-center ">
              <div className="w-full">
                <CircularPointer
                  button_icon={"AiOutlineArrowRight"}
                  onClick={() => {
                    var slider_doc = document.getElementById('slider')
                    slider_doc.scrollLeft = slider_doc.scrollLeft + 500
                  }}
                  styles={`ml-5`}
                />

              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App  