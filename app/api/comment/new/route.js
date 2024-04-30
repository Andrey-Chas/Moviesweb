import { connectToDatabase } from '@/utils/database/database';
import Comment from '@/utils/database/models/comment';

export const POST = async (req) => {

    const { comment, postedById } = await req.json();

    try {
        await connectToDatabase();

        const newComment = new Comment({
            comment,
            postedBy: postedById,
        })

        await newComment.save();

        return new Response(JSON.stringify(newComment), { status: 201 })
    } catch (error) {
        return new Response(`Failed to create a new comment ${error}`, { status: 500 })
    }
}