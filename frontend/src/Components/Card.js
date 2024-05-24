import React from 'react'
import Cardimage from '../Assets/card image.png'
import Vector from '../Assets/Vector 2.png'

const Card = () => {
  return (
    <div className="flex flex-col px-6 py-6 font-medium bg-white max-w-[217px]">
      <img
        loading="lazy"
        src={Vector}
        className="self-end aspect-[0.68] fill-orange-500 w-[17px]"
      />
      <img
        loading="lazy"
        src={Cardimage}
        className="self-center w-36 max-w-full aspect-[1.0]"
      />
      <div className="mt-6 text-xs text-black">
        Nike - Air Max 97 White Pure Platinum University Red
      </div>
      <div className="mt-2 text-sm text-blue-700">IDR 1.300.000</div>
    </div>
  )
}

export default Card