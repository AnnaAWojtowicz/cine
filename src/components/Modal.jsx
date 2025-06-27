import Button from "./Button.jsx"


export default function Modal({ isOpen, caption, info, onClose }) {

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-black/30"
                    onClick={onClose}
                />
                <div className="modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-lg border-1 border-solid border-[var(--orange-web)] z-50">
                    <h2 className="text-xl font-semibold mb-4">Change your {caption}</h2>
                    <p>Your old {caption}: <strong> {info}</strong></p>
                    <label>Your new {caption}</label>
                    <input className="border-1 border-solid border-[var(--platinum-100)] ml-4 focus:border-[var(--orange-web)] focus:bg-[var(--platinum-700)] focus:outline-none"></input>
                    <div className="flex justify-between items-center mt-4 gap-4">
                        <Button buttonInput2="Confirm" />
                        <Button buttonInput1="Dismiss" onClick={onClose} />
                    </div>
                </div>
            </div>
        </>
    )
}