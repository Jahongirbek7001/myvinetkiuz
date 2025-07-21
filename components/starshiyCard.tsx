import studio1 from "@/public/media/schoolAlbom/studio1.jpg"
import studio2 from "@/public/media/schoolAlbom/studio3.jpg"
import studio3 from "@/public/media/schoolAlbom/studio2.jpg"
import syomka1 from "@/public/media/schoolAlbom/syomka1.jpg"
import syomka2 from "@/public/media/schoolAlbom/syomka2.jpg"
import syomka3 from "@/public/media/schoolAlbom/syomka3.jpg"
import Image from "next/image"


function StarshiyCard() {
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
          <Image src={syomka1} className=" scale-110 " alt=""/>
        </div>
        <div className=" overflow-hidden">
          <Image src={syomka2} className=" scale-110" alt=""/>
        </div>
        <div className=" overflow-hidden">
          <Image src={syomka3} className=" scale-110" alt=""/>
        </div>
      </div>
    </>
  );
}

export default StarshiyCard;