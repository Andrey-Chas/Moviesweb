import { connectToDatabase } from '@/utils/database/database';
import Artist from '@/utils/database/models/artist';

export const GET = async (request) => {
    try {
        await connectToDatabase();

        const artists = await Artist.find({}).populate("postedBy");

        return new Response(JSON.stringify(artists), { status: 200 })
    } catch (error) {
        return new Response(`Failed to fetch all artists ${error}`, { status: 500 })
    }
}