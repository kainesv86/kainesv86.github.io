import * as React from "react";
import ArrowUp from "../../common/images/functionicon/arrowup";

import useWindowDimensions from "../../hooks/useWIndowDimensions";
import useScrollPosition from "@react-hook/window-scroll";

export interface ScrollingUpProps {}

const ScrollingUp: React.FunctionComponent<ScrollingUpProps> = () => {
        const scrollY = useScrollPosition(60);
        const { scrollTo, height } = useWindowDimensions();

        const position = React.useMemo<string>(() => {
                return height * 3 - 100 <= scrollY ? "translate-y-0" : "translate-y-48";
        }, [scrollY]);

        return (
                <div
                        className={`flex flex-col items-center justify-between rounded cursor-pointer ${position} transform duration-300`}
                        onClick={() => scrollTo({ behavior: "smooth", top: 0 })}
                >
                        <ArrowUp />
                        <div className="text-xl font-semibold text-center text-gray-800">
                                <p>G</p>
                                <p>O</p>
                                <p>U</p>
                                <p>P</p>
                        </div>
                </div>
        );
};

export default ScrollingUp;
