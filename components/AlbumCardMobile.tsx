'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { StaticImageData } from "next/image";

interface AlbumCardMobileProps {
    album: {
        id: number
        type: string
        page: string
        cover: string
        blok: string
        photoshoot: string
        bonus: string
        term: string
        image: StaticImageData;
    }
}

export default function AlbumCardMobile({ album }: AlbumCardMobileProps) {
  return (
    <div className="w-full px-1 flex justify-center items-center flex-col h-[800px]" key={album.id}>
      <div className="relative h-1/2 rounded-t-md overflow-hidden">
        <Image
          src={album.image}
          alt=""
          className="object-center object-cover w-full h-full scale-150 translate-y-20"
        />

        <div className="w-full absolute bottom-5 flex justify-center items-center gap-5">
          <Link href="/#form">
            <button className="bg-white text-sm md:text-xl flex justify-center items-center font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">
              Заказать альбом
            </button>
          </Link>
        </div>
      </div>

      <div className="text p-5 bg-black opacity-40 text-white h-1/2 rounded-b-md">
        <div className="grid grid-cols-1 text-left text-sm md:text-2xl space-y-5">
          <span>{album.type}</span>
          <span>{album.page}</span>
          <span>{album.cover}</span>
          <span>{album.blok}</span>
          <span>{album.photoshoot}</span>
          <span>{album.bonus}</span>
          <span>{album.term}</span>
        </div>
      </div>
    </div>
  );
}
