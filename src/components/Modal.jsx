
export default function Modal({ ref, children }) {


    return (
        <dialog ref={ref} className="modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-lg border-1 border-solid border-[var(--orange-web)]">
            {children} this is my modal
            <form method="dialog"><button>Close</button></form>
        </dialog>
    )
}