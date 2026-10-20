import { createPortal } from "react-dom"

const Portal=({flag,children,info=false})=>{
    return flag && createPortal(
        <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 px-2 py-6 backdrop-blur-md sm:px-4 sm:py-8`}>
            {children}
        </div>,
        document.getElementById("portal")
    )
}


export default Portal;