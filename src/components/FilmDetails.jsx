export default function FilmDetails() {
    return (
        <div className="fixed top-10 right-10 w-1/3 border-1 border-solid rounded-l-full z-50 text-[var(--white)] border-white">
            <div className="p-4 pl-24 text-right">
                <div className="text-xl font-bold">Title</div>
                <div className="mt-2">Director</div>
                <div className="mt-2 flex justify-between">
                    <span>Country</span>
                    <span>Year</span>
                </div>
                <div className="mt-2">Time</div>
                <div className="mt-4 flex justify-between">
                    <span>play</span>
                    <span>add to fav symbol/toggle</span>
                    <span>more</span>
                </div>
            </div>
        </div>
    )
}