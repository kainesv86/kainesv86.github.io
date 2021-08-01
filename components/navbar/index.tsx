import * as React from "react";

export interface NavBarProps {}

const NavBar: React.FunctionComponent<NavBarProps> = () => {
        return (
                <div className="flex items-center justify-center h-20 bg-yellow-100">
                        <ul className="flex mr-8">
                                <li className="mr-6 text-lg text-gray-800">Work</li>
                                <li className="mr-6 text-lg text-gray-800">Contact</li>
                                <li className="text-lg text-gray-800">About</li>
                        </ul>
                        <p className="text-3xl font-medium text-gray-800">Kainé</p>
                </div>
        );
};

export default NavBar;
