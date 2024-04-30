import { connectToDatabase } from '@/utils/database/database';
import Comment from '@/utils/database/models/comment';

export const GET = async (request) => {
    try {
        await connectToDatabase();

        const comments = await Comment.find({}).populate("postedBy");

        return new Response(JSON.stringify(comments), { status: 200 })
    } catch (error) {
        return new Response(`Failed to fetch all comments ${error}`, { status: 500 })
    }
}