import * as React from "react";

import Link from "next/link";

import useWindowDimensions from "../../hooks/useWIndowDimensions";
import useScrollPosition from "@react-hook/window-scroll";

export interface NavBarProps {}

const NavBar: React.FunctionComponent<NavBarProps> = () => {
        const NavBarLink = [
                { link: "/about", label: "About" },
                { link: "/work", label: "Work" },
                { link: "/skill", label: "Skill" },
                { link: "/contact", label: "Contact" },
        ];
        const scrollY = useScrollPosition(60);
        const [color, setColor] = React.useState<string>("bg-amber-100");

        const { height, scrollTo } = useWindowDimensions();

        return (
                <div
                        className={`fixed z-50 flex items-center justify-center w-full h-20  ${color} sm:justify-between sm:px-20 transform duration-500 `}
                >
                        <ul className="flex items-center h-full mr-8 text-lg text-gray-800">
                                {NavBarLink.map((item, index) => (
                                        <li
                                                key={item.label}
                                                className={`relative flex items-center h-full mr-0 cursor-pointer ${
                                                        index !== NavBarLink.length - 1 ? "mr-6 sm:mr-20" : ""
                                                } group`}
                                                onClick={() => scrollTo({ top: height * index, behavior: "smooth" })}
                                        >
                                                {item.label}
                                                <span
                                                        className={`absolute bottom-0 right-0 block w-full h-1 duration-200 opacity-0 bg-warmGray-700 group-hover:opacity-100`}
                                                ></span>
                                        </li>
                                ))}
                        </ul>

                        <p className="text-3xl text-gray-800 duration-200 transform hover:scale-125">
                                <Link href="/">Kainé</Link>
                        </p>
                </div>
        );
};

export default NavBar;
