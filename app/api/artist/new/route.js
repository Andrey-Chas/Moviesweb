import { connectToDatabase } from '@/utils/database/database';
import Artist from '@/utils/database/models/artist';

export const POST = async (req) => {

    const { firstName, lastName, dateOfBirth, imageToBuffer, biography, postedById } = await req.json();

    try {
        await connectToDatabase();

        const bufferImage = Buffer.from(imageToBuffer, "base64");

        const newArtist = new Artist({
            firstName,
            lastName,
            dateOfBirth,
            biography,
            image: { data: bufferImage },
            postedBy: postedById,
        })

        await newArtist.save();

        return new Response(JSON.stringify(newArtist), { status: 201 })
    } catch (error) {
        return new Response(`Failed to create a new artist ${error}`, { status: 500 })
    }
}