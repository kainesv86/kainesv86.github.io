import * as React from "react";

export interface CardsProps {}

const Cards: React.FunctionComponent<CardsProps> = ({ children }) => {
        return <div className="flex items-center justify-center h-auto transform -translate-x-4">{children}</div>;
};

export default Cards;
