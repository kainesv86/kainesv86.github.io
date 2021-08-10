import * as React from "react";

export interface CopyrightProps {}

const Copyright: React.FunctionComponent<CopyrightProps> = () => {
        return (
                <div className="mb-10 text-base font-semibold text-center text-gray-500 sm:text-lg">
                        <p>Developed by KaineSV</p>
                        <p>Copyright © 2021 Kainé Pham</p>
                </div>
        );
};

export default Copyright;
