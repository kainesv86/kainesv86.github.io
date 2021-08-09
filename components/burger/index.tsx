import * as React from "react";

export interface BurgerProps {
        active?: boolean;
}

const Burger: React.FunctionComponent<BurgerProps> = ({ active = false }) => {
        const [burger, setBurger] = React.useState<boolean>(active);
        return (
                <div className="relative">
                        <div onClick={() => setBurger(!burger)}>
                                <span className="block w-12 h-1 mb-2 bg-gray-800 rounded"></span>
                                <span
                                        className={`block ${
                                                !burger ? "w-12" : "w-10"
                                        } h-1 mb-2 bg-gray-800 rounded transform duration-300`}
                                ></span>
                                <span
                                        className={`block ${
                                                !burger ? "w-12" : "w-8"
                                        } h-1 bg-gray-800 rounded transform duration-300`}
                                ></span>
                        </div>
                </div>
        );
};

export default Burger;
