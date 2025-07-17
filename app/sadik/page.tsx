import firstSadikImg from "@/public/media/schoolAlbom/sadik3.jpg"
import secondSadikImg from "@/public/media/schoolAlbom/sadik7.jpg"
import thirdSadikImg from "@/public/media/schoolAlbom/sadik0013.jpg"
import fourthSadikImg from "@/public/media/schoolAlbom/sadik289.jpg"
import fivethSadikImg from "@/public/media/schoolAlbom/sadikMM.jpg"
import SadikCard from "../../components/sadikCard";

import React from 'react'
import Image from "next/image";
import Link from "next/link"

const Sadik = () => {
  return (
    <React.Fragment>
      <div className=" max-w-full bgLogo">
        <div className=" w-full">
          <div className="firstSadikImg">
            <div className="bgColor">
              <div className="text p-20 text-center" >
                <span className="text-center text-zinc-300">
                  Сегодня они такие милые и хорошенькие… И так хочется запомнить, какими они были! Да и им самим выпускные альбомы для детского сада когда-нибудь помогут вспомнить это беззаботное время, своих когдатошних друзей, улыбнуться, вернуть светлое и беззаботное настроение)
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className=" py-20 desktop-univer flex justify-center flex-col items-center gap-10">

          <div className=" relative w-full px-20 flex justify-center items-center">
            <div className=" secondBgImg overflow-hidden w-[700px] h-[675px] rounded-l-md">
              <Image src={firstSadikImg} alt="" className="firstSadikImg1 object-center object-cover scale-125 translate-y-3" />
            </div>
            <div className="text p-10  bg-black opacity-40 text-white w-[700px] h-[675px] rounded-r-md">
              <div className=" grid grid-cols-1">
                <div className=" text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                  <span>Описание: Лайт А4</span>
                  <span>Страницы: 4</span>
                  <span>Обложка: Фото обложка без Т-пр.</span>
                  <span>Блок: Лабораторная печать из пластиков</span>
                  <span>Фотосессия: 2 часа в садике</span>
                  <span>Срок: От 30 до 60 рабочих дней</span>
                </div>
              </div>
            </div>
            <div className=" w-full absolute bottom-5 flex justify-center items-center">
              <Link href="/#form">
                <button className="BtnL -translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">Заказать альбом</button>
              </Link>
            </div>
          </div>

          <div className=" relative w-full px-20 flex justify-center items-center">
            <div className="text p-10  bg-black opacity-40 text-white w-[700px] h-[675px] rounded-l-md">
              <div className=" grid grid-cols-1">
                <div className=" text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                  <span>Описание: Хард Ковер Классик А4 </span>
                  <span>Страницы: 4</span>
                  <span>Обложка: Софт-тач твёрдый пр.</span>
                  <span>Блок: Лабораторная печать из пластиков</span>
                  <span>Фотосессия: 2 часа в садике</span>
                  <span>Срок: От 30 до 60 рабочих дней</span>
                </div>
              </div>
            </div>
            <div className=" secondBgImg overflow-hidden w-[700px] h-[675px] rounded-r-md">
              <Image src={secondSadikImg} alt="" className="secondSadikImg object-center object-cover scale-125 translate-y-3" />
            </div>
            <div className=" w-full absolute bottom-5 flex justify-center items-center">
              <Link href="/#form">
                <button className="BtnR translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">Заказать альбом</button>
              </Link>
            </div>
          </div>

          <div className=" relative w-full px-20 flex justify-center items-center">
            <div className=" secondBgImg overflow-hidden w-[700px] rounded-l-md h-[675px] ">
              <Image src={thirdSadikImg} alt="" className="thirdSadikImg object3 object-cover translate-y-0" />
            </div>
            <div className="text p-10  bg-black opacity-40 text-white rounded-r-md w-[700px] h-[675px]">
              <div className=" grid grid-cols-1">
                <div className=" text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                  <span>Описание: Хард Ковер Классик А4</span>
                  <span>Страницы: 4</span>
                  <span>Обложка: Софт-тач твёрдый пр.</span>
                  <span>Блок: Лабораторная печать из пластиков</span>
                  <span>Фотосессия: 2 часа в садике</span>
                  <span>Срок: От 30 до 60 рабочих дней</span>
                </div>
              </div>
            </div>
            <div className=" w-full absolute bottom-5 flex justify-center items-center">
              <Link href="/#form">
                <button className="BtnL -translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">Заказать альбом</button>
              </Link>
            </div>
          </div>

          <div className=" relative w-full px-20 flex justify-center items-center">
            <div className="text p-10  bg-black opacity-40 text-white w-[700px] h-[675px] rounded-l-md">
              <div className=" grid grid-cols-1">
                <div className=" text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                  <span>Описание: Хард Ковер Классик А</span>
                  <span>Страницы: 4</span>
                  <span>Обложка: Софт-тач твёрдый пр.</span>
                  <span>Блок: Лабораторная печать из пластиков</span>
                  <span>Фотосессия: 2 часа в садике</span>
                  <span>Срок: От 30 до 60 рабочих дней</span>
                </div>
              </div>
            </div>
            <div className=" secondBgImg overflow-hidden w-[700px] h-[675px] rounded-r-md">
              <Image src={fourthSadikImg} alt="" className="fourthSadikImg object-center object-cover scale-110 translate-y-3" />
            </div>
            <div className=" w-full absolute bottom-5 flex justify-center items-center">
              <Link href="/#form">
                <button className="BtnR translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">Заказать альбом</button>
              </Link>
            </div>
          </div>

          <div className=" relative w-full px-20 flex justify-center items-center">
            <div className=" secondBgImg overflow-hidden w-[700px] h-[675px] rounded-l-md">
              <Image src={fivethSadikImg} alt="" className="fivethSadikImg object5 object-cover scale-110 translate-y-5" />
            </div>
            <div className="text p-10  bg-black opacity-40 text-white w-[700px] h-[675px] rounded-r-md">
              <div className=" grid grid-cols-1">
                <div className=" text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                  <span>Описание: Хард Ковер Классик А4</span>
                  <span>Страницы: 4</span>
                  <span>Обложка: Софт-тач твёрдый пр.</span>
                  <span>Блок: Лабораторная печать из пластиков</span>
                  <span>Фотосессия: 2 часа в садике</span>
                  <span>Срок: От 30 до 60 рабочих дней</span>
                </div>
              </div>
            </div>
            <div className=" w-full absolute bottom-5 flex justify-center items-center">
              <Link href="/#form">
                <button className="BtnL -translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">Заказать альбом</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <section className=" w-[390px] p-5 mobile-univer">
          <div className=" w-full space-y-5 grid grid-cols-1 justify-items-center">
            <div className=" albom-univer  mx-auto my-0 secondSection w-full  flex justify-center items-center">
              <div className=" secondBgImg overflow-hidden rounded-t-md">
                <Image src={firstSadikImg} alt="" className="firstSadikImg1 object-center object-cover scale-110 -translate-y-3" />
              </div>
              <div className="univerFText   p-10 bg-black opacity-40 text-white rounded-b-md grid grid-cols-1 justify-items-center">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start">
                    <span>Описание: Лайт А4</span>
                    <span>Страницы: 4</span>
                    <span>Обложка: Фото обложка без Т-пр.</span>
                    <span>Блок: Лабораторная печать из пластиков</span>
                    <span>Фотосессия: 2 часа в садике</span>
                    <span>Срок: От 30 до 60 рабочих дней</span>
                  </div>
                </div>
                <div className=" w-full my-7 flex justify-center items-center">
                  <Link href='/#form'>
                    <button className="  bg-white flex justify-center items-center text-black font-serif px-6 py-2 rounded-lg shadow-lg">Заказать альбом</button>
                  </Link>
                </div>
              </div>

            </div>

            <div className="albom-univer mx-auto my-0 space-y-0 secondSection w-full  flex justify-center items-center">
              <div className=" secondBgImg overflow-hidden rounded-t-md">
                <Image src={secondSadikImg} alt="" className="secondSadikImg object-center object-cover scale-110 -translate-y-3" />
              </div>
              <div className="univerFText  text p-10 bg-black opacity-40 text-white  rounded-b-md grid grid-cols-1 justify-items-center">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start">
                    <span>Описание: Хард Ковер Классик А4 </span>
                    <span>Страницы: 4</span>
                    <span>Обложка: Софт-тач твёрдый пр.</span>
                    <span>Блок: Лабораторная печать из пластиков</span>
                    <span>Фотосессия: 2 часа в садике</span>
                    <span>Срок: От 30 до 60 рабочих дней</span>
                  </div>
                </div>
                <div className=" w-full my-7 flex justify-center items-center">
                  <Link href='/#form'>
                    <button className="  bg-white flex justify-center items-center text-black font-serif px-6 py-2 rounded-lg shadow-lg">Заказать альбом</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className=" albom-univer mx-auto my-0  secondSection w-full  flex justify-center items-center">
              <div className=" secondBgImg overflow-hidden rounded-t-md  ">
                <Image src={thirdSadikImg} alt="" className="thirdSadikImg object-center object-cover translate-y-0" />
              </div>
              <div className="univerFText  text p-10 bg-black opacity-40 text-white  rounded-b-md grid grid-cols-1 justify-items-center">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start">
                    <span>Описание: Хард Ковер Классик А4</span>
                    <span>Страницы: 4</span>
                    <span>Обложка: Софт-тач твёрдый пр.</span>
                    <span>Блок: Лабораторная печать из пластиков</span>
                    <span>Фотосессия: 2 часа в садике</span>
                    <span>Срок: От 30 до 60 рабочих дней</span>
                  </div>
                </div>
                <div className=" w-full my-7 flex justify-center items-center">
                  <Link href='/#form'>
                    <button className="  bg-white flex justify-center items-center text-black font-serif px-6 py-2 rounded-lg shadow-lg">Заказать альбом</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className=" albom-univer mx-auto my-0  secondSection w-full  flex justify-center items-center">
              <div className=" secondBgImg overflow-hidden rounded-t-md">
                <Image src={fourthSadikImg} alt="" className="fourthSadikImg object-center object-cover scale-110 -translate-y-3" />
              </div>
              <div className="univerFText  text p-10 bg-black opacity-40 text-white  rounded-b-md grid grid-cols-1 justify-items-center">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start">
                    <span>Описание: Хард Ковер Классик А</span>
                    <span>Страницы: 4</span>
                    <span>Обложка: Софт-тач твёрдый пр.</span>
                    <span>Блок: Лабораторная печать из пластиков</span>
                    <span>Фотосессия: 2 часа в садике</span>
                    <span>Срок: От 30 до 60 рабочих дней</span>
                  </div>
                </div>
                <div className=" w-full my-7 flex justify-center items-center">
                  <Link href='/#form'>
                    <button className="  bg-white flex justify-center items-center text-black font-serif px-6 py-2 rounded-lg shadow-lg">Заказать альбом</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className=" albom-univer mx-auto my-0  secondSection w-full  flex justify-center items-center ">
              <div className=" secondBgImg overflow-hidden rounded-t-md">
                <Image src={fivethSadikImg} alt="" className="fivethSadikImg object5 object-cover -translate-y-3" />
              </div>
              <div className="univerFText  text p-10 bg-black opacity-40 text-white rounded-b-md grid grid-cols-1 justify-items-center">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start">
                    <span>Описание: Хард Ковер Классик А4</span>
                    <span>Страницы: 4</span>
                    <span>Обложка: Софт-тач твёрдый пр.</span>
                    <span>Блок: Лабораторная печать из пластиков</span>
                    <span>Фотосессия: 2 часа в садике</span>
                    <span>Срок: От 30 до 60 рабочих дней</span>
                  </div>
                </div>
                <div className=" w-full my-7 flex justify-center items-center">
                  <Link href='/#form'>
                    <button className="  bg-white flex justify-center items-center text-black font-serif px-6 py-2 rounded-lg shadow-lg">Заказать альбом</button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>

        <SadikCard />
      </div>
    </React.Fragment>
  )
}

export default Sadik