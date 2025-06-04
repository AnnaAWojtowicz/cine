import logo from '../assets/img/cineLogo.svg';

export default function Header() {
    return (
        <>
            <img src={logo} alt="ciné logo" className="w-16 h-16 absolute top-4 left-4" />
        </>
    )
}
