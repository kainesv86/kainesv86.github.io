import * as React from "react";
import { NavBarLink } from "../navbar";
import useWindowDimensions from "../../hooks/useWIndowDimensions";

export interface BurgerBarProps {
        active?: boolean;
        setActive: Function;
}

const BurgerBar: React.FunctionComponent<BurgerBarProps> = ({ active = false, setActive }) => {
        const { scrollTo, height } = useWindowDimensions();

        const handleOnClick = (index: number) => {
                scrollTo({ top: height * index, behavior: "smooth" });
                setActive(!active);
        };

        return (
                <div
                        className={`z-10 fixed top-0 transform duration-300 w-full -left-full ${
                                active ? "translate-x-full" : ""
                        }`}
                >
                        <ul className="flex flex-col items-center justify-center w-full h-screen bg-amber-100">
                                {NavBarLink.map((item, index) => (
                                        <li
                                                key={item.label}
                                                className="mb-4 text-4xl font-bold text-gray-800"
                                                onClick={() => handleOnClick(index)}
                                        >
                                                {item.label}
                                        </li>
                                ))}
                        </ul>
                </div>
        );
};

export default BurgerBar;
