import UIbuttonSender from "@/components/ui/button_sender";

export default function FormPageBody() {
  return (
    <>
      <div className="mt-4 border-b border-dotted border-[#585858] box-border">
        <div className="w-1/2 border-l border-r border-dotted border-[#585858] box-border mx-auto">
          <form onSubmit="">
            sccsc
          </form>
        </div>
      </div>
      <div className="w-1/2 border-l border-r border-dotted border-[#585858] box-border mx-auto p-6">
        <UIbuttonSender title="ОТПРАВИТЬ" handleClick={()=>{}} className="w-full"/>
      </div>
    </>
  );
}
