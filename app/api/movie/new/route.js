import { connectToDatabase } from '@/utils/database/database';
import Movie from '@/utils/database/models/movie';

export const POST = async (req) => {

    const { name, yearOfRelease, genre, artistId, directorId, description, imageMainToBuffer, imagesToBuffer, postedById } = await req.json();

    try {
        await connectToDatabase();

        const bufferImageMain = Buffer.from(imageMainToBuffer, "base64");

        const bufferImages = [];

        await imagesToBuffer.map((imageToBuffer) => (
            bufferImages.push(Buffer.from(imageToBuffer, "base64"))
        ))

        const newMovie = new Movie({
            name,
            yearOfRelease,
            genre,
            artist: artistId,
            director: directorId,
            description,
            imageMain: bufferImageMain,
            image: bufferImages,
            postedBy: postedById,
        })

        await newMovie.save();

        return new Response(JSON.stringify(newMovie), { status: 201 })
    } catch (error) {
        return new Response(`Failed to create a new movie ${error}`, { status: 500 })
    }
}