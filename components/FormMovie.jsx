const FormMovie = ({ type, movie, dataArtist, dataDirector, setMovie, setImageMain, setImage, submitting, handleSubmit, handleChangeArtist, handleChangeDirector }) => {
    return (
        <>
            <h1 className="text-2xl font-bold text-center p-5 bg-gradient-to-r from-amber-500 to-orange-700 bg-clip-text text-transparent">
                Create Movie
            </h1>
            <form method="POST" onSubmit={handleSubmit} encType="multipart/form-data" className="font-[sans-serif] bg-black rounded shadow-sm p-6 max-w-4xl mx-auto">
                <div className="grid sm:grid-cols-2 gap-10">
                    <div className="relative flex items-center sm:col-span-2">
                        <label className="text-[13px] bg-black text-gray-500 text-gary-500 absolute px-2 top-[-10px] left-[18px] font-semibold">Name</label>
                        <input type="text" required placeholder="Enter name of the movie"
                            className="px-4 py-3.5 bg-black text-gray-500 w-full text-sm border-2 border-gray-500 focus:border-blue-500 rounded outline-none" onChange={(e) => setMovie({ ...movie, name: e.target.value })} />
                    </div>
                    <div className="relative flex items-center sm:col-span-2">
                        <label
                            className="text-[13px] bg-black text-gray-500 absolute px-2 top-[-10px] left-[18px] font-semibold">Year Of Release</label>
                        <input type="date" required placeholder="Enter year of release"
                            className="px-4 py-3.5 bg-black text-gray-500 w-full text-sm border-2 border-gray-500 focus:border-blue-500 rounded outline-none" onChange={(e) => setMovie({ ...movie, yearOfRelease: e.target.value })} />
                    </div>
                    <div className="relative flex items-center sm:col-span-2">
                        <label className="text-[13px] bg-black text-gray-500 text-gary-500 absolute px-2 top-[-10px] left-[18px] font-semibold">Genre</label>
                        <input type="text" required placeholder="Enter genre"
                            className="px-4 py-3.5 bg-black text-gray-500 w-full text-sm border-2 border-gray-500 focus:border-blue-500 rounded outline-none" onChange={(e) => setMovie({ ...movie, genre: e.target.value })} />
                    </div>
                    <div className="relative flex items-center sm:col-span-2">
                        <label className="text-[13px] bg-black text-gray-500 text-gary-500 absolute px-2 top-[-10px] left-[18px] font-semibold">Select Artists</label>
                        <select aria-label="artist" multiple required className="px-4 py-3.5 bg-black text-gray-500 w-full text-sm border-2 border-gray-500 focus:border-blue-500 rounded outline-none" onChange={handleChangeArtist}>
                            {
                                dataArtist.map(artist => (
                                    <option key={artist._id} value={artist._id}>
                                        {artist.firstName} {artist.lastName}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="relative flex items-center sm:col-span-2">
                        <label className="text-[13px] bg-black text-gray-500 text-gary-500 absolute px-2 top-[-10px] left-[18px] font-semibold">Select Directors</label>
                        <select aria-label="director" multiple required className="px-4 py-3.5 bg-black text-gray-500 w-full text-sm border-2 border-gray-500 focus:border-blue-500 rounded outline-none" onChange={handleChangeDirector}>
                            {
                                dataDirector.map(director => (
                                    <option key={director._id} value={director._id}>
                                        {director.firstName} {director.lastName}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="relative flex items-center sm:col-span-2">
                        <label className="text-[13px] bg-black text-gray-500 text-gary-500 absolute px-2 top-[-10px] left-[18px] font-semibold">Description</label>
                        <textarea type="text" required placeholder="Enter description"
                            className="px-4 py-3.5 bg-black text-gray-500 w-full text-sm border-2 border-gray-500 focus:border-blue-500 rounded outline-none" onChange={(e) => setMovie({ ...movie, description: e.target.value })} />
                    </div>
                    <div className="relative flex items-center sm:col-span-2">
                        <label className="text-[13px] bg-black text-gray-500 text-gary-500 absolute px-2 top-[-10px] left-[18px] font-semibold">Main Image</label>
                        <input type="file" accept=".jpeg, .png" required
                            className="w-full text-gray-500 text-base bg-black border-2 border-gray-500 file:cursor-pointer cursor-pointer file:border-0 file:py-3.5 file:px-4 file:mr-4 file:bg-gray-900 file:hover:bg-gray-700 file:text-gray-500 rounded" onChange={(e) => setImageMain(e.target.files[0])} />
                    </div>
                    <div className="relative flex items-center sm:col-span-2">
                        <label className="text-[13px] bg-black text-gray-500 text-gary-500 absolute px-2 top-[-10px] left-[18px] font-semibold">Movie Posters</label>
                        <input type="file" accept=".jpeg, .png" multiple required
                            className="w-full text-gray-500 text-base bg-black border-2 border-gray-500 file:cursor-pointer cursor-pointer file:border-0 file:py-3.5 file:px-4 file:mr-4 file:bg-gray-900 file:hover:bg-gray-700 file:text-gray-500 rounded" onChange={(e) => setImage(e.target.files)} />
                    </div>
                </div>
                <button type="submit" className="mt-8 px-6 py-2.5 w-full text-sm font-semibold bg-gray-900 text-gray-500 rounded hover:bg-gray-700" disabled={submitting}>
                    {submitting ? "Working..." : type}
                </button>
            </form>
        </>
    )
}

export default FormMovie
