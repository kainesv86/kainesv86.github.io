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
                <div
                        key={name}
                        className="flex flex-col items-center duration-500 group transform-gpu hover:-translate-y-1/2 sm:delay-500"
                >
                        <div className="flex flex-col items-center justify-center w-screen mb-8 delay-500 cursor-pointer sm:w-44 h-80 animate-jumping2s sm:h-144">
                                <div className="m-2 ">
                                        <img src={logo} alt="" className="w-40 h-40" />
                                </div>
                                <p className="mt-2 text-4xl font-bold text-gray-800">{name}</p>
                                <p className="mt-2 text-xl text-gray-600">{field}</p>
                                <p className="mt-2 text-sm text-gray-600">{role}</p>
                        </div>
                        <div className="flex items-center justify-center w-screen mx-2 mb-8 rounded cursor-pointer ">
                                <Link href={link ? link : "/"}>
                                        <a rel="stylesheet" href={link ? link : "/"} className="sm:h-144 h-80">
                                                <img src={imageUrl} alt={imageUrl} className="w-full h-full" />
                                        </a>
                                </Link>
                        </div>
                </div>
        );
};

export default Card;
