import * as React from "react";
import Link from "next/link";

export interface NavBarProps {}

const NavBar: React.FunctionComponent<NavBarProps> = () => {
        return (
                <div className="flex items-center justify-center h-20 bg-yellow-100 sm:justify-between sm:px-20">
                        <ul className="flex items-center h-full mr-8 text-lg text-gray-800">
                                <li className="relative flex items-center h-full mr-6 sm:mr-20 group">
                                        <Link href="/work">Work</Link>
                                        <span className="absolute bottom-0 right-0 block w-full h-1 duration-200 bg-purple-500 opacity-0 group-hover:opacity-100"></span>
                                </li>
                                <li className="relative flex items-center h-full mr-6 sm:mr-20 group">
                                        <Link href="/about">About</Link>
                                        <span className="absolute bottom-0 right-0 block w-full h-1 duration-200 bg-purple-500 opacity-0 group-hover:opacity-100"></span>
                                </li>
                                <li className="relative flex items-center h-full group">
                                        <Link href="/contact">Contact</Link>
                                        <span className="absolute bottom-0 right-0 block w-full h-1 duration-200 bg-purple-500 opacity-0 group-hover:opacity-100"></span>
                                </li>
                        </ul>
                        <p className="text-3xl text-gray-800 duration-200 transform hover:scale-125">
                                <Link href="/">Kainé</Link>
                        </p>
                </div>
        );
};

export default NavBar;
