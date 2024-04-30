import { connectToDatabase } from '@/utils/database/database';
import Comment from '@/utils/database/models/comment';

// GET

export const GET = async (request, { params }) => {
    try {
        await connectToDatabase();

        const comment = await Comment.findById(params.id);

        if (!comment) return new Response("Comment not found", { status: 404 });

        return new Response(JSON.stringify(comment), { status: 200 });
    } catch (error) {
        return new Response(`Failed to fetch comment ${error}`, { status: 500 });
    }
}

//PATCH

export const PATCH = async (request, { params }) => {
    const { comment, postedById } = await request.json();

    try {
        await connectToDatabase();

        const existingComment = await Comment.findById(params.id);

        if (!existingComment) return new Response("Comment not found", { status: 404 });

        existingComment.comment = comment;
        existingComment.postedBy = postedById;

        existingComment.save();

        return new Response(JSON.stringify(existingComment), { status: 200 });
    } catch (error) {
        return new Response(`Failed to update comment ${error}`, { status: 500 });
    }
}

// DELETE

export const DELETE = async (request, { params }) => {
    try {
        await connectToDatabase();

        await Comment.findByIdAndDelete(params.id);

        return new Response("Comment deleted successfully", { status: 200 });
    } catch (error) {
        return new Response(`Failed to delete comment ${error}`, { status: 500 });
    }
}
