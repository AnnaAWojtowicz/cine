import FilmDetails from "./FilmDetails.jsx";
import mainFilm from "../assets/img/filmMain.jpg";

export default function FilmSection() {

    let sectionRoundFilmDetails = "sm:w-2/3 md:w-2/5 lg:w-1/4 border-1 border-solid rounded-l-full text-[var(--white)] border-[var(--black)] z-0 mr-4 inline-block";
    let sectionSquareFilmDetails = "sm:w-2/3 md:w-2/5 lg:w-1/4 border-1 border-solid text-[var(--white)] border-[var(--black)] z-0 mr-4 inline-block";


    return (
        <div className="w-full p-4">
            <div>Section Title</div>
            <div>
                <FilmDetails sectionRoundFilmDetails={sectionRoundFilmDetails} />
                <FilmDetails sectionSquareFilmDetails={sectionSquareFilmDetails} />
                <FilmDetails sectionSquareFilmDetails={sectionSquareFilmDetails} />
            </div>
        </div>
    )
}