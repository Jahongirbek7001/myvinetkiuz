import React from 'react'

const Proyekti = () => {
  return (
    <React.Fragment>
      <div className=" bgLogo">
        <div className="">
          <div className=" videoNewSeason flex justify-center items-center p-20 rounded-md overflow-hidden text-center text-3xl font-semibold">
            <div className=" space-y-3">
              <section className=" flex justify-center items-center">
                <iframe
                  width="560"
                  height="315"
                  className="videoSection rounded-lg"
                  src="https://www.youtube.com/embed/nWzzXEfyYLg"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </section>
              <section className=" videoText">
                <span>
                  Грандиозный выпуск INTERNATIONAL HOUSE OF TASHKENT 2022!!!
                </span>
              </section>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Proyekti