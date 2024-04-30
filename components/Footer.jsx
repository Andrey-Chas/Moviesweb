import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-900 font-[sans-serif]">
            <div className="py-8 px-4 sm:px-12">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="w-full md:w-auto text-center md:text-left mb-6 md:mb-0">
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-gray-500 font-extrabold text-2xl"
                        >
                            Moviesweb
                        </Link>
                    </div>
                </div>
                <hr className="my-6 border-gray-300" />
                <p className="text-center text-gray-700 text-base">Copyright © 2024
                    <Link
                        href="/"
                        target="_blank"
                        className="hover:underline mx-1"
                    >
                        Moviesweb
                    </Link>
                    All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
