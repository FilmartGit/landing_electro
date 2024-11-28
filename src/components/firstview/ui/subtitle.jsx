import clsx from "clsx";

export default function Subtitle({ content, className }) {
  return (
    <div className={clsx("", className)}>
      <div className="lg:w-3/6 sm:w-3/4 mx-auto font-normal border-l border-r border-dotted border-[#585858] text-lg sm:leading-4 leading-6 py-6 text-center text-slate-50">
        Есть эскиз или проект? <br /> Вышлите на расчет.
      </div>
    </div>
  );
}
