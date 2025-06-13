export default function Button({ buttonGeneralClassName }) {
    return (
        <button id="button_general" className={`bg-[var(--white)] text-[var(--black-500)] px-4 py-2 rounded transition duration-300 ${buttonGeneralClassName}`}>
            Change
        </button>
    )
}