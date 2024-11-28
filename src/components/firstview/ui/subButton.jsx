import Image from "next/image";
import Link from "next/link";
import ModalQR from "./qr-modal";
import { useState } from "react";

export default function SubButton() {
  const [stateQRwh, setStateQRwh] = useState(false);
  const [stateQRtg, setStateQRtg] = useState(false);

  return (
    <>
      <div className="flex border border-dotted border-[#585858] lg:w-1/2 sm:w-3/4 mx-auto">
        <p className="p-6 block border-r border-dotted border-[#585858] text-slate-50 ">
          Где вам удобно получить расчет?
        </p>
        <div className="px-9 flex items-center gap-[10px] relative">
          <Link
            href="https://wa.me/79515631812"
            onMouseEnter={() => setStateQRwh((oldState) => !oldState)}
            onMouseLeave={() => setStateQRwh((oldState) => !oldState)}
            target="_blank"
          >
            <Image
              src={"wa-logo.svg"}
              alt="расчет стоимость в WhatsApp"
              width="51"
              height="51"
            />
          </Link>
          <Link
            href="https://t.me/+79515631812"
            target="_blank"
            onMouseEnter={() => setStateQRtg((oldState) => !oldState)}
            onMouseLeave={() => setStateQRtg((oldState) => !oldState)}
          >
            <Image
              src={"tg-logo.svg"}
              alt="расчет стоимость в WhatsApp"
              width="59"
              height="60"
              className="-mt-1 "
            />
            {stateQRwh ? <ModalQR type="whatsapp" /> : undefined}
            {stateQRtg ? <ModalQR type="telegram" /> : undefined}
          </Link>
        </div>
      </div>
      <div className="flex border-l border-r pb-9 border-dotted border-[#585858] lg:w-1/2 sm:w-3/4 mx-auto"></div>
    </>
  );
}
