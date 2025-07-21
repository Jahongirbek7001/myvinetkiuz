// components/AlbumCard.tsx
import Image from "next/image"
import Link from "next/link"
import type { StaticImageData } from "next/image";

interface AlbumCardProps {
    item: {
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

export default function AlbumCard({ item }: AlbumCardProps) {
    const isEven = item.id % 2 === 0

    return (
        <div className="w-full px-20 flex justify-center items-center" key={item.id}>
            {isEven ? (
                <>
                    {/* Left: Text */}
                    <div className="text p-10 bg-black opacity-40 text-white w-[700px] h-[600px] rounded-l-md">
                        <div className="grid grid-cols-1 text-left text-2xl space-y-5">
                            <span>{item.type}</span>
                            <span>{item.page}</span>
                            <span>{item.cover}</span>
                            <span>{item.blok}</span>
                            <span>{item.photoshoot}</span>
                            <span>{item.bonus}</span>
                            <span>{item.term}</span>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="relative w-[700px] h-[600px] rounded-r-md overflow-hidden">
                        <Image
                            src={item.image}
                            alt=""
                            className="object-center object-cover w-full h-full"
                            fill
                        />
                        <div className="w-full absolute bottom-5 flex justify-center items-center gap-5">
                            <Link href="/#form">
                                <button className="bg-white flex justify-center items-center font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">
                                    Заказать альбом
                                </button>
                            </Link>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {/* Left: Image */}
                    <div className="relative w-[700px] h-[600px] rounded-l-md overflow-hidden">
                        <Image
                            src={item.image}
                            alt=""
                            className="object-center object-cover h-full"
                            
                        />
                        <div className="w-full absolute bottom-5 flex justify-center items-center gap-5">
                            <Link href="/#form">
                                <button className="bg-white flex justify-center items-center font-serif font-semibold px-6 py-2 rounded-lg shadow-lg hover:scale-105 my-3">
                                    Заказать альбом
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right: Text */}
                    <div className="text p-10 bg-black opacity-40 text-white w-[700px] h-[600px] rounded-r-md">
                        <div className="grid grid-cols-1 text-left text-2xl space-y-5">
                            <span>{item.type}</span>
                            <span>{item.page}</span>
                            <span>{item.cover}</span>
                            <span>{item.blok}</span>
                            <span>{item.photoshoot}</span>
                            <span>{item.bonus}</span>
                            <span>{item.term}</span>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
