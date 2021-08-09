import * as React from "react";
import { NavBarLink } from "../navbar";

export interface BurgerBarProps {
        active?: boolean;
}

const BurgerBar: React.FunctionComponent<BurgerBarProps> = ({ active = false }) => {
        return (
                <div className={`z-10 absolute top-0 transform duration-300 ${active ? "left-0" : "-left-full"}`}>
                        <ul className="flex flex-col items-center justify-center w-screen h-screen bg-amber-100">
                                {NavBarLink.map((item) => (
                                        <li key={item.label} className="mb-4 text-4xl font-bold text-gray-800">
                                                {item.label}
                                        </li>
                                ))}
                        </ul>
                </div>
        );
};

export default BurgerBar;
