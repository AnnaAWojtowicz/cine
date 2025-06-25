
export default function Modal({ ref, children }) {


    return (
        <dialog ref={ref} className="">
            {children} this is my modal
            <form method="dialog"><button>Close</button></form>
        </dialog>
    )
}