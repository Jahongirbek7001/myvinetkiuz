import maket1 from "@/public/media/lenta/maket1.png"
import maket2 from "@/public/media/lenta/maket2.png"
import maket3 from "@/public/media/lenta/maket3.png"
import maket4 from "@/public/media/lenta/maket4.png"
import maket5 from "@/public/media/lenta/maket5.png"
import maket6 from "@/public/media/lenta/maket6.png"
import maket7 from "@/public/media/lenta/maket7.png"
import maket8 from "@/public/media/lenta/maket8.png"
import maket9 from "@/public/media/lenta/maket9.png"
import maket10 from "@/public/media/lenta/maket10.png"
import maket11 from "@/public/media/lenta/maket11.png"
import maket12 from "@/public/media/lenta/maket12.png"
import maket13 from "@/public/media/lenta/maket13.png"
import maket14 from "@/public/media/lenta/maket14.png"
import maket15 from "@/public/media/lenta/maket15.png"
import maket16 from "@/public/media/lenta/maket16.png"
import maket17 from "@/public/media/lenta/maket17.png"
import maket18 from "@/public/media/lenta/maket18.png"
import maket19 from "@/public/media/lenta/maket19.png"
import maket20 from "@/public/media/lenta/maket20.png"
import maket21 from "@/public/media/lenta/maket21.png"
import Image from "next/image"
import Link from "next/link"





function MaketComp() {
  const maketData = [
    {
      id: 1,
      photo: maket1,
      title: "Макет №1",
      text: "Классический шрифт, который уже разлетелся тысячным тиражом"
    },
    {
      id: 2,
      photo: maket2,
      title: "Макет №2",
      text: "Классическое начертание для выпускников 9–11-х классов"
    },
    {
      id: 3,
      photo: maket3,
      title: "Макет №3",
      text: "Универсальный шрифт, который подходит всем выпускникам"
    },
    {
      id: 4,
      photo: maket4,
      title: "Макет №4",
      text: "Тонкое, изящное начертание шрифта отлично смотрится с парной короной"
    },
    {
      id: 5,
      photo: maket5,
      title: "Макет №5",
      text: "Витиеватый шрифт с символом писательской тематики"
    },
    {
      id: 6,
      photo: maket6,
      title: "Макет №6",
      text: "Благородный шрифт с парной короной для парней и девушек"
    },
    {
      id: 7,
      photo: maket7,
      title: "Макет №7",
      text: "Макет с большим количеством украшений и окантовкой"
    },
    {
      id: 8,
      photo: maket8,
      title: "Макет №8",
      text: "Волшебство этого макета сделает последний звонок настоящим праздником"
    },
    {
      id: 9,
      photo: maket9,
      title: "Макет №9",
      text: "Игривый макет с вечными символами любого торжества :)"
    },
    {
      id: 10,
      photo: maket10,
      title: "Макет №10",
      text: "Тонкий шрифт с красивой графикой внутри которой ваш номер класса"
    },
    {
      id: 11,
      photo: maket11,
      title: "Макет №11",
      text: "Отличный шрифт и корона которая будет заметна на любом расстоянии"
    },
    {
      id: 12,
      photo: maket12,
      title: "Макет №12",
      text: "Авторский макет, созданный профессиональными художниками"
    },
    {
      id: 13,
      photo: maket13,
      title: "Макет №13",
      text: "Упрощенный шрифт со стильными элементами дизайна"
    },
    {
      id: 14,
      photo: maket14,
      title: "Макет №14",
      text: "Один из наших топовых макетов с символами хэллоу китти"
    },
    {
      id: 15,
      photo: maket15,
      title: "Макет №15",
      text: "Один из новых макетов, который отличит вас от остальных выпускников"
    },
    {
      id: 16,
      photo: maket16,
      title: "Макет №16",
      text: "Эти символы способны разбудить зверя даже в самых спокойных людях :)"
    },
    {
      id: 17,
      photo: maket17,
      title: "Макет №17",
      text: "Крайний корабль вашего выпуска отправляется в плавание"
    },
    {
      id: 18,
      photo: maket18,
      title: "Макет №18",
      text: "Немного напыщенный макет уносит нас в царское прошлое"
    },
    {
      id: 19,
      photo: maket19,
      title: "Макет №19",
      text: "Игривый макет с логотипом известного бренда"
    },
    {
      id: 20,
      photo: maket20,
      title: "Макет №20",
      text: "В таких лентах девушки превратяться в принцесс, а парни в рыцарей"
    },
    {
      id: 21,
      photo: maket21,
      title: "Макет №21",
      text: "Новый макет с нестандартным шрифтом и игривой короной"
    }
  ]

  return (
    <>
      <div className="  w-full grid grid-cols-1 justify-items-center space-y-10 my-10">
        <div className=" maketSectionTitle text-center font-semibold grid grid-cols-1 gap-5">
          <span className="text-5xl">
            Готовые макеты лент
          </span>
          <span className=" text-xl">
            Выберете дизайн лент для своего класса
          </span>
        </div>
        <div className="maket grid grid-cols-3 gap-5">
          {maketData.map(i => {
            return (
              <div className=" maketSection p-10 space-y-5" key={i.id}>
                <section className=" overflow-hidden w-full h-[270px] mx-auto my-0 flex justify-center items-center">
                  <Image src={i.photo} className=" w-full" alt="" />
                </section>
                <Link href="https://t.me/Vinetkiuz1" target="_blank">
                  <section className=" text-center text-lg font-semibold space-y-5 px-5">
                    <span className="maketTitle text-2xl font-semibold">
                      {i.title}
                    </span>
                    <br />
                    <span className="maketText text-lg font-semibold">
                      {i.text}
                    </span>
                  </section>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default MaketComp;