import { connectToDatabase } from '@/utils/database/database';
import Movie from '@/utils/database/models/movie';

export const POST = async (req) => {
    const { _id, commentId } = await req.json();

    try {
        await connectToDatabase();

        const movie = await Movie.findById(_id);

        if (!movie) return new Response("Movie not found", { status: 404 });

        movie.comment.push(commentId);

        movie.save();

        return new Response(JSON.stringify(movie), { status: 201 });
    } catch (error) {
        return new Response(`Failed to add a movie`, { status: 500 });
    }
}