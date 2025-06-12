import profile from '../assets/img/profile.jpg';
import ProfileDetails from './ProfileDetails.jsx';
import Button from './Button.jsx';

export default function Profile() {

    const d = new Date();
    let year = d.getFullYear();

    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className="flex flex-col justify-start w-1/3 min-h-[100px] bg-[var(--platinum-500)] text-[var(--black)] border-1 border-solid rounded-t-full border-[var(--orange-web)] space-y-8 p-8">
                <div className="flex justify-center">
                    <img src={profile} alt="user image" className="w-40 h-40 border-1 border-solid border-[var(--orange-web)] rounded-full" />
                </div>
                <div className="mt-8">
                    <ProfileDetails caption={"Username:"} info={"Lola"} />
                    <ProfileDetails caption={"Password:"} info={"LolaIsCool!123"} />
                    <ProfileDetails caption={"Email:"} info={"lola@gmail.com<"} />
                    <ProfileDetails caption={"Your subscription:"} info={"Standard"} />
                    <ProfileDetails caption={"Next payment:"} info={`31.12.${year}`} />
                </div>

            </div>
        </div>
    )
}