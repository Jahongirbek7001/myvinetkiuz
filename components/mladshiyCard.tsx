import studio1 from "@/public/media/schoolAlbom/studioM1.jpg"
import studio2 from "@/public/media/schoolAlbom/studioM2.jpg"
import studio3 from "@/public/media/schoolAlbom/studioM3.jpg"
import syomka1 from "@/public/media/schoolAlbom/studioM4.jpg"
import syomka2 from "@/public/media/schoolAlbom/studioM5.jpg"
import syomka3 from "@/public/media/schoolAlbom/studioM6.jpg"
import Image from "next/image"



function Mladshiycard() {
  return (
    <>
      <div className=" w-full grid grid-cols-3 gap-5 p-5 lg:p-20 sixCard">
        <div>
          <Image src={studio1} alt="" />
        </div>
        <div>
          <Image src={studio2} alt="" />
        </div>
        <div>
          <Image src={studio3} alt="" />
        </div>

        <div className="  overflow-hidden">
          <Image src={syomka1} alt="" />
        </div>
        <div className=" overflow-hidden">
          <Image src={syomka2} alt="" />
        </div>
        <div className=" overflow-hidden">
          <Image src={syomka3} alt="" />
        </div>
      </div>
    </>
  );
}

export default Mladshiycard;