import { connectToDatabase } from '@/utils/database/database';
import Movie from '@/utils/database/models/movie';

// GET

export const GET = async (request, { params }) => {
    try {
        await connectToDatabase();

        const movie = await Movie.findById(params.id).populate("artist").populate("director").populate("postedBy").populate({ path: "comment", populate: { path: "postedBy" } });

        if (!movie) return new Response("Movie not found", { status: 404 });

        return new Response(JSON.stringify(movie), { status: 200 });
    } catch (error) {
        return new Response(`Failed to fetch movie ${error}`, { status: 500 });
    }
}

//PATCH

export const PATCH = async (request, { params }) => {
    const { name, yearOfRelease, genre, artistId, directorId, description, image, postedById } = await request.json();

    try {
        await connectToDatabase();

        const existingMovie = await Movie.findById(params.id);

        if (!existingMovie) return new Response("Movie not found", { status: 404 });

        existingMovie.name = name;
        existingMovie.yearOfRelease = yearOfRelease;
        existingMovie.genre = genre;
        existingMovie.artist = artistId;
        existingMovie.director = directorId;
        existingMovie.description = description;
        existingMovie.image = image;
        existingMovie.postedBy = postedById;

        existingMovie.save();

        return new Response(JSON.stringify(existingMovie), { status: 200 });
    } catch (error) {
        return new Response(`Failed to update movie ${error}`, { status: 500 });
    }
}

// DELETE

export const DELETE = async (request, { params }) => {
    try {
        await connectToDatabase();

        await Movie.findByIdAndDelete(params.id);

        return new Response("Movie deleted successfully", { status: 200 });
    } catch (error) {
        return new Response(`Failed to delete movie ${error}`, { status: 500 });
    }
}
