import { connectToDatabase } from '@/utils/database/database';
import Movie from '@/utils/database/models/movie';

export const GET = async (request) => {
    try {
        await connectToDatabase();

        const movies = await Movie.find({}).populate("artist").populate("director").populate("postedBy").populate({ path: "comment", populate: { path: "postedBy" } });

        return new Response(JSON.stringify(movies), { status: 200 })
    } catch (error) {
        return new Response(`Failed to fetch all movies ${error}`, { status: 500 })
    }
}