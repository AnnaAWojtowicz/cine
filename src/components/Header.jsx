import logo from '../assets/img/cineLogo.svg';
import filmMain from '../assets/img/filmMain.jpg';

export default function Header() {
    return (
        <div className="bg-[var(--white)] text-[var(--black)] w-full h-20 px-6">
            <div className="flex justify-between">
                <span className="flex-none">
                    <img src={logo} alt="ciné logo" className="w-16 h-16" /></span>
                <span className="flex-initial">
                    <input name="search" type="text" placeholder="Search" className="w-96 h-10 px-4 border-1 border-solid border-[var(--black)] rounded-full focus:outline-none focus:border-[var(--primary)]" />
                </span>
                <span className="flex-none"><img src={filmMain} alt="user image" className="w-16 h-16 border-1 border-solid rounded-full" /></span>
            </div>
        </div>
    )
}
