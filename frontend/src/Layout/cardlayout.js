import React from 'react'
import Card from '../Components/Card'

export default function cardlayout() {
  return (
    <div className="flex flex-col justify-center pt-10 pb-16 bg-white">
    <div className="flex flex-col justify-center px-12 py-20 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-center content-center my-2 max-md:mr-1 max-md:max-w-full">
        <Card />
        <Card />
        <Card />
        <Card />
        
      </div>
    </div>
  </div>
  )
}
