import { MdOutlineFileDownload } from "react-icons/md";
import { AiFillCloseSquare } from "react-icons/ai";
import { HiOutlineCamera } from "react-icons/hi";
import { LuLoader2 } from "react-icons/lu";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { RiCloseCircleFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const UIicons = {

    email({className}){
        return <MdEmail className={className} />
    },
    tel({className}){
        return <FaPhoneAlt className={className} />
    },
    error({className}){
        return <RiCloseCircleFill className={className} />
    },
    ok({className}){
        return <RiCheckboxCircleFill className={className} />
    },
    loader({className}){
        return <LuLoader2 className={className}/>
    },
    fileDownloading({className}){
        return <MdOutlineFileDownload className={className}/>
    },
    closeModal({className}){
        return <AiFillCloseSquare className={className}/>
    },
    qrCamera({className}){
        return <HiOutlineCamera className={className}/>
    }
} 