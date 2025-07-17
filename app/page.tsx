import Image from "next/image";
import universitet from "@/public/media/Университет.jpg"
import starshayaShkola from "@/public/media/старшаяШкола.jpg"
import mladshayaShkola from "@/public/media/младшаяШкола.jpg"
import sadik from "@/public/media/садик.jpg"
import artechnology from "@/public/media/AR-TECHNOLOGY.jpg"
import izarStudio from "@/public/media/IZAR-STUDIO.jpg"
import lenta from "@/public/media/lenta/lenta.jpg"
import mantiya from "@/public/media/mantiya.jpg"
import proyekti from "@/public/media/проекты.jpg"
import React from "react";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import SendMessage from "@/components/SendMessage";

export default function Home() {
  const data = [
    {
      id: 1,
      name: "Университет",
      photo: universitet,
      description: "Создайте незабываемый выпуск с нами!",
      link: "universitet",
      class: "photoUniver"
    },
    {
      id: 2,
      name: "Cтаршая школа",
      photo: starshayaShkola,
      description: "Создадим яркие воспоминания о выпускном вместе!",
      link: "starshaya-shkola",
      class: "photoStarshaya"
    },
    {
      id: 3,
      name: "Младшая школа",
      photo: mladshayaShkola,
      description: "Поздравляем с окончанием четвёртого класса!",
      link: "mladshaya-shkola",
      class: "photoMladshaya"
    },
    {
      id: 4,
      name: "Детский сад",
      photo: sadik,
      description: "Прощай садик, привет школа. С утра пора в школу!",
      link: "sadik",
      class: "photoSadik"
    },
    {
      id: 5,
      name: "AR-TECHNOLOGY",
      photo: artechnology,
      description: "Создавайте оживающие воспоминание вместе с нами!",
      link: "artechnology",
      class: "photoAR"
    },
    {
      id: 6,
      name: "IZAR-STUDIO",
      photo: izarStudio,
      description: "Уютно.Комфортно.Профессионально!",
      link: "izar-studio",
      class: "photoIZAR"
    },
    {
      id: 7,
      name: "Ленты для выпускников",
      photo: lenta,
      description: "Мы не просто печатаем ленты, мы дарим эмоции!",
      link: "lenta",
      class: "photoLenta"
    },
    {
      id: 8,
      name: "Мантии для выпускников",
      photo: mantiya,
      description: "Прокат выпускных мантий!",
      link: "mantiya",
      class: "photoMantiya"
    },
    {
      id: 9,
      name: "Проекты с партнёрами",
      photo: proyekti,
      description: "Незабываемые торжественные церемонии ",
      link: "vipuskniy",
      class: "photoProyekti"
    }
  ]

  return (
    <React.Fragment>
      <div className=" w-full">
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-20">

          {data.map(i => {
            return (
              <div className=" relative w-full p-4 my-5 shadow-md rounded-md bg-white/60" key={i.id}>
                <div
                  className=" w-full h-[224px] overflow-hidden rounded-lg -mt-9 mb-2 shadow-lg flex justify-center items-center"
                >
                  <Link href={`/${i.link}`}>
                    <Image src={i.photo} alt="" className={` ${i.class} w-full photo hover:scale-125 object-cover`} />
                  </Link>
                </div>
                <div
                  className=" space-y-3 card-content"
                >
                  <span
                    className=" cardName text-2xl font-semibold"
                  >{i.name}</span>
                  <p className="description line-clamp-1">{i.description}</p>
                  <Link
                    href={`/${i.link}`}
                  >
                    <button
                      className=" cardBtn flex justify-center items-center text-white font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3 btn"
                    >Подробно
                    </button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <Carousel />
        <SendMessage />
      </div>
    </React.Fragment>
  );
}
