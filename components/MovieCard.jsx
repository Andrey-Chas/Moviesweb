import Image from "next/image";

import { useRouter } from "next/navigation";

const MovieCard = ({ movie }) => {
    const router = useRouter();

    const handleMovieClick = () => {
        router.push(`/display/display-movie/${movie._id}`);
    }

    return (
        <div onClick={handleMovieClick}>
            <div className="bg-gray-900 rounded-md overflow-hidden cursor-pointer">
                <div className="w-full overflow-hidden">
                    <Image
                        src={`data:image/png;base64,${Buffer.from(movie.imageMain).toString("base64")}`}
                        alt="Movie image"
                        width={0}
                        height={0}
                        className="h-full w-full object-cover object-top hover:scale-110 transition-all"
                    />
                </div>
                <div className="p-6">
                    <div className="mb-6 flex items-center flex-wrap gap-4">
                        <h3 className="text-lg font-bold text-gray-50">{movie.name}</h3>
                        <p className="text-xl text-gray-500 font-bold">{new Date(movie.yearOfRelease).getFullYear()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
