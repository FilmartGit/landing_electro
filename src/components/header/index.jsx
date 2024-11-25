import Image from 'next/image';
import Link from "next/link";

export default function HeaderMenu() {
  return (
    <header className="w-full bg-[#1A1A1A] text-white px-9 py-4 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <Image src={'logo.svg'} alt="VDS товары для электромонтажа" height="66" width="76"/>
        <p className='w-56 leading-4 font-light'>Проверенные временем решения даже для высоко нагруженных объектов.</p>
      </div>
      {/* <div className="text-base font-bold flex gap-10">
        <Link href="tel:+7(900)0000000">Подбор материалов</Link>
        <Link href="tel:+7(900)0000000">Каталог</Link>
        <Link href="tel:+7(900)0000000">Контакты</Link>
      </div> */}
      <div className="text-base font-bold">
        <Link href="tel:+79515631812">+7 (951) 563-18-12</Link>
      </div>
    </header>
  );
}
