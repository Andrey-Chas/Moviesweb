import { connectToDatabase } from '@/utils/database/database';
import Director from '@/utils/database/models/director';

export const POST = async (req) => {

    const { firstName, lastName, dateOfBirth, imageToBuffer, biography, postedById } = await req.json();

    try {
        await connectToDatabase();

        const bufferImage = Buffer.from(imageToBuffer, "base64")

        const newDirector = new Director({
            firstName,
            lastName,
            dateOfBirth,
            biography,
            image: { data: bufferImage },
            postedBy: postedById,
        })

        await newDirector.save();

        return new Response(JSON.stringify(newDirector), { status: 201 })
    } catch (error) {
        return new Response(`Failed to create a new director ${error}`, { status: 500 })
    }
}