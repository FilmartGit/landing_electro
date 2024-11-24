import Image from "next/image";
import Link from "next/link";

export default function SubButton() {
  return (
    <>
      <div className="flex border border-dotted border-[#585858] w-1/2 mx-auto">
        <p className="p-6 block border-r border-dotted border-[#585858] text-slate-50 ">
          {" "}
          Где вам удобно получить расчет?
        </p>
        <div className="px-9 flex items-center gap-[10px]">
          <Link href="##">
            <Image
              src={"wa-logo.svg"}
              alt="расчет стоимость в WhatsApp"
              width="51"
              height="51"
            />
          </Link>
          <Link href="##">
            <Image
              src={"tg-logo.svg"}
              alt="расчет стоимость в WhatsApp"
              width="59"
              height="60"
              className="-mt-1 "
            />
          </Link>
        </div>
      </div>
      <div className="flex border-l border-r pb-9 border-dotted border-[#585858] w-1/2 mx-auto"></div>
    </>
  );
}
