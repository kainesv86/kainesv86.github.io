import * as React from "react";
import Link from "next/link";

export interface CardProps {
        imageUrl: string;
        name: string;
        role: string;
        field: string;
        link?: string;
        logo: string;
}

const Card: React.FunctionComponent<CardProps> = ({ imageUrl = "", name, field, role, link = "/", logo = "" }) => {
        return (
                <Link href={link}>
                        <a href={link} className="relative w-full mb-4 sm:shadow-lg h-52 sm:h-96 sm:w-80 group">
                                <img
                                        src={imageUrl}
                                        alt={name}
                                        className="absolute top-0 left-0 w-full h-full bg-cover opacity-0 sm:opacity-100"
                                />
                                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-gray-800 duration-300 group transform-gpu">
                                        <div className="absolute z-0 w-full h-full opacity-0 bg-gradient-to-t from-amber-100 to-amber-50 sm:opacity-100 sm:group-hover:opacity-30"></div>
                                        <div className="z-10 flex flex-col items-center justify-center group-hover:opacity-30">
                                                <div className="w-36 h-36 sm:w-48 sm:h-48">
                                                        <img src={logo} alt="name" />
                                                </div>
                                                <div className="text-base text-center text-gray-800 opacity-100 sm:text-2xl">
                                                        <p className="mt-2 font-semibold">{name}</p>
                                                        <p className="hidden font-medium sm:block">{field}</p>
                                                        <p className="hidden mt-2 text-sm sm:block">{role}</p>
                                                </div>
                                        </div>
                                </div>
                        </a>
                </Link>
        );
};

export default Card;
