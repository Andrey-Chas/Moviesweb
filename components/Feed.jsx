'use client'

import { useState, useEffect } from 'react';

import MovieCard from './MovieCard';

const MovieCardDisplay = ({ data }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((movie) => (
                <MovieCard
                    key={movie._id}
                    movie={movie}
                />
            ))}
        </div>
    )
}

const Feed = () => {
    const [searchText, setSearchText] = useState("");
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchedResults, setSearchedResults] = useState([]);
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const response = await fetch("/api/movie");
        const data = await response.json();

        setMovies(data);
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const filterMovies = (searchText) => {
        const regex = new RegExp(searchText, "i");
        return movies.filter((movie) => regex.test(movie.name) || regex.test(movie.yearOfRelease));
    }

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout);
        setSearchText(e.target.value);

        setSearchTimeout(
            setTimeout(() => {
                const searchedResult = filterMovies(e.target.value);
                setSearchedResults(searchedResult);
            }, 500)
        );
    };

    return (
        <>
            <div className="font-[sans-serif]">
                <form className="max-w-md mx-auto">
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div>
                        <input
                            type="text"
                            placeholder="Search for movie name or year of release..."
                            value={searchText}
                            onChange={handleSearchChange}
                            required
                            className="block w-full mt-5 p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                </form>
                <div className="p-4 mx-auto lg:max-w-6xl sm:max-w-full">
                    <h2 className="text-4xl font-extrabold bg-gradient-to-r from-amber-500 to-orange-700 bg-clip-text text-transparent mb-12">Movies</h2>

                    {searchText ? (
                        <MovieCardDisplay
                            data={searchedResults}
                        />
                    ) : (
                        <MovieCardDisplay
                            data={movies}
                        />
                    )}
                </div>
            </div>
        </>
    )
}

export default Feed
