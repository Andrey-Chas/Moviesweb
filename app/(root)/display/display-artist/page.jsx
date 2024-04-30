'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

import DisplayArtist from "@/components/DisplayArtist";

const ViewArtist = () => {
    const { data: session } = useSession();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/artist");
            const data = await response.json();

            setData(data);
        };

        fetchData()
    }, [])

    return (
        <DisplayArtist
            data={data}
            session={session}
        />
    )
}

export default ViewArtist
