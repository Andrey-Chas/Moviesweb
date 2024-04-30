'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

import FormMovie from '@/components/FormMovie';

const CreateMovie = () => {
    const { data: session } = useSession();
    const [dataArtist, setDataArtist] = useState([]);
    const [dataDirector, setDataDirector] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [image, setImage] = useState([]);
    const [imageMain, setImageMain] = useState(null);
    const [base64, setBase64] = useState([]);
    const [movie, setMovie] = useState({
        name: '',
        yearOfRelease: '',
        genre: '',
        artist: [],
        director: [],
        description: '',
    });

    const toBase64Converter = (image) => {
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

    const toBase64 = async (images) => {
        const data = [];

        for (const value of Object.values(images)) {
            const base64 = await toBase64Converter(value);
            const base64ToConvert = await base64.replace("data:image/png;base64,", "");
            data.push(base64ToConvert);
        }

        return data;
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/artist");
            const data = await response.json();

            setDataArtist(data);
        };

        fetchData();
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/director");
            const data = await response.json();

            setDataDirector(data);
        };

        fetchData();
    }, [])

    const createMovie = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        if (!image || !imageMain) {
            console.log("Image not found");
            return;
        }

        const base64 = await toBase64(image);

        const base64MainImage = await toBase64Converter(imageMain);

        const base64MainImageToConvert = await base64MainImage.replace("data:image/png;base64,", "");

        try {
            const response = await fetch('/api/movie/new', {
                method: 'POST',
                body: JSON.stringify({
                    name: movie.name.trim(),
                    yearOfRelease: movie.yearOfRelease.trim(),
                    genre: movie.genre.trim(),
                    artistId: movie.artist,
                    directorId: movie.director,
                    description: movie.description,
                    imageMainToBuffer: base64MainImageToConvert,
                    imagesToBuffer: base64,
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

    const handleChangeArtist = (e) => {
        {!movie.artist.includes(e.target.value) && movie.artist.push(e.target.value)};
    }

    const handleChangeDirector = (e) => {
        {!movie.director.includes(e.target.value) && movie.director.push(e.target.value)};
    }

    return (
        session?.user ? (
            <FormMovie
                type="Create"
                movie={movie}
                dataArtist={dataArtist}
                dataDirector={dataDirector}
                setMovie={setMovie}
                setImageMain={setImageMain}
                setImage={setImage}
                submitting={submitting}
                handleSubmit={createMovie}
                handleChangeArtist={handleChangeArtist}
                handleChangeDirector={handleChangeDirector}
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

export default CreateMovie
