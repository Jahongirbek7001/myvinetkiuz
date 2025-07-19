import lenta1 from "@/public/media/lenta/lenta1.webp"
import lenta2 from "@/public/media/lenta/lenta2.webp"
import lenta3 from "@/public/media/lenta/lenta3.webp"
import lenta4 from "@/public/media/lenta/lenta4.webp"
import lenta5 from "@/public/media/lenta/lenta5.webp"
import lenta6 from "@/public/media/lenta/lenta6.png"
import lenta7 from "@/public/media/lenta/lenta7.webp"
import lenta8 from "@/public/media/lenta/lenta8.webp"
import lenta9 from "@/public/media/lenta/lenta9.webp"
import lenta10 from "@/public/media/lenta/lenta10.webp"
import lenta11 from "@/public/media/lenta/lenta11.webp"
import lenta12 from "@/public/media/lenta/lenta12.webp"
import lenta13 from "@/public/media/lenta/lenta13.webp"
import lenta14 from "@/public/media/lenta/lenta14.webp"
import lenta15 from "@/public/media/lenta/lenta15.webp"
import lenta16 from "@/public/media/lenta/lenta16.webp"
import lenta17 from "@/public/media/lenta/lenta17.webp"
import lenta18 from "@/public/media/lenta/lenta18.webp"
import lenta19 from "@/public/media/lenta/lenta19.webp"
import lenta20 from "@/public/media/lenta/lenta20.webp"
import lenta21 from "@/public/media/lenta/lenta21.webp"
import lenta22 from "@/public/media/lenta/lenta22.webp"
import lenta23 from "@/public/media/lenta/lenta23.webp"
import lenta24 from "@/public/media/lenta/lenta24.webp"
import folga1 from "@/public/media/lenta/folga1.webp"
import folga2 from "@/public/media/lenta/folga2.webp"
import folga3 from "@/public/media/lenta/folga3.webp"
import Image from "next/image"




function LentaComp() {
  const lentaData = [
    {
      id: 1,
      photo: lenta1,
      text: "1. Белый"
    },
    {
      id: 2,
      photo: lenta2,
      text: "2. Cеребряный"
    },
    {
      id: 3,
      photo: lenta3,
      text: "3. Бежевый"
    },
    {
      id: 4,
      photo: lenta4,
      text: "4. Кремовый"
    },
    {
      id: 5,
      photo: lenta5,
      text: "5. Золото"
    },
    {
      id: 6,
      photo: lenta6,
      text: "6. Темное золото"
    },
    {
      id: 7,
      photo: lenta7,
      text: "7. Пудра"
    },
    {
      id: 8,
      photo: lenta8,
      text: "8. Бледно-розовый"
    },
    {
      id: 9,
      photo: lenta9,
      text: "9. Ярко-розовый"
    },
    {
      id: 10,
      photo: lenta10,
      text: "10. Фуксия"
    },
    {
      id: 11,
      photo: lenta11,
      text: "11. Алый"
    },
    {
      id: 12,
      photo: lenta12,
      text: "12. Темно-красный"
    },
    {
      id: 13,
      photo: lenta13,
      text: "13. Бордо"
    },
    {
      id: 14,
      photo: lenta14,
      text: "14. Лаванда"
    },
    {
      id: 15,
      photo: lenta15,
      text: "15. Фиолетовый"
    },
    {
      id: 16,
      photo: lenta16,
      text: "16. Баклажан"
    },
    {
      id: 17,
      photo: lenta17,
      text: "17. Голубой"
    },
    {
      id: 18,
      photo: lenta18,
      text: "18. Синий"
    },
    {
      id: 19,
      photo: lenta19,
      text: "19. Темно-синий"
    },
    {
      id: 20,
      photo: lenta20,
      text: "20. Черный"
    },
    {
      id: 21,
      photo: lenta21,
      text: "21. Мята"
    },
    {
      id: 22,
      photo: lenta22,
      text: "22. Бирюза"
    },
    {
      id: 23,
      photo: lenta23,
      text: "23. Зеленый"
    },
    {
      id: 24,
      photo: lenta24,
      text: "24. Изумруд"
    }
  ]

  return (
    <>
      <div className=" w-full flex justify-center items-center">
        <div className="  max-w-7xl grid grid-cols-1 justify-items-center space-y-10 lenta-container">
          <div className=" lentaTitle text-3xl font-semibold">
            Палитра цветов сатина
          </div>
          <div className=" lenta grid grid-cols-4 gap-5">
            {lentaData.map(i => {
              return (
                <div className=" p-10 space-y-3" key={i.id}>
                  <section className=" overflow-hidden">
                    <Image src={i.photo} className=" w-[200px] h-[200px]" alt="" />
                  </section>
                  <section className=" text-center text-lg font-semibold">
                    {i.text}
                  </section>
                </div>
              )
            })}
          </div>
          <div className=" space-y-20">
            <section className="folgaTitle text-3xl font-semibold text-center">
              Варианты нанесения изображения
            </section>
            <section className=" falga grid grid-cols-3 gap-20">
              <div className=" space-y-5 grid grid-cols-1 justify-items-center">
                <div className="imgSection rounded-full overflow-hidden">
                  <Image src={folga1} className=" w-[280px] h-[280px]" alt="" />
                </div>
                <div className=" text-center text-lg font-semibold">Золотая фольга</div>
              </div>

              <div className=" space-y-5 grid grid-cols-1 justify-items-center">
                <div className="imgSection rounded-full overflow-hidden">
                  <Image src={folga2} className=" w-[280px] h-[280px]" alt="" />
                </div>
                <div className=" text-center text-lg font-semibold">Синяя фольга</div>
              </div>

              <div className=" space-y-5 grid grid-cols-1 justify-items-center">
                <div className="imgSection rounded-full overflow-hidden">
                  <Image src={folga3} className=" w-[280px] h-[280px]" alt="" />
                </div>
                <div className=" text-center text-lg font-semibold">Черный матовый</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default LentaComp;