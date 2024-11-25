import { MdOutlineFileDownload } from "react-icons/md";
import { AiFillCloseSquare } from "react-icons/ai";
import { HiOutlineCamera } from "react-icons/hi";

export const UIicons = {
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