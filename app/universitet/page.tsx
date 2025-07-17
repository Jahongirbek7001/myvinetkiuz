'use client'

import { useRef } from 'react'
import firstUnImg from "@/public/media/univerAlbom/3.jpg"
import secondUnImg from "@/public/media/univerAlbom/4.jpg"
import thirdUnImg from "@/public/media/univerAlbom/00.jpg"
import fourthUnImg from "@/public/media/univerAlbom/2023.jpg"
import fivethUnImg from "@/public/media/univerAlbom/02.jpg"
import sixthUnImg from "@/public/media/univerAlbom/4837.jpg"
import seventhUnImg from "@/public/media/univerAlbom/60x20.jpg"
import UniverCard from "../../components/univerCard";
import React from 'react'
import Image from "next/image";
import Link from 'next/link'

const Universitet = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  return (
    <React.Fragment>
      <div className=" max-w-full bgLogo">
        <div className=" w-full">
          <div className="firstUnImgBg">
            <div className="bgColor">
              <div className="text p-20 text-center" >
                <span className="text-center text-zinc-300">
                  Со студенческим выпускным альбомом можно по желанию в любой момент окунуться в волну теплых воспоминаний о годах, проведенных в любимом университете. Поэтому вопроса заказать фотоальбом для студентов либо нет не должно стоять в принципе.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className=" py-20 desktop-univer flex justify-center flex-col items-center gap-10">
          <div className=" relative w-full px-20 flex justify-center items-center">
            <div className=" w-[700px] h-[600px] rounded-l-md overflow-hidden">
              <Image
                src={firstUnImg}
                alt=""
                className="firstUnImg object-center object-cover w-full h-full scale-150 translate-y-20"
              />
            </div>

            <div className="text p-10 bg-black opacity-40 text-white w-[700px] h-[600px] rounded-r-md">
              <div className="grid grid-cols-1 text-left text-2xl space-y-5">
                <span>Тип Виньетки: TWIX Премиум</span>
                <span>Страницы: 20</span>
                <span>Обложка: Стекло + деревянная дощечка</span>
                <span>Блок: Лабораторная печать из пластиков</span>
                <span>
                  Фотосессия: 1.Фотостудия 2.ВУЗ 3. Прогулка по выбору клиента в городе.
                </span>
                <span>Бонус: Мантия магистра и подарки</span>
                <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
              </div>
            </div>

            <div className="w-full absolute bottom-5 flex justify-center items-center">
              <Link href="/#form">
                <button className="BtnL -translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">
                  Заказать альбом
                </button>
              </Link>
            </div>
          </div>

          <div className=" relative w-full px-20 flex justify-center items-center">
            <div className="text p-10 bg-black opacity-40 text-white w-[700px] h-[675px] rounded-l-md">
              <div className="grid grid-cols-1">
                <div className="text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                  <span>Тип Виньетки: Мрамор А4</span>
                  <span>Размер: 20x30</span>
                  <span>Тип обложки: Мраморный глянц ( с 3D рисунком), матовый.</span>
                  <span>Тип печати: Химичиская лабараторная печать с пластикавами страницами количество страниц (10)</span>
                  <span>Фотосессия: 1.Фотостудия 2.ВУЗ</span>
                  <span>Бонус: Мантия магистра и подарки</span>
                  <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
                </div>
              </div>
            </div>

            <div className="secondBgImg overflow-hidden w-[700px] h-[675px] rounded-r-md">
              <Image
                src={secondUnImg}
                alt=""
                className="secondUnImg object-center object-cover scale-150 translate-y-20"
              />
            </div>

            <div className="w-full absolute bottom-5 flex justify-center items-center">
              <Link href="/#form">
                <button className="BtnR translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">
                  Заказать альбом
                </button>
              </Link>
            </div>
          </div>

          <div className=" relative w-full px-20 flex justify-center items-center">
            <div className="secondBgImg overflow-hidden w-[700px] h-[675px] rounded-l-md">
              <Image
                src={thirdUnImg}
                alt=""
                className="thirdUnImg object-center object-cover scale-150 translate-y-20"
              />
            </div>
            <div className="text p-10 bg-black opacity-40 text-white w-[700px] h-[675px] rounded-r-md">
              <div className="grid grid-cols-1">
                <div className="text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                  <span>Тип Виньетки: Хард Ковер Классик А4</span>
                  <span>Размер: 20x30</span>
                  <span>Тип обложки: Софт-тач твёрдый пр.</span>
                  <span>Тип печати: Химичиская лабараторная печать с пластикавами страницами количество страниц (10)</span>
                  <span>Фотосессия: 1.Фотостудия 2.ВУЗ</span>
                  <span>Бонус: Мантия магистра и подарки</span>
                  <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
                </div>
              </div>
            </div>
            <div className="w-full absolute bottom-5 flex justify-center items-center">
              <Link href="/#form">
                <button className="BtnL -translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">
                  Заказать альбом
                </button>
              </Link>
            </div>
          </div>

          <div className=" relative w-full px-20 flex justify-center items-center">
            <div className="text p-10  bg-black opacity-40 text-white w-[700px] h-[675px] rounded-l-md">
              <div className=" grid grid-cols-1">
                <div className=" text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                  <span>Тип Виньетки: ROYAL Premium</span>
                  <span>Размер: 20x30</span>
                  <span>Тип обложки:Фактурный 3D Печать</span>
                  <span>Тип печати: Журнальный</span>
                  <span>Страницы: 20-30 от кол-во студентов</span>
                  <span>Фотосессия:1.Фотостудия 2.ВУЗ 3. Прогулка по выбору клиента в городе.</span>
                  <span>Бонус: Мантия магистра и подарки</span>
                  <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
                </div>
              </div>
            </div>
            <div className=" secondBgImg overflow-hidden w-[700px] h-[675px] rounded-r-md">
              <Image src={fourthUnImg} alt="" className="fourthUnImg object-center object-cover scale-150 translate-y-20 " />
            </div>
            <div className=" w-full absolute bottom-5 flex justify-center items-center">
              <Link href="/#form">
                <button className="BtnR translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">Заказать альбом</button>
              </Link>
            </div>
          </div>

          <div className=" relative w-full px-20 flex justify-center items-center">
            <div className=" secondBgImg overflow-hidden w-[700px] h-[675px] rounded-l-md">
              <Image src={fivethUnImg} alt="" className="fivethUnImg object5 object-cover scale-110 translate-y-5" />
            </div>
            <div className="text p-10  bg-black opacity-40 text-white w-[700px] h-[675px] rounded-l-md">
              <div className=" grid grid-cols-1">
                <div className=" text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                  <span>Тип Виньетки: Хард Ковер Классик А4</span>
                  <span>Размер: 20x30</span>
                  <span>Тип обложки:Софт-тач твёрдый пр.</span>
                  <span>Тип печати: Химичиская лабараторная печать с пластикавами страницами количество страниц (10)</span>
                  <span>Фотосессия: 1.Фотостудия 2.ВУЗ</span>
                  <span>Бонус: Мантия магистра и подарки</span>
                  <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
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
                  <span>Тип Виньетки: Стандарт</span>
                  <span>Размер: 20x30</span>
                  <span>Тип обложки:Стеклянная</span>
                  <span>Тип печати: Лабораторная печать из пластиков</span>
                  <span>Страницы: 10</span>
                  <span>Фотосессия: 1.Фотостудия 2.ВУЗ</span>
                  <span>Бонус: Мантия магистра и подарки</span>
                  <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
                </div>
              </div>
            </div>
            <div className=" secondBgImg overflow-hidden w-[700px] h-[675px] rounded-r-md">
              <Image src={sixthUnImg} alt="" className="sixthUnImg object-center object-cover scale-150 translate-y-24 translate-x-5" />
            </div>
            <div className=" w-full absolute bottom-5 flex justify-center items-center">
              <Link href="/#form">
                <button className="BtnR translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">Заказать альбом</button>
              </Link>
            </div>
          </div>

          <div className=" relative w-full px-20 flex justify-center items-center">
            <div className=" secondBgImg overflow-hidden w-[700px] h-[675px] rounded-l-md">
              <Image src={seventhUnImg} alt="" className="seventhUnImg object-center object-cover scale-150 translate-x-10" />
            </div>
            <div className="text p-10  bg-black opacity-40 text-white w-[700px] h-[675px] rounded-l-md">
              <div className=" grid grid-cols-1">
                <div className=" text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                  <span>Тип Виньетки: Элегант</span>
                  <span>Размер: 20x30</span>
                  <span>Тип обложки: Бархат с гравировкой и треугольный стекло</span>
                  <span>Тип печати:  Лабораторная печать из пластиков</span>
                  <span>Страницы: 20-30 от кол-во студентов</span>
                  <span>Фотосессия: 1.Фотостудия 2.ВУЗ</span>
                  <span>Бонус: Мантия магистра и подарки</span>
                  <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
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
        <section className=" w-[390px] py-5 px-5 mobile-univer">
          <div className=" w-full space-y-5 grid grid-cols-1 justify-items-center">

            <div className=" w-full flex justify-center items-center ">
              <div className=" w-[700px] h-[600px] rounded-l-md overflow-hidden">
                <Image
                  src={firstUnImg}
                  alt=""
                  className="firstUnImg object-center object-cover w-full h-full scale-150 translate-y-20"
                />
              </div>

              <div className="text p-10 bg-black opacity-40 text-white w-[700px] h-[600px] rounded-r-md">
                <div className="grid grid-cols-1 text-left text-2xl space-y-5">
                  <span>Тип Виньетки: TWIX Премиум</span>
                  <span>Страницы: 20</span>
                  <span>Обложка: Стекло + деревянная дощечка</span>
                  <span>Блок: Лабораторная печать из пластиков</span>
                  <span>
                    Фотосессия: 1.Фотостудия 2.ВУЗ 3. Прогулка по выбору клиента в городе.
                  </span>
                  <span>Бонус: Мантия магистра и подарки</span>
                  <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
                </div>
              </div>

              <div className="w-full absolute bottom-5 flex justify-center items-center">
                <Link href="/#form">
                  <button className="BtnL -translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">
                    Заказать альбом
                  </button>
                </Link>
              </div>
            </div>

            <div className=" w-full flex justify-center items-center ">
              <div className="text p-10 bg-black opacity-40 text-white w-[700px] h-[675px] rounded-l-md">
                <div className="grid grid-cols-1">
                  <div className="text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                    <span>Тип Виньетки: Мрамор А4</span>
                    <span>Размер: 20x30</span>
                    <span>Тип обложки: Мраморный глянц ( с 3D рисунком), матовый.</span>
                    <span>Тип печати: Химичиская лабараторная печать с пластикавами страницами количество страниц (10)</span>
                    <span>Фотосессия: 1.Фотостудия 2.ВУЗ</span>
                    <span>Бонус: Мантия магистра и подарки</span>
                    <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
                  </div>
                </div>
              </div>

              <div className="secondBgImg overflow-hidden w-[700px] h-[675px] rounded-r-md">
                <Image
                  src={secondUnImg}
                  alt=""
                  className="secondUnImg object-center object-cover scale-150 translate-y-20"
                />
              </div>

              <div className="w-full absolute bottom-5 flex justify-center items-center">
                <Link href="/#form">
                  <button className="BtnR translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">
                    Заказать альбом
                  </button>
                </Link>
              </div>
            </div>

            <div className=" w-full flex justify-center items-center ">
              <div className="secondBgImg overflow-hidden w-[700px] h-[675px] rounded-l-md">
                <Image
                  src={thirdUnImg}
                  alt=""
                  className="thirdUnImg object-center object-cover scale-150 translate-y-20"
                />
              </div>
              <div className="text p-10 bg-black opacity-40 text-white w-[700px] h-[675px] rounded-r-md">
                <div className="grid grid-cols-1">
                  <div className="text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                    <span>Тип Виньетки: Хард Ковер Классик А4</span>
                    <span>Размер: 20x30</span>
                    <span>Тип обложки: Софт-тач твёрдый пр.</span>
                    <span>Тип печати: Химичиская лабараторная печать с пластикавами страницами количество страниц (10)</span>
                    <span>Фотосессия: 1.Фотостудия 2.ВУЗ</span>
                    <span>Бонус: Мантия магистра и подарки</span>
                    <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
                  </div>
                </div>
              </div>
              <div className="w-full absolute bottom-5 flex justify-center items-center">
                <Link href="/#form">
                  <button className="BtnL -translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">
                    Заказать альбом
                  </button>
                </Link>
              </div>
            </div>

            <div className=" w-full flex justify-center items-center ">
              <div className="text p-10  bg-black opacity-40 text-white w-[700px] h-[675px] rounded-l-md">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                    <span>Тип Виньетки: ROYAL Premium</span>
                    <span>Размер: 20x30</span>
                    <span>Тип обложки:Фактурный 3D Печать</span>
                    <span>Тип печати: Журнальный</span>
                    <span>Страницы: 20-30 от кол-во студентов</span>
                    <span>Фотосессия:1.Фотостудия 2.ВУЗ 3. Прогулка по выбору клиента в городе.</span>
                    <span>Бонус: Мантия магистра и подарки</span>
                    <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
                  </div>
                </div>
              </div>
              <div className=" secondBgImg overflow-hidden w-[700px] h-[675px] rounded-r-md">
                <Image src={fourthUnImg} alt="" className="fourthUnImg object-center object-cover scale-150 translate-y-20 " />
              </div>
              <div className=" w-full absolute bottom-5 flex justify-center items-center">
                <Link href="/#form">
                  <button className="BtnR translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">Заказать альбом</button>
                </Link>
              </div>
            </div>

            <div className=" w-full flex justify-center items-center ">
              <div className=" secondBgImg overflow-hidden w-[700px] h-[675px] rounded-l-md">
                <Image src={fivethUnImg} alt="" className="fivethUnImg object5 object-cover scale-110 translate-y-5" />
              </div>
              <div className="text p-10  bg-black opacity-40 text-white w-[700px] h-[675px] rounded-l-md">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                    <span>Тип Виньетки: Хард Ковер Классик А4</span>
                    <span>Размер: 20x30</span>
                    <span>Тип обложки:Софт-тач твёрдый пр.</span>
                    <span>Тип печати: Химичиская лабараторная печать с пластикавами страницами количество страниц (10)</span>
                    <span>Фотосессия: 1.Фотостудия 2.ВУЗ</span>
                    <span>Бонус: Мантия магистра и подарки</span>
                    <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
                  </div>
                </div>
              </div>
              <div className=" w-full absolute bottom-5 flex justify-center items-center">
                <Link href="/#form">
                  <button className="BtnL -translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">Заказать альбом</button>
                </Link>
              </div>
            </div>

            <div className=" w-full flex justify-center items-center ">
              <div className="text p-10  bg-black opacity-40 text-white w-[700px] h-[675px] rounded-l-md">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                    <span>Тип Виньетки: Стандарт</span>
                    <span>Размер: 20x30</span>
                    <span>Тип обложки:Стеклянная</span>
                    <span>Тип печати: Лабораторная печать из пластиков</span>
                    <span>Страницы: 10</span>
                    <span>Фотосессия: 1.Фотостудия 2.ВУЗ</span>
                    <span>Бонус: Мантия магистра и подарки</span>
                    <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
                  </div>
                </div>
              </div>
              <div className=" secondBgImg overflow-hidden w-[700px] h-[675px] rounded-r-md">
                <Image src={sixthUnImg} alt="" className="sixthUnImg object-center object-cover scale-150 translate-y-24 translate-x-5" />
              </div>
              <div className=" w-full absolute bottom-5 flex justify-center items-center">
                <Link href="/#form">
                  <button className="BtnR translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">Заказать альбом</button>
                </Link>
              </div>
            </div>

            <div className=" w-full flex justify-center items-center ">
              <div className=" secondBgImg overflow-hidden w-[700px] h-[675px] rounded-l-md">
                <Image src={seventhUnImg} alt="" className="seventhUnImg object-center object-cover scale-150 translate-x-10" />
              </div>
              <div className="text p-10  bg-black opacity-40 text-white w-[700px] h-[675px] rounded-l-md">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start text-2xl space-y-5">
                    <span>Тип Виньетки: Элегант</span>
                    <span>Размер: 20x30</span>
                    <span>Тип обложки: Бархат с гравировкой и треугольный стекло</span>
                    <span>Тип печати:  Лабораторная печать из пластиков</span>
                    <span>Страницы: 20-30 от кол-во студентов</span>
                    <span>Фотосессия: 1.Фотостудия 2.ВУЗ</span>
                    <span>Бонус: Мантия магистра и подарки</span>
                    <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
                  </div>
                </div>
              </div>
              <div className=" w-full absolute bottom-5 flex justify-center items-center">
                <Link href="/#form">
                  <button className="BtnL -translate-x-80 bg-white flex justify-center items-center text-black font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">Заказать альбом</button>
                </Link>
              </div>
            </div>

            <div className=" albom-univer secondSection w-full flex justify-center items-center ">
              <div className=" secondBgImg overflow-hidden rounded-t-md">
                <Image src={seventhUnImg} alt="" className="seventhUnImg object-center object-cover scale-125 translate-x-5 -translate-y-5" />
              </div>
              <div className="univerFText  text p-10 bg-black opacity-40 text-white rounded-b-md grid grid-cols-1 justify-items-center">
                <div className=" grid grid-cols-1">
                  <div className=" text-left grid grid-cols-1 w-full justify-items-start">
                    <span>Тип Виньетки: Элегант</span>
                    <span>Размер: 20x30</span>
                    <span>Тип обложки: Бархат с гравировкой и треугольный стекло</span>
                    <span>Тип печати:  Лабораторная печать из пластиков</span>
                    <span>Страницы: 20-30 от кол-во студентов</span>
                    <span>Фотосессия: 1.Фотостудия 2.ВУЗ</span>
                    <span>Бонус: Мантия магистра и подарки</span>
                    <span>Срок: От 60 до 90 рабочих дней от потока заказа</span>
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

        <UniverCard />
      </div>
    </React.Fragment>
  )
}

export default Universitet