import logo from '../assets/img/cineLogo.svg';
import profile from '../assets/img/profile.jpg';

export default function Header() {
    return (
        <div className="bg-[var(--white-500)] text-[var(--black)] w-full h-16 px-6">
            <div className="flex justify-between items-center mt-2">
                <span className="flex-none">
                    <img src={logo} alt="ciné logo" className="w-14 h-14" /></span>
                <span className="flex-initial">
                    <input name="search" type="text" placeholder="Search" className="w-40 sm:w-64 md:w-96 h-10 px-4 border-1 border-solid border-[var(--black)] rounded-full focus:outline-none focus:border-[var(--primary)]" />
                </span>
                <span className="flex-none"><img src={profile} alt="user image" className="w-12 h-12 border-1 border-solid rounded-full" /></span>
            </div>
        </div>
    )
}
