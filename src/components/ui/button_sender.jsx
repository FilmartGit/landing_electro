import clsx from "clsx";

export default function UIbuttonSender({ title, handleClick, className }) {
  return (
    <button
      onClick={handleClick}
      className={clsx(
        "block rounded-xl mx-auto bg-[#FFED00] text-black py-5 px-20 font-semibold",
        className
      )}
    >
      {title}
    </button>
  );
}
