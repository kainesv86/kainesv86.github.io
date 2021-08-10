import * as React from "react";

import Link from "next/link";

import Burger from "../burger";
import BurgerBar from "../burger/burgerBar";

import useWindowDimensions from "../../hooks/useWIndowDimensions";

export interface NavBarProps {}

export const NavBarLink = [
        { link: "/about", label: "About" },
        { link: "/work", label: "Work" },
        { link: "/skills", label: "Skills" },
        { link: "/contact", label: "Contact" },
];

const NavBar: React.FunctionComponent<NavBarProps> = () => {
        const [burger, setBurger] = React.useState<boolean>(false);

        const { height, scrollTo } = useWindowDimensions();

        return (
                <React.Fragment>
                        <div
                                className={`fixed z-50 flex items-center w-full h-20 px-6 bg-amber-100 justify-between sm:px-20 transform duration-500`}
                        >
                                <div className="hidden h-full sm:block">
                                        <ul className="flex items-center justify-center h-full mr-8 text-lg text-gray-800 ">
                                                {NavBarLink.map((item, index) => (
                                                        <li
                                                                key={item.label}
                                                                className={`relative h-full cursor-pointer flex items-center ${
                                                                        index !== NavBarLink.length - 1
                                                                                ? "mr-6 sm:mr-20"
                                                                                : "mr-0"
                                                                } group`}
                                                                onClick={() =>
                                                                        scrollTo({
                                                                                top: height * index,
                                                                                behavior: "smooth",
                                                                        })
                                                                }
                                                        >
                                                                <p>{item.label}</p>
                                                                <span
                                                                        className={`absolute w-full bottom-0 right-0 block h-1 duration-200 bg-warmGray-700 opacity-0 group-hover:opacity-100`}
                                                                ></span>
                                                        </li>
                                                ))}
                                        </ul>
                                </div>
                                <div className="block sm:hidden" onClick={() => setBurger(!burger)}>
                                        <Burger active={burger} />
                                </div>

                                <p className="text-3xl text-gray-800 duration-200 transform hover:scale-125">
                                        <Link href="/">Kainé</Link>
                                </p>
                        </div>
                        <BurgerBar active={burger} setActive={setBurger} />
                </React.Fragment>
        );
};

export default NavBar;
