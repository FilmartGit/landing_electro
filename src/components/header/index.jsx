import Image from 'next/image';
import Link from "next/link";
import { useEffect } from 'react';
import { UIicons } from '../ui/icons';

export default function HeaderMenu() {
  
  let width = 0;
  useEffect(()=>{
      width = window.innerWidth;
  }, []);

  return (
    <header className="w-full bg-[#1A1A1A] text-white px-9 py-4 flex items-center ">
      <div className="flex gap-4 items-center mr-auto">
        <Image src={'logo.svg'} alt="VDS товары для электромонтажа" height={width < 600 ? "40" : "66"} width={width < 600 ? "60" : "76"} unoptimized="true"/>
        <p className='w-56 leading-4 font-light hidden sm:block'>Проверенные временем решения даже для высоко нагруженных объектов.</p>
      </div>
      {/* <div className="text-base font-bold flex gap-10">
        <Link href="tel:+7(900)0000000">Подбор материалов</Link>
        <Link href="tel:+7(900)0000000">Каталог</Link>
        <Link href="tel:+7(900)0000000">Контакты</Link>
      </div> */}
      <div className="text-base font-bold ml-auto flex flex-col gap-2">
        <Link href="mailto:vds-snab1@yandex.ru" className='flex gap-2 items-center'>
          <UIicons.email />
          vds-snab1@yandex.ru
        </Link>
        <Link href="tel:+79515631812" className='flex gap-2 items-center'>
          <UIicons.tel />
          +7 (951) 563-18-12
        </Link>
      </div>
    </header>
  );
}
