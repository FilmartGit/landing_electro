import clsx from "clsx";
import Image from "next/image";
import { useHoverCardState } from "../model/useHoverCardState";

export default function Card({ title, img, width, height }) {
  const [stateLight, changeLigth] = useHoverCardState();
  return (
    <div
      className="bg-[#3F3F3F] rounded-lg p-[11px] h-80 lg:h-72 sm:h-80 relative items-center"
      onMouseEnter={changeLigth}
      onMouseLeave={changeLigth}
    >
      <div className="relative text-center text-slate-50 w-4/5 mx-auto border-b border-dotted border-[#585858] box-border leading-5 h-16 text-lg lg:text-base sm:text-xl z-10">
        {title}
      </div>
      <div className="relative lg:w-48 lg:h-52 sm:h-56 sm:w-full w-full h-60">
        <div
          className={clsx(
            "absolute bg-[#444444] rounded-lg sm:w-40 sm:h-36 w-full h-56 sm:left-4 left-0 z-10 transition-all",
            stateLight
              ? "opacity-30 top-3 scale-100"
              : "top-2 opacity-100 scale-95"
          )}
        ></div>
        <div
          className={clsx(
            "absolute bg-[#4F4F4F] rounded-lg sm:w-44 sm:h-36 h-52 sm:left-2 left-0 w-full z-20 transition-all",
            stateLight
              ? "top-5 sm:top-5 scale-100 opacity-30"
              : "top-5 sm:top-3 scale-95 opacity-100"
          )}
        ></div>
        <div
          className={clsx(
            "absolute bg-[#1A1A1A] rounded-lg lg:w-48 lg:h-44 sm:h-[200px] sm:w-full sm:left-0 left-0 w-full h-52 z-30 transition-all sm:top-3 ",
            stateLight ? "top-8 lg:top-6 scale-100" : "top-8 lg:top-3 scale-95"
          )}
        >
          <div className="flex w-full h-full items-center justify-center sm:opacity-100">
            <Image src={img} alt={title} width={width} height={height} className={clsx("transition-opacity", stateLight
              ? "lg:opacity-100 "
              : "lg:opacity-30")}/>
          </div>
        </div>
      </div>

      <Image
        src={"/ligth.png"}
        className={clsx(
          "transition-opacity -top-6 absolute left-5 z-0 lg:block hidden",
          stateLight ? "opacity-100" : "opacity-0"
        )}
        width="180"
        height="200"
        alt=""
      />
    </div>
  );
}
