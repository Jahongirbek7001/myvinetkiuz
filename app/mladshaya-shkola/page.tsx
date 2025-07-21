import firstMlImg from "@/public/media/st-shkola/ml-shkola-1.jpg"
import secondMlImg from "@/public/media/st-shkola/ml-shkola-2.jpg"
import thirdMlImg from "@/public/media/st-shkola/ml-shkola-3.jpg"
import fourthMlImg from "@/public/media/st-shkola/ml-shkola-4.jpg"
import fivethMlImg from "@/public/media/st-shkola/ml-shkola-5.jpg"
import Mladshiycard from "../../components/mladshiyCard";

import React from 'react'
import AlbumCard from "@/components/AlbumCard"
import AlbumCardMobile from "@/components/AlbumCardMobile"

const MladshayaShkola = () => {

  const data = [
    { id: 1, image: firstMlImg, type: "Описание: Хард Ковер Кидс А4", page: "Страницы: 6", cover: "Обложка: Софт-тач твёрдый пр.", blok: "Блок: Лабораторная печать из пластиков", photoshoot: "Фотосессия: 2 часа в школе", bonus: "", term: "Срок: От 30 до 60 рабочих дней" },
    { id: 2, image: secondMlImg, type: "Описание: Хард Ковер Классик А4", page: "Страницы: 6", cover: "Обложка: Софт-тач твёрдый пр.", blok: "Блок: Лабораторная печать из пластиков", photoshoot: "Фотосессия: 2 часа в школе", bonus: "", term: "Срок: От 30 до 60 рабочих дней" },
    { id: 3, image: thirdMlImg, type: "Описание: Хард Ковер Классик А4", page: "Страницы: 6", cover: "Обложка: Софт-тач твёрдый пр.", blok: "Блок: Лабораторная печать из пластиков", photoshoot: "Фотосессия: 2 часа в школе", bonus: "", term: "Срок: От 30 до 60 рабочих дней" },
    { id: 4, image: fourthMlImg, type: "Описание: Хард Ковер Классик А4", page: "Страницы: 6", cover: "Обложка: Софт-тач твёрдый пр.", blok: "Блок: Лабораторная печать из пластиков", photoshoot: "Фотосессия: 2 часа в школе", bonus: "", term: "Срок: От 30 до 60 рабочих дней" },
    { id: 5, image: fivethMlImg, type: "Описание: Лайт А4", page: "Страницы: 6", cover: "Обложка: Софт-тач твёрдый пр.", blok: "Блок: Лабораторная печать из пластиков", photoshoot: "Фотосессия: 2 часа в школе", bonus: "", term: "Срок: От 30 до 60 рабочих дней" },
  ]
  return (
    <React.Fragment>
      <div className=" max-w-full bgLogo">
        <div className=" w-full">
          <div className="firstMlImg h-[400px] md:h-[700px]">
            <div className="bgColor flex justify-center items-center">
              <p className="text-center text-zinc-300 text-[16px] lg:text-5xl">
                Прощание с начальной школой и переход в старшие классы достаточно важный этап в жизни каждого ученика. Мы предлагаем сохранить память об одноклассниках в одном альбоме. Фотоальбомы  выпускника для 1-4 класса представлены в различном ценовом диапазоне и множестве дизайнов. Каждый сможет найти то, что подходит именно ему. Наши фотографы сделают яркие, живые и эмоциональные фотографии и мы поместим их в альбом, который будет радовать вас всю жизнь. Ниже представлены выпускные альбомы 1-4 класс, которые Вы можете пролистать и заказать у нас.
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

        <Mladshiycard />
      </div>
    </React.Fragment>
  )
}

export default MladshayaShkola