import { ConfigServices } from "@/services/config";
import UIbuttonSender from "../ui/button_sender";
import { UIicons } from "../ui/icons";
import FullModal from "../ui/modal-full";
import { promises as fs } from "fs";
import { Input } from "postcss";
import FormBody from "../ui/form_body";
import axios from "axios";

// async function handleSubmit(formData) {
//   "use server";

//   console.log(formData);

//   // const [API_URL] = ConfigServices.getENV();

//   // const name = formData.get("name");
//   // const phone = formData.get("phone");
//   // const comment = formData.get("comment");
//   // const file = formData.get("files");
//   // const fileName = file.name;
//   // const linkFileName = `${API_URL}${PATH_URL}/files/${fileName}`;

//   // const buffer = await file.arrayBuffer();
//   // const fileBuffer = Buffer.from(buffer);
//   // console.log(fileName);
//   // // await fs.writeFile(`${PATH_URL}/files/${fileName}`, fileBuffer);
//   // await fs.writeFile(`${PATH_URL}/files/${fileName}`, fileBuffer);
// }

export default function Modal({ stateModal, changeModal }) {
  async function handleSubmit(formData) {
    "use server";
    const DTOtransfer = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      comment: formData.get("comment") || "Без комментария",
    };

    try {
      const res = await axios.post("/api/telegram", DTOtransfer);
      if (res.status === 200) {
        alert("Заявка успешно отправлена!");
      } else {
        alert("Заявка не отправлена!");
      }
    } catch (error) {
      return "error";
    }
  }

  async function action(formData) {
    const res = handleSubmit(formData);
    alert(res);
  }

  return (
    <FullModal
      title="Получить КП"
      body={
        <form action={action}>
          <div className="px-6 pb-5">
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
              <UIicons.fileDownloading className="w-5 h-5 text-[#D9D9D9]" />
            </label>

            <input id="formFile" type="file" name="files" className="hidden" />
          </div>

          <div className="border-t border-dashed border-[#6d6d6d] box-border mx-auto p-6">
            <UIbuttonSender
              title="ОТПРАВИТЬ"
              type="submit"
              handleClick={() => {}}
              className="w-full"
            />
          </div>
        </form>
      }
      stateModal={stateModal}
      changeModal={changeModal}
    />
  );
}
