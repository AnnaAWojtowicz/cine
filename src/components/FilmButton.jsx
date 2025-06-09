export default function FilmButton({ children, onClick }) {
    return (
        <span
            className="material-symbols-outlined cursor-pointer border-1 border-solid rounded-full" id="button_film_details"
            onClick={onClick}
        >
            {children}
        </span>
    );
}