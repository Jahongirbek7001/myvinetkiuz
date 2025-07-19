'use client'

import phoneLogo from "@/public/media/phone.svg"
import tiktok from "@/public/media/tiktok.png"
import est2015 from "@/public/media/est2015.png"
import ScrollToTop from "react-scroll-to-top";
import Image from "next/image";
import Link from "next/link";


function Footer() {
  return (<>
    <div className=" bg-white flex justify-center flex-col md:flex-row md:justify-between p-2 items-center border-solid font-semibold">
      <div className="h-auto m-0 md:ml-4">
        <div>
          <ul className=" space-y-3 relative my-4 md:ml-4">
            <li className="flex justify-center md:justify-start items-center">
              <span className="w-[20px] h-[22px]">
                <Image src={phoneLogo} alt="" />
              </span>
              <span>+998 (95) 199-7-199</span>
            </li>
            <li className="flex justify-center md:justify-start items-center">
              <span className="w-[20px] h-[22px]">
                <Image src={phoneLogo} alt="" />
              </span>
              <span>+998 (93) 518-76-65</span>
            </li>
            <li className="flex justify-center md:justify-start items-center">
              <span className="w-[20px] h-[22px]">
                <Image src={phoneLogo} alt="" />
              </span>
              <span>+998 (99) 515-87-66
              </span>
            </li>
            <li className="flex justify-center md:justify-start items-center space-x-1">
              <span className="w-[25px] h-[25px]">
                <Image src="https://img.icons8.com/ios/50/000000/domain.png" alt="" width={25} height={25} />
              </span>
              <span>
                www.myvinetki.uz
              </span>
            </li>
          </ul>
        </div>
        <div>
          <ul className=" flex justify-center md:justify-start items-center gap-2 my-4 md:ml-4">
            <li className="">
              <Link href="https://t.me/Vinetkiuz1" target="_blank">
                <Image src="https://img.icons8.com/ios-filled/50/000000/telegram.png" width={40} height={40} alt="" />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/vinetkiuz/" target="_blank">
                <Image src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png" width={40} height={40} alt="" />
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/vinetkiuz" target="_blank">
                <Image src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png" width={40} height={40} alt="" />
              </Link>
            </li>
            <li>
              <Link href="http://www.tiktok.com/@vinetkiuz" target="_blank">
                <Image src={tiktok} className="w-[40px] h-[40px]" alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="est2015logo">
        <Link href="/">
          <Image src={est2015} className="w-[270px] h-[270px]" alt="" />
        </Link>
      </div>

      {/* Map */}
      <ScrollToTop smooth className=" flex justify-center items-center" />
    </div>
  </>);
}

export default Footer;