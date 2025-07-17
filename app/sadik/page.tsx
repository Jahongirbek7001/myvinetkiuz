import firstSadikImg from "@/public/media/schoolAlbom/sadik3.jpg"
import secondSadikImg from "@/public/media/schoolAlbom/sadik7.jpg"
import thirdSadikImg from "@/public/media/schoolAlbom/sadik0013.jpg"
import fourthSadikImg from "@/public/media/schoolAlbom/sadik289.jpg"
import fivethSadikImg from "@/public/media/schoolAlbom/sadikMM.jpg"
import SadikCard from "../../components/sadikCard";

import React from 'react'
import Image from "next/image";
import Link from "next/link"
import AlbumCard from "@/components/AlbumCard"
import AlbumCardMobile from "@/components/AlbumCardMobile"

const Sadik = () => {
  const data = [
    { id: 1, image: firstSadikImg, type: "Описание: Лайт А4", page: "Страницы: 4", cover: "Обложка: Фото обложка без Т-пр.", blok: "Блок: Лабораторная печать из пластиков", photoshoot: "Фотосессия: 2 часа в садике", bonus: "", term: "Срок: От 30 до 60 рабочих дней" },
    { id: 2, image: secondSadikImg, type: "Описание: Хард Ковер Классик А4", page: "Страницы: 4", cover: "Обложка: Софт-тач твёрдый пр.", blok: "Блок: Лабораторная печать из пластиков", photoshoot: "Фотосессия: 2 часа в садике", bonus: "", term: "Срок: От 30 до 60 рабочих дней" },
    { id: 3, image: thirdSadikImg, type: "Описание: Хард Ковер Классик А4", page: "Страницы: 4", cover: "Обложка: Софт-тач твёрдый пр.", blok: "Блок: Лабораторная печать из пластиков", photoshoot: "Фотосессия: 2 часа в садике", bonus: "", term: "Срок: От 30 до 60 рабочих дней" },
    { id: 4, image: fourthSadikImg, type: "Описание: Хард Ковер Классик А", page: "Страницы: 4", cover: "Обложка: Софт-тач твёрдый пр.", blok: "Блок: Лабораторная печать из пластиков", photoshoot: "Фотосессия: 2 часа в садике", bonus: "", term: "Срок: От 30 до 60 рабочих дней" },
    { id: 5, image: fivethSadikImg, type: "Описание: Хард Ковер Классик А4", page: "Страницы: 4", cover: "Обложка: Софт-тач твёрдый пр.", blok: "Блок: Лабораторная печать из пластиков", photoshoot: "Фотосессия: 2 часа в садике", bonus: "", term: "Срок: От 30 до 60 рабочих дней" },
  ]
  return (
    <React.Fragment>
      <div className=" max-w-full bgLogo">
        <div className=" w-full">
          <div className="firstSadikImg h-[300px] md:h-[700px]">
            <div className="bgColor flex justify-center items-center">
              <p className="text-center text-zinc-300 text-xl lg:text-6xl">
                Сегодня они такие милые и хорошенькие… И так хочется запомнить, какими они были! Да и им самим выпускные альбомы для детского сада когда-нибудь помогут вспомнить это беззаботное время, своих когдатошних друзей, улыбнуться, вернуть светлое и беззаботное настроение)
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

        <SadikCard />
      </div>
    </React.Fragment>
  )
}

export default Sadik