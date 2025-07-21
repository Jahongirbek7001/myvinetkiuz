'use client'

import firstUnImg from "@/public/media/univer/univer-1.jpg"
import secondUnImg from "@/public/media/univer/univer-2.jpg"
import thirdUnImg from "@/public/media/univer/univer-3.jpg"
import fourthUnImg from "@/public/media/univer/univer-4.jpg"
import fivethUnImg from "@/public/media/univer/univer-5.jpg"
import sixthUnImg from "@/public/media/univer/univer-6.jpg"
// import seventhUnImg from "@/public/media/univer/univer-60x20.jpg"
import UniverCard from "../../components/univerCard";
import React from 'react'
import AlbumCard from '@/components/AlbumCard'
import AlbumCardMobile from "@/components/AlbumCardMobile"

const Universitet = () => {

  const data = [
    { id: 1, image: firstUnImg, type: "Тип Виньетки: TWIX Премиум", page: "Страницы: 20", cover: "Обложка: Стекло + деревянная дощечка", blok: "Блок: Лабораторная печать из пластиков", photoshoot: "Фотосессия: 1.Фотостудия 2.ВУЗ 3. Прогулка по выбору клиента в городе.", bonus: "Бонус: Мантия магистра и подарки", term: "Срок: От 60 до 90 рабочих дней от потока заказа" },
    { id: 2, image: secondUnImg, type: "Тип Виньетки: Мрамор А4", page: "Размер: 20x30", cover: "Тип обложки: Мраморный глянц ( с 3D рисунком), матовый.", blok: "Тип печати: Химичиская лабараторная печать с пластикавами страницами количество страниц (10)", photoshoot: "Фотосессия: 1.Фотостудия 2.ВУЗ", bonus: "Бонус: Мантия магистра и подарки", term: "Срок: От 60 до 90 рабочих дней от потока заказа" },
    { id: 3, image: thirdUnImg, type: "Тип Виньетки: Хард Ковер Классик А4", page: "Размер: 20x30", cover: "Тип обложки: Софт-тач твёрдый пр.", blok: "Тип печати: Химичиская лабараторная печать с пластикавами страницами количество страниц (10)", photoshoot: "Фотосессия: 1.Фотостудия 2.ВУЗ", bonus: "Бонус: Мантия магистра и подарки", term: "Срок: От 60 до 90 рабочих дней от потока заказа" },
    { id: 4, image: fourthUnImg, type: "Тип Виньетки: ROYAL Premium", page: "Размер: 20x30", cover: "Тип обложки:Фактурный 3D Печать", blok: "Тип печати: Журнальный", photoshoot: "Фотосессия:1.Фотостудия 2.ВУЗ 3. Прогулка по выбору клиента в городе.", bonus: "Бонус: Мантия магистра и подарки", term: "Срок: От 60 до 90 рабочих дней от потока заказа" },
    { id: 5, image: fivethUnImg, type: "Тип Виньетки: Хард Ковер Классик А4", page: "Размер: 20x30", cover: "Тип обложки:Софт-тач твёрдый пр.", blok: "Тип печати: Химичиская лабараторная печать с пластикавами страницами количество страниц (10)", photoshoot: "Фотосессия: 1.Фотостудия 2.ВУЗ", bonus: "Бонус: Мантия магистра и подарки", term: "Срок: От 60 до 90 рабочих дней от потока заказа" },
    { id: 6, image: sixthUnImg, type: "Тип Виньетки: Стандарт", page: "Размер: 20x30. Страницы: 10", cover: "Тип обложки:Стеклянная", blok: "Тип печати: Лабораторная печать из пластиков", photoshoot: "Фотосессия: 1.Фотостудия 2.ВУЗ", bonus: "Бонус: Мантия магистра и подарки", term: "Срок: От 60 до 90 рабочих дней от потока заказа" },
    // { id: 7, image: seventhUnImg, type: "Тип Виньетки: Элегант", page: "Размер: 20x30", cover: "Тип обложки: Бархат с гравировкой и треугольный стекло. Тип печати:  Лабораторная печать из пластиков", blok: "Страницы: 20-30 от кол-во студентов", photoshoot: "Фотосессия: 1.Фотостудия 2.ВУЗ", bonus: "Бонус: Мантия магистра и подарки", term: "Срок: От 60 до 90 рабочих дней от потока заказа" },
  ]

  return (
    <React.Fragment>
      <div className=" max-w-full bgLogo">
        <div className=" w-full">
          <div className="firstUnImgBg h-[400px] md:h-[700px]">
            <div className="bgColor flex justify-center items-center">
              <p className="text-center text-zinc-300 text-[16px] lg:text-5xl">
                Со студенческим выпускным альбомом можно по желанию в любой момент окунуться в волну теплых воспоминаний о годах, проведенных в любимом университете. Поэтому вопроса заказать фотоальбом для студентов либо нет не должно стоять в принципе.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className=" py-20 hidden md:flex justify-center flex-col items-center gap-10">
          {data.map((item) => (
            <AlbumCard key={item.id} item={item} />
          ))}
        </div>

        {/* Mobile */}
        <section className=" py-5 px-5 block md:hidden">
          <div className=" w-full space-y-5 grid grid-cols-1 justify-items-center">
            {data.map((item) => (
              <AlbumCardMobile key={item.id} album={item} />
            ))}
          </div>
        </section>

        <UniverCard />
      </div>
    </React.Fragment>
  )
}

export default Universitet