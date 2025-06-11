import FilmDetails from "./FilmDetails.jsx";
import mainFilm from "../assets/img/filmMain.jpg";

export default function FilmSection() {

    let sectionRoundFilmDetails = "h-50 w-72 flex-shrink-0 border-1 border-solid rounded-l-full text-[var(--white)] border-[var(--black)] z-0 mr-4 inline-block bg-cover bg-center bg-no-repeat relative overflow-hidden";
    let sectionSquareFilmDetails = "h-50 w-72 flex-shrink-0 border-1 border-solid text-[var(--white)] border-[var(--black)] z-0 mr-4 inline-block bg-cover bg-center bg-no-repeat relative overflow-hidden";


    return (
        <div className="w-full p-4">
            <div className="text-xl font-bold mb-4">Section Title</div>
            <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
                <FilmDetails sectionRoundFilmDetails={sectionRoundFilmDetails} backgroundImage={mainFilm} />
                <FilmDetails sectionSquareFilmDetails={sectionSquareFilmDetails} backgroundImage={mainFilm} />
                <FilmDetails sectionSquareFilmDetails={sectionSquareFilmDetails} backgroundImage={mainFilm} />
                <FilmDetails sectionSquareFilmDetails={sectionSquareFilmDetails} backgroundImage={mainFilm} />
                <FilmDetails sectionSquareFilmDetails={sectionSquareFilmDetails} backgroundImage={mainFilm} />
                <FilmDetails sectionSquareFilmDetails={sectionSquareFilmDetails} backgroundImage={mainFilm} />
            </div>
        </div>
    )
}