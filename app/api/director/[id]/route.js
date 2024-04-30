import { connectToDatabase } from '@/utils/database/database';
import Director from '@/utils/database/models/director';

// GET

export const GET = async (request, { params }) => {
    try {
        await connectToDatabase();

        const director = await Director.findById(params.id);

        if (!director) return new Response("Director not found", { status: 404 });

        return new Response(JSON.stringify(director), { status: 200 });
    } catch (error) {
        return new Response(`Failed to fetch director ${error}`, { status: 500 });
    }
}

//PATCH

export const PATCH = async (request, { params }) => {
    const { firstName, lastName, dateOfBirth, biography, image, postedById } = await request.json();

    try {
        await connectToDatabase();

        const existingDirector = await Director.findById(params.id);

        if (!existingDirector) return new Response("Director not found", { status: 404 });

        existingDirector.firstName = firstName;
        existingDirector.lastName = lastName;
        existingDirector.dateOfBirth = dateOfBirth;
        existingDirector.biography = biography;
        existingDirector.image = image;
        existingDirector.postedBy = postedById;

        existingDirector.save();

        return new Response(JSON.stringify(existingDirector), { status: 200 });
    } catch (error) {
        return new Response(`Failed to update director ${error}`, { status: 500 });
    }
}

// DELETE

export const DELETE = async (request, { params }) => {
    try {
        await connectToDatabase();

        await Director.findByIdAndDelete(params.id);

        return new Response("Director deleted successfully", { status: 200 });
    } catch (error) {
        return new Response(`Failed to delete director ${error}`, { status: 500 });
    }
}
