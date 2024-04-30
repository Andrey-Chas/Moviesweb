'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

import DisplayMovie from "@/components/DisplayMovie";

const ViewMovie = () => {
    const { data: session } = useSession();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/movie");
            const data = await response.json();

            setData(data);
        };

        fetchData()
    }, [])

    return (
        <DisplayMovie
            data={data}
            session={session}
        />
    )
}

export default ViewMovie
