import clsx from "clsx";
import Image from "next/image";
import { useHoverCardState } from "../model/useHoverCardState";

export default function Card({ title, img, width, height }) {
  const [stateLight, changeLigth] = useHoverCardState();
  return (
    <div
      className="bg-[#3F3F3F] rounded-lg p-[11px] h-72 relative items-center"
      onMouseEnter={changeLigth}
      onMouseLeave={changeLigth}
    >
      <div className="relative text-center text-slate-50 w-4/5 mx-auto border-b border-dotted border-[#585858] box-border leading-5 h-16 text-base z-10">
        {title}
      </div>
      <div className="relative w-48 h-52">
        <div
          className={clsx(
            "absolute bg-[#444444] rounded-lg w-40 h-36 left-4 z-10 transition-all",
            stateLight
              ? "opacity-30 top-3 scale-100"
              : "top-2 opacity-100 scale-95"
          )}
        ></div>
        <div
          className={clsx(
            "absolute bg-[#4F4F4F] rounded-lg w-44 h-36 left-2 z-20 transition-all",
            stateLight
              ? "top-5 scale-100 opacity-30"
              : "top-3 scale-95 opacity-100"
          )}
        ></div>
        <div
          className={clsx(
            "absolute bg-[#1A1A1A] rounded-lg w-48 h-44 left-0 z-30 transition-all",
            stateLight ? "top-6 scale-100" : "top-3 scale-95"
          )}
        >
          <div className="flex w-full h-full items-center justify-center">
            <Image src={img} alt={title} width={width} height={height} className={clsx("transition-opacity", stateLight
              ? "opacity-100 "
              : "opacity-30")}/>
          </div>
        </div>
      </div>

      <Image
        src={"/ligth.png"}
        className={clsx(
          "transition-opacity -top-6 absolute left-5 z-0",
          stateLight ? "opacity-100" : "opacity-0"
        )}
        width="180"
        height="200"
        alt=""
      />
    </div>
  );
}
