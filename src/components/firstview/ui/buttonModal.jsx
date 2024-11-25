import UIbuttonSender from "@/components/ui/button_sender";

export default function ButtonBox({ changeModal }) {
  return (
    <div className="border-l border-r border-dotted border-[#585858] w-1/2 mx-auto py-8 relative">
      <UIbuttonSender
        title="ЗАПРОСИТЬ КП"
        handleClick={()=>changeModal((oldState) => !oldState)}
      />
    </div>
  );
}
