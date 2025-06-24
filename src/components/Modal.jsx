
export default function Modal({ children, isOpen, onClose }) {


    return (
        <dialog className="" open>
            {children}
            <form method="dialog"><button>Close</button></form>
        </dialog>
    )
}