'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';

import FormArtist from '@/components/FormArtist';

const CreateArtist = () => {
    const { data: session } = useSession();
    const [submitting, setSubmitting] = useState(false);
    const [image, setImage] = useState(null);
    const [artist, setArtist] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        biography: '',
    });

    const toBase64 = (image) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.readAsDataURL(image);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const createArtist = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        if (!image) {
            console.log("Image not found");
            return;
        }

        const base64 = await toBase64(image);

        const base64ToConvert = await base64.replace("data:image/png;base64,", "");

        try {
            const response = await fetch('/api/artist/new', {
                method: 'POST',
                body: JSON.stringify({
                    firstName: artist.firstName.trim(),
                    lastName: artist.lastName.trim(),
                    dateOfBirth: artist.dateOfBirth,
                    imageToBuffer: base64ToConvert,
                    biography: artist.biography.trim(),
                    postedById: session?.user?.id,
                })
            })

            if (response.ok) {
                console.log("Successfully added to the database");
                const form = e.target;
                form.reset();
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        session?.user ? (
            <FormArtist
                type="Create"
                artist={artist}
                setArtist={setArtist}
                setImage={setImage}
                submitting={submitting}
                handleSubmit={createArtist}
            />
        ) : (
            <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0">
                <div className="min-h-[300px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
                    <h2 className="sm:text-4xl text-2xl font-bold mb-6 text-red-700">Access Denied</h2>
                    <p className="text-lg text-center text-gray-200">You have to be logged in</p>
                </div>
            </div>
        )
    )
}

export default CreateArtist
