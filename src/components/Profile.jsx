import profile from '../assets/img/profile.jpg';
import Button from './Button.jsx';

export default function Profile() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col justify-center w-1/3 h-100 bg-[var(--platinum-500)] text-[var(--black)]">
                <div className="flex justify-center">
                    <img src={profile} alt="user image" className="w-40 h-40 border-1 border-solid border-[var(--orange-web)] rounded-full" />
                </div>
                <div className="flex justify-center ml-4">
                    <span>Username:</span>
                    <span>Lola</span>
                </div>
                <div className="flex justify-center ml-4">
                    <span>Password:</span>
                    <span>LolaIsCool!123</span>
                </div>
                <Button />
            </div>
        </div>
    )
}