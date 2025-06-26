export default function Button({ buttonGeneralClassName, buttonInput1, buttonInput2, onClick }) {

    let buttonInput;
    if (buttonInput1) {
        buttonInput = buttonInput1;
    } else if (buttonInput2) {
        buttonInput = buttonInput2;
    } else {
        buttonInput = "Change";
    }


    return (
        <button id="button_general" onClick={onClick} type="button" className={`bg-[var(--white)] text-[var(--black-500)] px-4 py-2 rounded transition duration-300 ${buttonGeneralClassName}`}>
            {buttonInput}
        </button>
    )
}