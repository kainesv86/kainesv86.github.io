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
                                className={`fixed z-100 flex flex-cols items-center h-full justify-between border-2 border-red-600 transform duration-500`}
                                id="home"
                        >
                                <div className="hidden h-full sm:block">
                                        <ul className="flex flex-col items-center justify-center h-full text-3xl text-gray-900 ">
                                                {NavBarLink.map((item, index) => (
                                                        <li
                                                                key={item.label}
                                                                className={`mb-16 px-10 cursor-pointer flex items-center duration-500 transform hover:translate-x-14`}
                                                                onClick={() =>
                                                                        scrollTo({
                                                                                top: height * index,
                                                                                behavior: "smooth",
                                                                        })
                                                                }
                                                        >
                                                                <p>{item.label}</p>
                                                        </li>
                                                ))}
                                        </ul>
                                </div>
                                <div className="block sm:hidden" onClick={() => setBurger(!burger)}>
                                        <Burger active={burger} />
                                </div>

                                {/* <p className="text-3xl text-gray-800 duration-200 transform hover:scale-125">
                                        <Link href="#home">Kainé</Link>
                                </p> */}
                        </div>
                        <BurgerBar active={burger} setActive={setBurger} />
                </React.Fragment>
        );
};

export default NavBar;
