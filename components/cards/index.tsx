import * as React from "react";

export interface CardsProps {}

const Cards: React.FunctionComponent<CardsProps> = ({ children }) => {
        return <div className="flex items-center justify-center w-full">{children}</div>;
};

export default Cards;
