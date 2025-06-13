import logo from '../assets/img/cineLogo.svg';
import profile from '../assets/img/profile.jpg';

export default function Header() {

    return (
        <div className="bg-[var(--white-500)] text-[var(--black)] w-full px-6 py-2">
            <div className="flex flex-wrap justify-between items-center gap-y-2">
                <span className="flex-none order-1">
                    <img src={logo} alt="ciné logo" className="w-14 h-14" />
                </span>
                <span className="flex-none order-3 sm:order-2 w-full sm:w-auto">
                    <input
                        name="search"
                        type="text"
                        placeholder="Search"
                        className="w-full sm:w-64 md:w-96 h-10 px-4 border-1 border-solid border-[var(--black)] rounded-full focus:outline-none"
                    />
                </span>
                <span className="flex-none order-2 sm:order-3">
                    <img src={profile} alt="user image" className="w-12 h-12 border-1 border-solid rounded-full" />
                </span>
            </div>
        </div>
    )

}
