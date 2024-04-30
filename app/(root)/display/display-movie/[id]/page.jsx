'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

import DisplaySpecificMovie from "@/components/DisplaySpecificMovie";

const ViewSpecificMovie = ({ params }) => {
    const [data, setData] = useState([]);
    const [comment, setComment] = useState("");
    const { data: session } = useSession();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/movie/${params?.id}`);
            const data = await response.json();

            setData(data);
        };

        {params?.id && fetchData()}
    }, [])

    const handlePostCommentClick = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/comment/new", {
                method: 'POST',
                body: JSON.stringify({
                    comment,
                    postedById: session?.user?.id,
                })
            })

            if (response.ok) {
                console.log("Successfully added to the database");
                const form = e.target;
                form.reset();
            }

            const data = await response.json();

            const responseComment = await fetch("/api/movie/comment", {
                method: 'POST',
                body: JSON.stringify({
                    _id: params?.id,
                    commentId: data._id,
                })
            })

            if (responseComment.ok) {
                console.log("Successfully added to the database");
                const response = await fetch(`/api/movie/${params?.id}`);
                const data = await response.json();
                
                setData(data);
            } else {
                console.log("Failed to add to the database");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <DisplaySpecificMovie
            data={data}
            setComment={setComment}
            session={session}
            handlePostCommentClick={handlePostCommentClick}
        />
    )
}

export default ViewSpecificMovie
