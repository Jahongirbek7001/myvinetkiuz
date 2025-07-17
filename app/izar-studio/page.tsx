import Image from "next/image"
import photo1 from "../../media/izarStudio/1.jpg"
import photo2 from "../../media/izarStudio/2.jpg"
import photo3 from "../../media/izarStudio/3.jpg"
import photo4 from "../../media/izarStudio/4.jpg"
import photo5 from "../../media/izarStudio/5.jpg"
import photo6 from "../../media/izarStudio/6.jpg"

import React from 'react'

const IzarStudio = () => {
  return (
    <div className="IZARSTUDIO">
      <div className="studioTitle max-w-8xl grid grid-cols-1 justify-items-center space-y-10 text-white p-20 bg-black">
        <span className=" text-4xl">
          Скоро открытие...
        </span>
        <span className=" text-7xl">
          IZAR STUDIO
        </span>
      </div>
      <div className=" max-w-8xl flex justify-center items-center bg-black  mx-auto mb-5">
        <div className=" space-y-10 p-10 izarContainer">
          <div className=" w-full mx-auto my-0 border-2 border-gray-400">
            <Image src={photo1} alt="" />
          </div>
          <div className=" w-full mx-auto my-0 border-2 border-gray-400">
            <Image src={photo2} alt="" />
          </div>
          <div className=" w-full mx-auto my-0 border-2 border-gray-400">
            <Image src={photo3} alt="" />
          </div>
          <div className=" w-full mx-auto my-0 border-2 border-gray-400">
            <Image src={photo4} alt="" />
          </div>
          <div className=" w-full mx-auto my-0 border-2 border-gray-400">
            <Image src={photo5} alt="" />
          </div>
          <div className=" w-full mx-auto my-0 border-2 border-gray-400">
            <Image src={photo6} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default IzarStudio