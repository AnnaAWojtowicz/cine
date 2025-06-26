export default function Button({ buttonGeneralClassName, buttonInput1, buttonInput2 }) {

    let buttonInput;
    if (buttonInput) {
        buttonInput = "Change";
    } else if (buttonInput1) {
        buttonInput = buttonInput1;
    } else if (buttonInput2) {
        buttonInput = buttonInput2;
    };


    return (
        <button id="button_general" className={`bg-[var(--white)] text-[var(--black-500)] px-4 py-2 rounded transition duration-300 ${buttonGeneralClassName}`}>
            {buttonInput}
        </button>
    )
}