import Button from "./Button.jsx"


export default function Modal({ isOpen, caption, info, onClose }) {

    if (!isOpen) return null;

    return (
        <div className="modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-lg border-1 border-solid border-[var(--orange-web)] z-50">
            <h2 className="text-xl font-semibold mb-4">Change your {caption}</h2>
            <p>Your old {caption} {info}</p>
            <div className="flex justify-between items-center mt-4 gap-4">
                <Button buttonInput2="Confirm" />
                <Button buttonInput1="Dismiss" onClick={onClose} />
            </div>
        </div>
    )
}