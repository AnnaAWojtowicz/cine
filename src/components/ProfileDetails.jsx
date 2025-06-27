

export default function ProfileDetails({ caption, info, buttonGeneralClassName, onChangeClick }) {


    return (
        <div>
            <div className="font-semibold">{caption}</div>
            <div className="flex justify-between items-center pl-4">
                <span>{info}</span>
                <button onClick={() => onChangeClick(caption, info)} id="button_general" className={`bg-[var(--white)] text-[var(--black-500)] px-4 py-2 rounded transition duration-300 ${buttonGeneralClassName}`}>
                    Change
                </button>
            </div>
        </div>
    )
}