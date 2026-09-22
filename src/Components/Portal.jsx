import { createPortal } from "react-dom"

const Portal=({flag,children})=>{
    return flag && createPortal(
        <div className="fixed z-50 pt-12 w-full h-dvh backdrop-blur-3xl">
            {children}
        </div>,
        document.getElementById("portal")
    )
}


export default Portal;