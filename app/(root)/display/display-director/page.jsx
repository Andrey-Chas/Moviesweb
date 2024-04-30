'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

import DisplayDirector from "@/components/DisplayDirector";

const ViewDirector = () => {
    const { data: session } = useSession();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/director");
            const data = await response.json();

            setData(data);
        };

        fetchData()
    }, [])

    return (
        <DisplayDirector
            data={data}
            session={session}
        />
    )
}

export default ViewDirector
