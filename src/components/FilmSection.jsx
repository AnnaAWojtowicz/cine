import FilmDetails from "./filmDetails.jsx";
import mainFilm from "../assets/img/filmMain.jpg";

export default function FilmSection() {

    let sectionRoundFilmDetails = "border-1 border-solid rounded-l-full text-[var(--white)] border-[var(--white)]";
    let sectionSquareFilmDetails = "border-1 border-solid text-[var(--white)] border-[var(--white)]";


    return (
        <div>
            <div>Section Title</div>
            <div>
                <FilmDetails className={sectionRoundFilmDetails} />
                <FilmDetails className={sectionSquareFilmDetails} />
                <FilmDetails className={sectionSquareFilmDetails} />
            </div>
        </div>
    )
}