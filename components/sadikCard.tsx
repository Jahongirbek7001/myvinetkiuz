import studio1 from "@/public/media/schoolAlbom/sadik1.jpg"
import studio2 from "@/public/media/schoolAlbom/sadik2.jpg"
import studio3 from "@/public/media/schoolAlbom/sadik3syomka.jpg"
import syomka1 from "@/public/media/schoolAlbom/sadik4.jpg"
import syomka2 from "@/public/media/schoolAlbom/sadik5.jpg"
import syomka3 from "@/public/media/schoolAlbom/sadik6.jpg"
import Image from "next/image"


function SadikCard() {
  return (
    <>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 lg:p-20">
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
          <Image src={syomka2} alt=""/>
        </div>
        <div className=" overflow-hidden">
          <Image src={syomka3} alt=""/>
        </div>
      </div>
    </>
  );
}

export default SadikCard;