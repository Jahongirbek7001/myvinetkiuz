// import Layout from "../../components/Layout";
// import video from "../../media/AR-video.mp4"
import React from 'react'

const ARTECHNOLOGY = () => {
  return (
    <div className="max-w-full bgLogo">
      <div className=" w-full">
        <div className="firstARkImg">
          <div className="bgColor">
            <div className="text p-20 text-center" >
              <span className="text-center text-zinc-300">
                Вы можете создать больше воспоминаний. Когда через несколько лет вы посмотрите на эти виньетки, видео помогут вам вспомнить все детали этих съёмок, детали ваших школьных годов, и всех ваших одноклассников
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" videoNewSeason flex justify-center items-center p-20 rounded-md overflow-hidden text-center text-3xl font-semibold">
        <div className=" space-y-3">
          <section>
            <iframe
              width="660"
              height="415"
              className="videoSection rounded-lg"
              src="https://www.youtube.com/embed/Epn8p-QvJUo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </section>
          <section className=" videoText">
            <span>
              Создавайте оживающие воспоминание вместе с нами!
            </span>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ARTECHNOLOGY