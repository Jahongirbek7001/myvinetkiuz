import studio1 from "@/public/media/univerAlbom/studio1.jpg"
import studio2 from "@/public/media/univerAlbom/studio2.jpg"
import studio3 from "@/public/media/univerAlbom/studio3.jpg"
import syomka1 from "@/public/media/univerAlbom/syomka10.jpg"
import syomka2 from "@/public/media/univerAlbom/syomka2.jpg"
import syomka3 from "@/public/media/univerAlbom/syomka3.jpg"
import Image from "next/image"

function UniverCard() {
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

        <div className=" overflow-hidden">
          <Image src={syomka1} alt="" className=" scale-110"/>
        </div>
        <div>
          <Image src={syomka2} alt="" />
        </div>
        <div>
          <Image src={syomka3} alt="" />
        </div>
      </div>
    </>
  );
}

export default UniverCard;