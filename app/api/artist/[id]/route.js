import { connectToDatabase } from '@/utils/database/database';
import Artist from '@/utils/database/models/artist';

// GET

export const GET = async (request, { params }) => {
    try {
        await connectToDatabase();

        const artist = await Artist.findById(params.id);

        if (!artist) return new Response("Artist not found", { status: 404 });

        return new Response(JSON.stringify(artist), { status: 200 });
    } catch (error) {
        return new Response(`Failed to fetch artist ${error}`, { status: 500 });
    }
}

//PATCH

export const PATCH = async (request, { params }) => {
    const { firstName, lastName, dateOfBirth, biography, image, postedById } = await request.json();

    try {
        await connectToDatabase();

        const existingArtist = await Artist.findById(params.id);

        if (!existingArtist) return new Response("Artist not found", { status: 404 });

        existingArtist.firstName = firstName;
        existingArtist.lastName = lastName;
        existingArtist.dateOfBirth = dateOfBirth;
        existingArtist.biography = biography;
        existingArtist.image = image;
        existingArtist.postedBy = postedById;

        existingArtist.save();

        return new Response(JSON.stringify(existingArtist), { status: 200 });
    } catch (error) {
        return new Response(`Failed to update artist ${error}`, { status: 500 });
    }
}

// DELETE

export const DELETE = async (request, { params }) => {
    try {
        await connectToDatabase();

        await Artist.findByIdAndDelete(params.id);

        return new Response("Artist deleted successfully", { status: 200 });
    } catch (error) {
        return new Response(`Failed to delete artist ${error}`, { status: 500 });
    }
}
