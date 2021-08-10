import * as React from "react";

export interface CardsProps {}

const Cards: React.FunctionComponent<CardsProps> = ({ children }) => {
        return <div className="flex items-center justify-center w-auto h-auto">{children}</div>;
};

export default Cards;
