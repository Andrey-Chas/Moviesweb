const FormArtist = ({ type, artist, setArtist, setImage, submitting, handleSubmit }) => {
    return (
        <>
            <h1 className="text-2xl font-bold text-center p-5 bg-gradient-to-r from-amber-500 to-orange-700 bg-clip-text text-transparent">
                Create Artist
            </h1>
            <form method="POST" onSubmit={handleSubmit} encType="multipart/form-data" className="font-[sans-serif] bg-black rounded shadow-sm p-6 max-w-4xl mx-auto">
                <div className="grid sm:grid-cols-2 gap-10">
                    <div className="relative flex items-center">
                        <label className="text-[13px] bg-black text-gray-500 absolute px-2 top-[-10px] left-[18px] font-semibold">First
                            Name</label>
                        <input type="text" required placeholder="Enter first name"
                            className="px-4 py-3.5 bg-black text-gray-500 w-full text-sm border-2 border-gray-500 focus:border-blue-500 rounded outline-none" onChange={(e) => setArtist({ ...artist, firstName: e.target.value })} />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4"
                            viewBox="0 0 24 24">
                            <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                            <path
                                d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                                data-original="#000000"></path>
                        </svg>
                    </div>
                    <div className="relative flex items-center">
                        <label className="text-[13px] bg-black text-gray-500 absolute px-2 top-[-10px] left-[18px] font-semibold">Last
                            Name</label>
                        <input type="text" required placeholder="Enter last name"
                            className="px-4 py-3.5 bg-black text-gray-500 w-full text-sm border-2 border-gray-500 focus:border-blue-500 rounded outline-none" onChange={(e) => setArtist({ ...artist, lastName: e.target.value })} />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4"
                            viewBox="0 0 24 24">
                            <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                            <path
                                d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                                data-original="#000000"></path>
                        </svg>
                    </div>
                    <div className="relative flex items-center sm:col-span-2">
                        <label className="text-[13px] bg-black text-gray-500 text-gary-500 absolute px-2 top-[-10px] left-[18px] font-semibold">Date Of Birth</label>
                        <input type="date" required placeholder="Enter date of birth"
                            className="px-4 py-3.5 bg-black text-gray-500 w-full text-sm border-2 border-gray-500 focus:border-blue-500 rounded outline-none" onChange={(e) => setArtist({ ...artist, dateOfBirth: e.target.value })} />
                    </div>
                    <div className="relative flex items-center sm:col-span-2">
                        <label
                            className="text-[13px] bg-black text-gray-500 absolute px-2 top-[-10px] left-[18px] font-semibold">Biography</label>
                        <textarea type="text" required placeholder="Enter biography"
                            className="px-4 py-3.5 bg-black text-gray-500 w-full text-sm border-2 border-gray-500 focus:border-blue-500 rounded outline-none" onChange={(e) => setArtist({ ...artist, biography: e.target.value })} />
                    </div>
                    <div className="relative flex items-center sm:col-span-2">
                        <input type="file" accept=".jpeg, .png" required
                            className="w-full text-gray-500 text-base bg-black border-2 border-gray-500 file:cursor-pointer cursor-pointer file:border-0 file:py-3.5 file:px-4 file:mr-4 file:bg-gray-900 file:hover:bg-gray-700 file:text-gray-500 rounded" onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                </div>
                <button type="submit" className="mt-8 px-6 py-2.5 w-full text-sm font-semibold bg-gray-900 text-gray-500 rounded hover:bg-gray-700" disabled={submitting}>
                    {submitting ? "Working..." : type}
                </button>
            </form>
        </>
    )
}

export default FormArtist
