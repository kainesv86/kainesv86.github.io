import * as React from "react";
import ArrowUp from "../../common/images/functionicon/arrowup";

import useWindowDimensions from "../../hooks/useWIndowDimensions";
import useScrollPosition from "@react-hook/window-scroll";

export interface ScrollingUpProps {}

const ScrollingUp: React.FunctionComponent<ScrollingUpProps> = () => {
        const scrollY = useScrollPosition(60);
        const { scrollTo } = useWindowDimensions();

        const position = React.useMemo<string>(() => {
                // return height * 3 - 100 <= scrollY ? "translate-y-0" : "translate-y-48";
                return "";
        }, [scrollY]);

        return (
                <div
                        className={`flex flex-col items-center justify-between rounded cursor-pointer ${position} bg-gray-800 transform duration-300`}
                        onClick={() => scrollTo({ behavior: "smooth", top: 0 })}
                >
                        <div className="w-8 h-8 sm:w-12 sm:h-12">
                                <ArrowUp />
                        </div>
                </div>
        );
};

export default ScrollingUp;
