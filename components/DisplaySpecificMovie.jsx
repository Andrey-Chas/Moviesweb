import Image from "next/image";
import Link from "next/link";

const DisplaySpecificMovie = ({ data, setComment, session, handlePostCommentClick }) => {
    return (
        <div className="font-[sans-serif] p-10">
            <div>
                <div className="grid items-start grid-cols-1 lg:grid-cols-3">
                    <div className="col-span-2 grid grid-cols-2 lg:sticky top-0">
                        <div className="columns-2 gap-0">
                            {
                                Object.entries(data).map(([key, value]) => (
                                    key === "image" && (
                                        value.map(image => (
                                            <div key={value.indexOf(image)}>
                                                <Image
                                                    src={`data:image/png;base64,${Buffer.from(image).toString("base64")}`}
                                                    alt="Image of the movie"
                                                    width={0}
                                                    height={0}
                                                    className="w-full h-full object-cover object-top shadow-md"
                                                />
                                            </div>
                                        ))
                                    )
                                ))
                            }
                        </div>
                        <div>
                            {
                                Object.entries(data).map(([key, value]) => (
                                    key === "imageMain" && (
                                        <Image
                                            key={value}
                                            src={`data:image/png;base64,${Buffer.from(value).toString("base64")}`}
                                            alt="Image of the movie"
                                            width={0}
                                            height={0}
                                            className="w-full h-full object-cover object-top shadow-md"
                                        />
                                    )
                                ))
                            }
                        </div>
                    </div>
                    <div className="px-10 py-6 max-lg:max-w-2xl">
                        <div>
                            <h2 className="text-2xl font-extrabold text-gray-50">{data.name}</h2>
                            <p className="text-sm text-gray-500 mt-2">{new Date(data.yearOfRelease).getFullYear()}</p>
                        </div>
                        <div className="flex space-x-2 mt-4">
                            <svg className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <button type="button" className="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center !ml-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 mr-1" fill="currentColor" viewBox="0 0 32 32">
                                    <path d="M14.236 21.954h-3.6c-.91 0-1.65-.74-1.65-1.65v-7.201c0-.91.74-1.65 1.65-1.65h3.6a.75.75 0 0 1 .75.75v9.001a.75.75 0 0 1-.75.75zm-3.6-9.001a.15.15 0 0 0-.15.15v7.2a.15.15 0 0 0 .15.151h2.85v-7.501z" data-original="#000000" />
                                    <path d="M20.52 21.954h-6.284a.75.75 0 0 1-.75-.75v-9.001c0-.257.132-.495.348-.633.017-.011 1.717-1.118 2.037-3.25.18-1.184 1.118-2.089 2.28-2.201a2.557 2.557 0 0 1 2.17.868c.489.56.71 1.305.609 2.042a9.468 9.468 0 0 1-.678 2.424h.943a2.56 2.56 0 0 1 1.918.862c.483.547.708 1.279.617 2.006l-.675 5.401a2.565 2.565 0 0 1-2.535 2.232zm-5.534-1.5h5.533a1.06 1.06 0 0 0 1.048-.922l.675-5.397a1.046 1.046 0 0 0-1.047-1.182h-2.16a.751.751 0 0 1-.648-1.13 8.147 8.147 0 0 0 1.057-3 1.059 1.059 0 0 0-.254-.852 1.057 1.057 0 0 0-.795-.365c-.577.052-.964.435-1.04.938-.326 2.163-1.71 3.507-2.369 4.036v7.874z" data-original="#000000" />
                                    <path d="M4 31.75a.75.75 0 0 1-.612-1.184c1.014-1.428 1.643-2.999 1.869-4.667.032-.241.055-.485.07-.719A14.701 14.701 0 0 1 1.25 15C1.25 6.867 7.867.25 16 .25S30.75 6.867 30.75 15 24.133 29.75 16 29.75a14.57 14.57 0 0 1-5.594-1.101c-2.179 2.045-4.61 2.81-6.281 3.09A.774.774 0 0 1 4 31.75zm12-30C8.694 1.75 2.75 7.694 2.75 15c0 3.52 1.375 6.845 3.872 9.362a.75.75 0 0 1 .217.55c-.01.373-.042.78-.095 1.186A11.715 11.715 0 0 1 5.58 29.83a10.387 10.387 0 0 0 3.898-2.37l.231-.23a.75.75 0 0 1 .84-.153A13.072 13.072 0 0 0 16 28.25c7.306 0 13.25-5.944 13.25-13.25S23.306 1.75 16 1.75z" data-original="#000000" />
                                </svg>
                                87 Reviews
                            </button>
                        </div>
                        <div className="mt-8">
                            <p className="text-gray-500 text-3xl font-bold">{data.genre}</p>
                            <p className="text-gray-400 text-xl mt-1">
                                {"Directors: "}
                                {
                                    Object.entries(data).map(([key, value]) => (
                                        key === "director" && (
                                            value.map(director => (
                                                director.firstName + " " + director.lastName + (value.length - 1 !== value.indexOf(director) ? ", " : " ")
                                            ))
                                        )
                                    ))
                                }
                            </p>
                            <p className="text-gray-400 text-xl mt-1">
                                {"Artists: "}
                                {
                                    Object.entries(data).map(([key, value]) => (
                                        key === "artist" && (
                                            value.map(artist => (
                                                artist.firstName + " " + artist.lastName + (value.length - 1 !== value.indexOf(artist) ? ", " : " ")
                                            ))
                                        )
                                    ))
                                }
                            </p>
                        </div>
                        <div className="mt-8 space-y-4">
                            <h1 className="text-2xl font-extrabold text-gray-300">Description:</h1>
                            <div className="space-y-3 text-sm text-gray-300">
                                {data.description}
                            </div>
                        </div>
                        <div className="mt-8">
                            <div>
                                <h3 className="text-lg font-bold text-gray-300">Reviews</h3>
                                {
                                    session?.user ? (
                                        <form onSubmit={handlePostCommentClick} className="mb-6">
                                            <div className="px-4 py-2.5 bg-black text-gray-500 w-full text-sm border-2 border-gray-500 focus:border-blue-500 rounded outline-none">
                                                <label className="sr-only">Your comment</label>
                                                <textarea
                                                    type="text"
                                                    required
                                                    placeholder="Enter review"
                                                    onChange={(e) => setComment(e.target.value)}
                                                    className="bg-black text-gray-500 w-full focus:border-blue-500 outline-none"
                                                />
                                            </div>
                                            <button type="submit" className="mt-8 px-6 py-2.5 w-full text-sm font-semibold bg-gray-900 text-gray-500 rounded hover:bg-gray-700">
                                                Post
                                            </button>
                                        </form>
                                    ) : (
                                        <div className="mt-2 text-center text-gray-300">
                                            You have to be logged in to leave a review.{" "}
                                            <span>
                                                <Link
                                                    href="/login"
                                                    className="text-blue-500 underline"
                                                >
                                                    Log in?
                                                </Link>
                                            </span>
                                        </div>
                                    )
                                }
                            </div>
                            {
                                Object.entries(data).map(([key, value]) => (
                                    key === "comment" && (
                                        value.map(comment => (
                                            <div key={comment._id} className="flex items-start mt-8 border-b py-2">
                                                <div className="ml-3">
                                                    <h4 className="text-sm font-bold text-gray-100">{comment.postedBy.name}</h4>
                                                    <div className="flex space-x-1 mt-1">
                                                        <p className="text-xs font-semibold text-gray-300">{new Date(comment.createdAt).toLocaleDateString()}</p>
                                                    </div>
                                                    <p className="text-xs mt-4 text-gray-300 text-justify">{comment.comment}</p>
                                                </div>
                                            </div>
                                        ))
                                    )
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplaySpecificMovie
