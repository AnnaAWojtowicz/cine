import Button from "./Button.jsx"


export default function Modal({ ref, children }) {


    return (
        <dialog ref={ref} className="modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-lg border-1 border-solid border-[var(--orange-web)]">
            {children} this is my modal
            <div className="flex justify-between items-center mt-4 gap-4">
                <form method="dialog"><Button buttonInput2="Confirm" /></form>
                <form method="dialog"><Button buttonInput1="Dismiss" /></form>
            </div>
        </dialog>
    )
}