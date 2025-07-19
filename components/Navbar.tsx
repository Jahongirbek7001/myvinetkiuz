"use client"

import { useState } from 'react';
import logoVinetki from '@/public/media/LOGOVINETKI.png'
import Hamburger from 'hamburger-react'
import Link from 'next/link';
import Image from 'next/image';

import React from 'react'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <div className=' w-full flex justify-between items-center p-0 md:px-10'>
        <div className=' flex justify-start items-center box-border'>
          <section className='logo w-[180px] h-[140px] overflow-hidden'>
            <Link href="/" >
              <Image src={logoVinetki} className="logoVinetki" alt='' />
            </Link>
          </section>
        </div>
        <div className="mobile-menu">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div className={isOpen ? " navbar1 bg-white flex justify-center items-center gap-x-3 text-gray-600 text-lg font-normal text-center mr-24 z-20" : 'navbar bg-white flex justify-center items-center gap-x-3 text-gray-600 text-lg font-normal text-center'}>
          <Link href="/" className="page">Главная</Link>
          <Link href="/kak-mi-rabotayem">Как мы работаем?</Link>
          <Link href="/o-nas">О нас</Link>
          <Link href="/otzivi">Отзывы</Link>
          <Link href="/novinki-sezona">Новинки сезона</Link>
        </div>
      </div>

    </>
  );
}

export default Navbar