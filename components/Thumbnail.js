import { ChartSquareBarIcon, DocumentTextIcon, ThumbUpIcon, CalendarIcon, FolderIcon, FlagIcon, TrendingUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";

// this forwardref is used to get reference in the parent components
const Thumbnail = forwardRef(({ result }, ref) => {

    const BASE_URL = "https://image.tmdb.org/t/p/original";

    return (
        // get animation mark here to type ref
        <div ref={ref} className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 ">
            <Image
                layout="responsive"
                src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`}
                height={1080}
                width={1920}
            />

            <div className="pr-2">
                <p className="truncate max-w-md">
                    {result.overview}
                </p>
                <h2 className="text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                    {result.title || result.original_name}
                </h2>
                <p className="flex justify-start items-center opacity-0 group-hover:opacity-100 group-hover:mb-3 justify-evenly">
                    <span className="flex items-center m-0 p-0"><FolderIcon className="h-5 mr-1" /> {result.media_type && `${result.media_type}` || `movie`}{"  "}</span>
                    <span className="flex items-center"><CalendarIcon className="h-5 mx-2" /> {result.release_date && `${result.release_date}` || result.first_air_date && `${result.first_air_date}`}{"  "}</span>
                    <span className="flex items-center"><ThumbUpIcon className="h-5 mx-2" /> {`${result.vote_count}`}{"  "}</span>
                    <span className="flex items-center"><DocumentTextIcon className="h-5 mx-2" /> {result.original_language && `${result.original_language}`}{"  "}</span>
                    <span className="flex md:hidden lg:flex items-center"><ChartSquareBarIcon className="h-5 mx-2" /> {result.popularity && `${result.popularity}`}{" "}</span>
                </p>
            </div>
        </div>
    );
});

Thumbnail.displayName = 'Thumbnail';

export default Thumbnail
