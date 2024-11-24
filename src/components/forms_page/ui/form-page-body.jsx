import UIbuttonSender from "@/components/ui/button_sender";
import { UIicons } from '@/components/ui/icons';

export default function FormPageBody() {
  function handleSubmit() {
    alert("пошла");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="border-b border-dotted border-[#585858] box-border">
          <div className="pt-10 w-1/2 border-l border-r border-dotted border-[#585858] box-border mx-auto px-6  pb-5">
            <label
              htmlFor="formName"
              className="text-slate-50 text-lg font-normal"
            >
              ваше имя
            </label>
            <input
              id="formName"
              type="text"
              name="name"
              className="bg-[#D9D9D9] rounded-lg border-0 w-full mt-2 mb-5 p-5"
              required
            />
            <label
              htmlFor="formPhone"
              className="text-slate-50 text-lg font-normal"
            >
              номер телефона
            </label>
            <input
              id="formPhone"
              type="tel"
              name="tel"
              className="bg-[#D9D9D9] rounded-lg border-0 w-full mt-2 mb-5 p-5"
              required
            />
            <label
              htmlFor="formComment"
              className="text-slate-50 text-lg font-normal"
            >
              дополнительный комментарий
            </label>
            <input
              id="formComment"
              type="text"
              name="text"
              className="bg-[#D9D9D9] rounded-lg border-0 w-full mt-2 mb-5 p-5"
            />
            <p className="text-slate-50 text-lg font-normal">прикрепите файл</p>
            <label
              htmlFor="formFile"
              className="bg-[#444444] rounded-lg border flex items-center justify-center w-full mt-2 p-5 border-dashed border-[#585858] cursor-pointer hover:bg-[#525252] transition-colors"
            >
              <UIicons.fileDownloading className="w-5 h-5 text-[#D9D9D9]"/>
            </label>
            <input id="formFile" type="file" name="file" className="hidden" />
          </div>
        </div>
        <div className="w-1/2 border-l border-r border-dotted border-[#585858] box-border mx-auto p-6 pb-24">
          <UIbuttonSender
            title="ОТПРАВИТЬ"
            type="submit"
            handleClick={() => {}}
            className="w-full"
          />
        </div>
      </form>
    </>
  );
}
