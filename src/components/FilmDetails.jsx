import FilmSection from "./FilmSection";
import FilmButton from "./FilmButton";

export default function FilmDetails({ sectionRoundFilmDetails, sectionSquareFilmDetails }) {

    let mainRoundFilmDetails = "absolute w-75 sm:w-2/3 md:w-2/5 lg:w-1/4 bottom-10 right-10 border-1 border-solid rounded-l-full z-50 border-[var(--white)]";

    return (
        <>
            <div className={`text-[var(--white)] ${mainRoundFilmDetails} ${sectionRoundFilmDetails} ${sectionSquareFilmDetails}`}>
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
        </>
    )
}