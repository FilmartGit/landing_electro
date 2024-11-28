import UIbuttonSender from "@/components/ui/button_sender";

export default function ButtonBox({ changeModal }) {
  return (
    <div className="border-l border-r border-dotted border-[#585858] lg:w-1/2 sm:w-3/4 mx-auto py-8 relative">
      <UIbuttonSender
        title="ЗАПРОСИТЬ КП"
        handleClick={()=>changeModal((oldState) => !oldState)}
      />
    </div>
  );
}
