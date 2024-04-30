"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
    const path = usePathname();
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        { name: "Home", href: "/" },
    ]

    const linksCreate = [
        { name: "Create Movie", href: "/create/create-movie" },
        { name: "Create Artist", href: "/create/create-artist" },
        { name: "Create Director", href: "/create/create-director" },
    ]

    const linksView = [
        { name: "View Movie", href: "/display/display-movie" },
        { name: "View Artist", href: "/display/display-artist" },
        { name: "View Director", href: "/display/display-director" },
    ]

    const isActive = (href) => {
        return path === href;
    }

    return (
        <header className="shadow-lg py-4 px-4 sm:px-10 bg-gray-900 font-[sans-serif] min-h-[60px] relative">
            <div className="flex flex-wrap items-center justify-between gap-5">
                <Link
                    href="/"
                    className="lg:absolute max-lg:top-4 max-lg:left-10 max-sm:left-4 lg:top-2/4 lg:left-2/4 lg:-translate-x-1/2 lg:-translate-y-1/2 bg-gradient-to-tr from-amber-500 to-orange-700 bg-clip-text text-transparent font-bold text-2xl"
                >
                    Moviesweb
                </Link>
                <div className="flex items-center ml-auto lg:order-1">
                    {
                        session?.user ? (
                            <>
                                <div className="mr-6 font-semibold text-[15px] border-none outline-none text-[#ff7b00]">
                                    Hello {session?.user?.name}
                                </div>
                                <button onClick={() => signOut()}>
                                    <Link
                                        href="/"
                                        className="px-4 py-2 text-sm rounded-sm font-bold text-white border-2 border-red-700 bg-red-700 transition-all ease-in-out duration-300 hover:bg-transparent hover:text-red-700"
                                    >
                                        Sign out
                                    </Link>
                                </button>
                            </>
                        ) : (
                            <>
                                <button className="mr-6 font-semibold text-[15px] border-none outline-none">
                                    <Link
                                        href="/login"
                                        className="text-[#ff7b00] hover:underline"
                                    >
                                        Login
                                    </Link>
                                </button>
                                <button>
                                    <Link
                                        href="/register"
                                        className="px-4 py-2 text-sm rounded-sm font-bold text-white border-2 border-[#ff7b00] bg-[#ff7b00] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#ff7b00]"
                                    >
                                        Sign up
                                    </Link>
                                </button>
                            </>
                        )
                    }
                    <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden ml-7">
                        {
                            !isOpen ? (
                                <div>
                                    <svg className="w-7 h-7 fill-current text-[#ff7b00]" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </div>
                            ) : (
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 hover:fill-red-500 fill-current text-[#ff7b00]"
                                        viewBox="0 0 320.591 320.591">
                                        <path
                                            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                            data-original="#000000"></path>
                                        <path
                                            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                            data-original="#000000"></path>
                                    </svg>
                                </div>
                            )
                        }
                    </button>
                </div>
                <ul className={`lg:!flex lg:space-x-5 max-lg:space-y-2 ${!isOpen && "max-lg:hidden"} max-lg:py-4 max-lg:w-full`}>
                    {
                        links.map(link => (
                            <li key={link.name} className="max-lg:border-b max-lg:py-2 px-3">
                                <Link
                                    href={link.href}
                                    className={`${isActive(link.href) ? "text-[#ff7b00]" : "text-[#333]"} hover:text-[#ff7b00] block font-semibold text-[15px]`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))
                    }
                    <div className="group max-lg:border-b max-lg:py-2 px-3">
                        <div className={`${isActive(path.match("create") && path) ? "text-[#ff7b00]" : "text-[#333]"} hover:text-[#ff7b00] block font-semibold text-[15px]`}>
                            Create
                            <svg
                                xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" className="ml-1 inline-block"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                                    data-name="16" data-original="#000000" />
                            </svg>
                        </div>
                        <ul className="absolute hidden group-hover:block shadow-lg max-lg:border max-lg:border-gray-500 bg-gray-900 px-6 pb-4 pt-6 space-y-3 min-w-[250px] z-50">
                            {
                                linksCreate.map(linkCreate => (
                                    <li key={linkCreate.name} className="border-b py-2">
                                        <Link
                                            href={linkCreate.href}
                                            className={`${isActive(linkCreate.href) ? "text-[#ff7b00]" : "text-[#333]"} hover:text-[#ff7b00] block font-semibold text-[15px]`}
                                        >
                                            {linkCreate.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="group max-lg:border-b max-lg:py-2 px-3">
                        <div className={`${isActive(path.match("display") && path) ? "text-[#ff7b00]" : "text-[#333]"} hover:text-[#ff7b00] block font-semibold text-[15px]`}>
                            View
                            <svg
                                xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" className="ml-1 inline-block"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                                    data-name="16" data-original="#000000" />
                            </svg>
                        </div>
                        <ul className="absolute hidden group-hover:block shadow-lg max-lg:border max-lg:border-gray-500 bg-gray-900 px-6 pb-4 pt-6 space-y-3 min-w-[250px] z-50">
                            {
                                linksView.map(linkView => (
                                    <li key={linkView.name} className="border-b py-2">
                                        <Link
                                            href={linkView.href}
                                            className={`${isActive(linkView.href) ? "text-[#ff7b00]" : "text-[#333]"} hover:text-[#ff7b00] block font-semibold text-[15px]`}
                                        >
                                            {linkView.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </ul>
            </div>
        </header>
    )
}

export default Header
