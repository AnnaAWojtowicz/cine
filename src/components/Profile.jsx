import profile from '../assets/img/profile.jpg';
import Button from './Button.jsx';

export default function Profile() {

    const d = new Date();
    let year = d.getFullYear();

    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className="flex flex-col justify-center w-1/3 h-100 bg-[var(--platinum-500)] text-[var(--black)] border-1 border-solid rounded-t-full border-[var(--orange-web)]">
                <div className="flex justify-center">
                    <img src={profile} alt="user image" className="w-40 h-40 border-1 border-solid border-[var(--orange-web)] rounded-full" />
                </div>
                <div className="mt-8">
                    <div className="flex justify-center items-center ">
                        <span>Username:</span>
                        <span>Lola</span>
                        <Button />
                    </div>
                    <div className="flex justify-center items-center ">
                        <span>Password:</span>
                        <span>LolaIsCool!123</span>
                        <Button />
                    </div>
                    <div className="flex justify-center items-center ">
                        <span>Email:</span>
                        <span>lola@gmail.com</span>
                        <Button />
                    </div>
                    <div className="flex justify-center items-center ">
                        <span>Your subscription:</span>
                        <span>Standard</span>
                        <Button />
                    </div>
                    <div className="flex justify-center items-center ">
                        <span>Next payment:</span>
                        <span>31.12.{year}</span>
                        <Button />
                    </div>
                </div>

            </div>
        </div>
    )
}