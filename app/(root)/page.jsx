import Link from "next/link";

import Feed from "@/components/Feed";

export default function Home() {
    return (
        <div className="relative py-16 font-[sans-serif]">
            <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">Welcome to <span className="bg-gradient-to-tr from-amber-500 to-orange-700 bg-clip-text text-transparent">Moviesweb</span></h1>
                <p className="text-lg md:text-xl mb-8">Experience excellence like never before with our service for the movies.</p>
                <Link
                    href="/register"
                >
                    <button type="button" className="bg-gradient-to-r from-amber-500 to-orange-700 hover:from-amber-700 hover:to-orange-900 text-white text-base font-semibold px-8 py-2.5 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl">
                        Get Started
                    </button>
                </Link>
            </div>
            <Feed />
        </div>
    );
}
