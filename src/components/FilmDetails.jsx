export default function FilmDetails() {

    let mainRoundFilmDetails = "absolute w-75 sm:w-2/3 md:w-2/5 lg:w-1/3 bottom-10 right-10 border-1 border-solid rounded-l-full z-50 border-[var(--white)]";
    let sectionRoundFilmDetails = "border-1 border-solid rounded-l-full text-[var(--white)] border-[var(--white)]";
    let sectionSquareFilmDetails = "border-1 border-solid text-[var(--white)] border-[var(--white)]";

    return (
        <div className="absolute w-75 sm:w-2/3 md:w-2/5 lg:w-1/3 bottom-10 right-10 border-1 border-solid rounded-l-full z-50 text-[var(--white)] border-[var(--white)]">
            <div className="p-4 pl-24 w-full text-right">
                <div className="text-xl font-bold truncate">TitleTitleTitleTitleTitleTitleTitle</div>
                <div className="mt-2">Director</div>
                <div className="mt-2 ">
                    Country Year
                </div>
                <div className="mt-2">Time</div>
                <div className="mt-4 flex justify-end space-x-8">
                    <span className="material-symbols-outlined cursor-pointer border-1 border-solid rounded-full border-[var(--white)]">play_arrow</span>
                    <span className="material-symbols-outlined cursor-pointer border-1 border-solid rounded-full border-[var(--white)]">add</span>
                    <span className="material-symbols-outlined cursor-pointer border-1 border-solid rounded-full border-[var(--white)]">more_horiz</span>
                </div>
            </div>
        </div>
    )
}