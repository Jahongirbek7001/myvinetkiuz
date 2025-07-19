import studio3 from "@/public/media/univerAlbom/mantiya2.jpg"
import studio2 from "@/public/media/univerAlbom/mantiya3.jpg"
import studio5 from "@/public/media/univerAlbom/mantiya4.jpg"
import studio4 from "@/public/media/univerAlbom/mantiya5.jpg"
import studio6 from "@/public/media/univerAlbom/mantiya6.jpg"
import studio1 from "@/public/media/univerAlbom/mantiya7.jpg"
import Image from "next/image"



function MantiyaCard() {
  return (
    <>
      <div className=" w-full grid grid-cols-3 gap-5  p-5 lg:p-20 sixCard">
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
          <Image src={studio4} className=" scale-110 " alt=""/>
        </div>
        <div className=" overflow-hidden">
          <Image src={studio5} className=" " alt=""/>
        </div>
        <div className=" overflow-hidden">
          <Image src={studio6} className=" scale-110" alt=""/>
        </div>
      </div>
    </>
  );
}

export default MantiyaCard;