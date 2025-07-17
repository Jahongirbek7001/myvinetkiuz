import Sirojiddin from "@/public/media/sirojiddin.jpg"
import Momin from "@/public/media/momin.jpg"

import React from 'react'
import Image from "next/image";

const About = () => {
  return (
    <React.Fragment>
      <div>
        <section className=" grid grid-cols-1 justify-items-center">
          <div className="aboutPhoto flex justify-center items-center">
            <Image src={Sirojiddin} alt="" />
          </div>
          <div className=" aboutText px-20 text-xl">
            Здравствуйте! Я Сирожиддин Парпиев, основатель компании <span className=" font-semibold">Vinetki.uz</span> и <span className=" font-semibold">IZAR-STUDIO.</span>  С 7 лет мы держим на рынке лидерство, по изготовлению выпускных фото-книг. Наша организация помогает выпускникам запечатлеть и сохранить незабываемые и лучшие годы учебного года. Фото-книги изготавливаемые по Европейскому стандарту, имеет разного вида дизайна. С нами работают крупные частные и государственные школы, Вузы и колледжи, а также детские сады. Сотрудничество с Российскими партнерами дают нам возможность работать с системой SRM, которая создает удобные условия для наших клиентов. А наши сотрудники обладают навыками глубокой обработки фотографий, ретуши и цветокоррекции, с помощью специальных программ, таких как Lightroom и Photoshop. Накопленный годами опыт помогает нам находиться на передовой индустрии фотографии, и реализовывать первыми новаторские идеи и проекты. Мы можем предложить клиентам креативные и интересные фотоснимки высокого качества!

            Вы можете найти наши уникальные дизайнерские работы – на нашем сайте!

            Наш труд востребован, нас ценят и приглашают, а каждая наша работа приносит людям радость и незабываемые моменты!
          </div>
        </section>
        <section className=" grid grid-cols-1 justify-items-center">
          <div className="aboutPhoto flex justify-center items-center">
            <Image src={Momin} alt="" />
          </div>
          <div className="aboutText px-20 text-xl">
            Правильно распределять время — значит успевать на все!
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}

export default About