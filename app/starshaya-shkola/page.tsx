import firstUnImg from "@/public/media/schoolAlbom/starshiy1.jpg"
import secondUnImg from "@/public/media/schoolAlbom/starshiy0007.jpg"
import thirdUnImg from "@/public/media/schoolAlbom/starshiy1111.jpg"
import fourthUnImg from "@/public/media/schoolAlbom/starshiymokap.jpg"
import fivethUnImg from "@/public/media/schoolAlbom/starshiy1010.jpg"
import StarshiyCard from "../../components/starshiyCard";
import React from 'react'
import AlbumCard from "@/components/AlbumCard"
import AlbumCardMobile from "@/components/AlbumCardMobile"

const StarshayaShkola = () => {

  const data = [
    { id: 1, image: firstUnImg, type: "Описание: Хард Ковер Мрамор А4", page: "Страницы: 8", cover: "Обложка: Софт-тач твёрдый пр.", blok: "Блок: Лабораторная печать из пластиков", photoshoot: "Фотосессия: 2 часа в фотостудии", bonus: "", term: "Срок: От 30 до 60 рабочих дней" },
    { id: 2, image: secondUnImg, type: "Описание: Книга Элегант NEW А4", page: "Страницы: 8", cover: "Обложка: Фактурный печать 3D", blok: "Блок: Лабораторная печать из пластиков", photoshoot: "Фотосессия: 2 часа в фотостудии", bonus: "", term: "Срок: От 30 до 60 рабочих дней" },
    { id: 3, image: thirdUnImg, type: "Описание: ЛАЙТ NEW А4", page: "Страницы: 8", cover: "Обложка: Фото обложка без Т-пр.", blok: "Блок: Лабораторная печать из пластиков", photoshoot: "Фотосессия: 2часа фотосесси в ШК. или 2 часа в фотостудии", bonus: "", term: "Срок: От 30 до 60 рабочих дней" },
    { id: 4, image: fourthUnImg, type: "Описание: Книга Элегант NEW А4", page: "Страницы: 8", cover: "Обложка: Проём портрета с фактурный печатью 3D", blok: "Блок: Лабораторная печать из пластиков", photoshoot: "Фотосессия: 2 часа в фотостудии", bonus: "", term: "Срок: От 30 до 60 рабочих дней" },
    { id: 5, image: fivethUnImg, type: "Описание: Хард Ковер Классик", page: "Страницы: 8", cover: "Обложка: Софт-тач твёрдый пр. с портретом на обложке", blok: "Блок: Лабораторная печать из пластиков", photoshoot: "Фотосессия: 2 часа в фотостудии", bonus: "", term: "Срок: От 30 до 60 рабочих дней" },
  ]

  return (
    <React.Fragment>
      <div className=" max-w-full bgLogo">
        <div className=" w-full">
          <div className="firstStImg h-[300px] md:h-[700px]">
            <div className="bgColor flex justify-center items-center">
              <p className="text-center text-zinc-300 text-xl lg:text-6xl">
                Альбом для выпускного класса уже стал традицией. Сегодня выпускные фотоальбомы для школьников в нашем исполнении представляют собой целое произведение искусства, на страницах которого ярко и красочно представлены выпускники, их преподаватели, важные события школьных лет.
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

        <StarshiyCard />
      </div>
    </React.Fragment>
  )
}

export default StarshayaShkola