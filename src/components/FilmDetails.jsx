import FilmSection from "./FilmSection";
import FilmButton from "./FilmButton";

export default function FilmDetails({ sectionRoundFilmDetails, sectionSquareFilmDetails, backgroundImage }) {

    return (

        <div className={`text-[var(--black)] ${sectionRoundFilmDetails} ${sectionSquareFilmDetails}`}
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div className="p-4 pl-24 w-full text-right">
                <div className="text-xl font-bold truncate">TitleTitleTitle</div>
                <div className="mt-2">Director</div>
                <div className="mt-2 ">
                    Country Year
                </div>
                <div className="mt-2">Time</div>
                <div className="mt-4 flex justify-end space-x-8">
                    <FilmButton>play_arrow</FilmButton>
                    <FilmButton>add</FilmButton>
                    <FilmButton>more_horiz</FilmButton>
                </div>
            </div>
        </div>

    )
}