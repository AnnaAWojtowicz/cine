export default function FilmDetails() {
    return (
        <div className="fixed w-1/3 top-10 right-10 border-1 border-solid rounded-l-full z-50 text-[var(--white)] border-[var(--white)]">
            <div className="p-4 pl-24 w-full text-right">
                <div className="text-xl font-bold truncate">TitleTitleTitleTitleTitleTitleTitle</div>
                <div className="mt-2">Director</div>
                <div className="mt-2 ">
                    Country Year
                </div>
                <div className="mt-2">Time</div>
                <div className="mt-4 flex justify-between">
                    <span className="material-symbols-outlined cursor-pointer border-1 border-solid rounded-full border-[var(--white)]">play_arrow</span>
                    <span className="material-symbols-outlined cursor-pointer border-1 border-solid rounded-full border-[var(--white)]">add</span>
                    <span className="material-symbols-outlined cursor-pointer border-1 border-solid rounded-full border-[var(--white)]">more_horiz</span>
                </div>
            </div>
        </div>
    )
}