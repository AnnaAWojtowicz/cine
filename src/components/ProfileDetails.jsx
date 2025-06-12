import Button from "./Button.jsx";

export default function ProfileDetails({ caption, info }) {
    return (
        <div>
            <div className="font-semibold">{caption}</div>
            <div className="flex justify-between items-center pl-4">
                <span>{info}</span>
                <Button />
            </div>
        </div>
    )
}