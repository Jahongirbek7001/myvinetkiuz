import firstUnImg from "@/public/media/schoolAlbom/starshiy1.jpg"
import secondUnImg from "@/public/media/schoolAlbom/starshiy0007.jpg"
import thirdUnImg from "@/public/media/schoolAlbom/starshiy1111.jpg"
import fourthUnImg from "@/public/media/schoolAlbom/starshiymokap.jpg"
import fivethUnImg from "@/public/media/schoolAlbom/starshiy1010.jpg"
import StarshiyCard from "../../components/starshiyCard";

import React from 'react'
import Image from "next/image";
import Link from "next/link"

const StarshayaShkola = () => {
  return (
    <React.Fragment>
      <div className=" max-w-full bgLogo">
        <div className=" w-full">
          <div className="firstStImg">
            <div className="bgColor">
              <div className="text p-20 text-center" >
                <span className="text-center text-zinc-300">
                  Альбом для выпускного класса уже стал традицией. Сегодня выпускные фотоальбомы для школьников в нашем исполнении представляют собой целое произведение искусства, на страницах которого ярко и красочно представлены выпускники, их преподаватели, важные события школьных лет.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className=" py-20 desktop-univer flex justify-center flex-col items-center gap-10">
          <div className=" relative w-full px-20 flex justify-center items-center">
            <div className=" secondBgImg overflow-hidden w-[700px] h-[675px] rounded-l-md">
              <Image src={firstUnImg} alt="" className="stImg1 object1 object-cover scale-125" />
            </div>
            <div className="text p-10  bg-black opacity-40 text-white w-[700px] h-[675px] rounded-r-md">
              <div className=" grid grid-cols-1">
                <div className=" text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                  <span>Описание: Хард Ковер Мрамор А4</span>
                  <span>Страницы: 8</span>
                  <span>Обложка: Софт-тач твёрдый пр.</span>
                  <span>Блок: Лабораторная печать из пластиков</span>
                  <span>Фотосессия: 2 часа в фотостудии</span>
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
                  <span>Описание: Книга Элегант NEW А4</span>
                  <span>Страницы: 8</span>
                  <span>Обложка: Фактурный печать 3D</span>
                  <span>Блок: Лабораторная печать из пластиков</span>
                  <span>Фотосессия: 2 часа в фотостудии</span>
                  <span>Срок: От 30 до 60 рабочих дней</span>
                </div>
              </div>
            </div>
            <div className=" secondBgImg overflow-hidden w-[700px] h-[675px] rounded-r-md">
              <Image src={secondUnImg} alt="" className="stImg2 object2 object-cover" />
            </div>
            <div className=" w-full absolute bottom-5 flex justify-center items-center">
              <Link href="/#form">
                <button className="BtnR translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">Заказать альбом</button>
              </Link>
            </div>
          </div>

          <div className=" relative w-full px-20 flex justify-center items-center">
            <div className=" secondBgImg overflow-hidden w-[700px] rounded-l-md h-[675px] ">
              <Image src={thirdUnImg} alt="" className="stImg3 object3 object-cover" />
            </div>
            <div className="text p-10  bg-black opacity-40 text-white rounded-r-md w-[700px] h-[675px]">
              <div className=" grid grid-cols-1">
                <div className=" text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                  <span>Описание: ЛАЙТ NEW А4</span>
                  <span>Страницы: 8</span>
                  <span>Обложка: Фото обложка без Т-пр.</span>
                  <span>Блок: Лабораторная печать из пластиков</span>
                  <span>Фотосессия: 2часа фотосесси в ШК. или 2 часа в фотостудии</span>
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
                  <span>Описание: Книга Элегант NEW А4</span>
                  <span>Страницы: 8</span>
                  <span>Обложка: Проём портрета с фактурный печатью 3D</span>
                  <span>Блок: Лабораторная печать из пластиков</span>
                  <span>Фотосессия: 2 часа в фотостудии</span>
                  <span>Срок: От 30 до 60 рабочих дней</span>
                </div>
              </div>
            </div>
            <div className=" secondBgImg overflow-hidden w-[700px] h-[675px] rounded-r-md">
              <Image src={fourthUnImg} alt="" className="fourthStImg stImg4 object-center object-cover scale-110 translate-y-3 translate-x-5 " />
            </div>
            <div className=" w-full absolute bottom-5 flex justify-center items-center">
              <Link href="/#form">
                <button className="BtnR translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">Заказать альбом</button>
              </Link>
            </div>
          </div>

          <div className=" relative w-full px-20 flex justify-center items-center">
            <div className=" secondBgImg overflow-hidden w-[700px] h-[675px] rounded-l-md">
              <Image src={fivethUnImg} alt="" className="stImg5 object5 object-cover scale-110 translate-y-5" />
            </div>
            <div className="text p-10  bg-black opacity-40 text-white w-[700px] h-[675px] rounded-r-md">
              <div className=" grid grid-cols-1">
                <div className=" text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                  <span>Описание: Хард Ковер Классик</span>
                  <span>Страницы: 8</span>
                  <span>Обложка: Софт-тач твёрдый пр. с портретом на обложке</span>
                  <span>Блок: Лабораторная печать из пластиков</span>
                  <span>Фотосессия: 2 часа в фотостудии</span>
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
            <div className=" albom-univer mx-auto my-0 secondSection w-full  flex justify-center items-center">
              <div className=" secondBgImg overflow-hidden rounded-t-md">
                <Image src={firstUnImg} alt="" className="stImg1 object-center object-cover scale-110 -translate-y-3" />
              </div>
              <div className="univerFText  text p-10 bg-black opacity-40 text-white w-[700px] h-[675px] rounded-b-md grid grid-cols-1 justify-items-center">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start">
                    <span>Описание: Хард Ковер Мрамор А4</span>
                    <span>Страницы: 8</span>
                    <span>Обложка: Софт-тач твёрдый пр.</span>
                    <span>Блок: Лабораторная печать из пластиков</span>
                    <span>Фотосессия: 2 часа в фотостудии</span>
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

            <div className="albom-univer secondSection w-full  flex justify-center items-center">
              <div className=" secondBgImg overflow-hidden rounded-t-md">
                <Image src={secondUnImg} alt="" className="stImg2 object-center object-cover scale-110 -translate-y-3" />
              </div>
              <div className="univerFText  text p-10 bg-black opacity-40 text-white  rounded-b-md grid grid-cols-1 justify-items-center">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start">
                    <span>Описание: Книга Элегант NEW А4</span>
                    <span>Страницы: 8</span>
                    <span>Обложка: Фактурный печать 3D</span>
                    <span>Блок: Лабораторная печать из пластиков</span>
                    <span>Фотосессия: 2 часа в фотостудии</span>
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

            <div className=" albom-univer secondSection w-full  flex justify-center items-center">
              <div className=" secondBgImg overflow-hidden rounded-t-md  ">
                <Image src={thirdUnImg} alt="" className="stImg3 object-center object-cover translate-y-0" />
              </div>
              <div className="univerFText  text p-10 bg-black opacity-40 text-white  rounded-b-md grid grid-cols-1 justify-items-center">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start">
                    <span>Описание: ЛАЙТ NEW А4</span>
                    <span>Страницы: 8</span>
                    <span>Обложка: Фото обложка без Т-пр.</span>
                    <span>Блок: Лабораторная печать из пластиков</span>
                    <span>Фотосессия: 2часа фотосесси в ШК. или 2 часа в фотостудии</span>
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

            <div className=" albom-univer secondSection w-full  flex justify-center items-center">
              <div className=" secondBgImg overflow-hidden rounded-t-md">
                <Image src={fourthUnImg} alt="" className="stImg4 object-center object-cover scale-110 -translate-y-3" />
              </div>
              <div className="univerFText  text p-10 bg-black opacity-40 text-white  rounded-b-md grid grid-cols-1 justify-items-center">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start">
                    <span>Описание: Книга Элегант NEW А4</span>
                    <span>Страницы: 8</span>
                    <span>Обложка: Проём портрета с фактурный печатью 3D</span>
                    <span>Блок: Лабораторная печать из пластиков</span>
                    <span>Фотосессия: 2 часа в фотостудии</span>
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

            <div className=" albom-univer secondSection w-full  flex justify-center items-center ">
              <div className=" secondBgImg overflow-hidden rounded-t-md">
                <Image src={fivethUnImg} alt="" className="stImg5 object5 object-cover -translate-y-3" />
              </div>
              <div className="univerFText  text p-10 bg-black opacity-40 text-white rounded-b-md grid grid-cols-1 justify-items-center">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start">
                    <span>Описание: Хард Ковер Классик</span>
                    <span>Страницы: 8</span>
                    <span>Обложка: Софт-тач твёрдый пр. с портретом на обложке</span>
                    <span>Блок: Лабораторная печать из пластиков</span>
                    <span>Фотосессия: 2 часа в фотостудии</span>
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

        <StarshiyCard />
      </div>
    </React.Fragment>
  )
}

export default StarshayaShkola