import { connectToDatabase } from '@/utils/database/database';
import Director from '@/utils/database/models/director';

export const GET = async (request) => {
    try {
        await connectToDatabase();

        const directors = await Director.find({}).populate("postedBy");

        return new Response(JSON.stringify(directors), { status: 200 })
    } catch (error) {
        return new Response(`Failed to fetch all directors ${error}`, { status: 500 })
    }
}