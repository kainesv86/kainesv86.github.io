import * as React from "react";
import Link from "next/link";

import Facebook from "../common/images/socialIcon/facebook";
import Github from "../common/images/socialIcon/github";
import Linkedin from "../common/images/socialIcon/linkedin";
import { SocialIconDto } from "../common/images/socialIcon/SocialIconDto.interface";

import Card, { CardProps } from "../components/common/card";
import Cards from "../components/cards";

interface SocialMediaProps {
        link: string;
        Icon: React.FunctionComponent<SocialIconDto>;
}
export default function Home() {
        const SocialMedia: Array<SocialMediaProps> = [
                { link: "/1", Icon: Facebook },
                { link: "/2", Icon: Github },
                { link: "/3", Icon: Linkedin },
        ];
        const projects: Array<CardProps> = [
                {
                        name: "AnchorCo",
                        field: "Co-working space",
                        role: "Front-end developer",
                        imageUrl: "/images/project/anchorco/anchorco.png",
                        link: "/",
                        logo: "/images/project/anchorco/anchorcologo.png",
                },
                {
                        name: "AnchorCo2",
                        field: "Co-working space",
                        role: "Front-end developer",
                        imageUrl: "/images/project/anchorco/anchorco.png",
                        link: "/",
                        logo: "/images/project/anchorco/anchorcologo.png",
                },
                {
                        name: "AnchorCo3",
                        field: "Co-working space",
                        role: "Front-end developer",
                        imageUrl: "/images/project/anchorco/anchorco.png",
                        link: "/",
                        logo: "/images/project/anchorco/anchorcologo.png",
                },
        ];

        return (
                <div>
                        <div className="flex flex-col flex-1 p-4 mt-20 sm:p-32 bg-yellow-50">
                                <div className="flex flex-col items-center justify-center w-full h-full sm:flex-row">
                                        <div className="flex flex-col mr-0 duration-300 sm:transform-gpu transform-none sm:mr-40 hover:translate-x-6 hover:translate-y-6">
                                                <div className="flex flex-col mb-6 text-5xl text-center sm:text-left sm:text-6xl">
                                                        <p>Hi, I'm Kainé</p>
                                                        <p>A Front-end</p>
                                                        <p>Developer</p>
                                                </div>
                                                <p className="mb-6 text-2xl text-center text-gray-600 sm:text-3xl sm:max-w-xs sm:text-left">
                                                        I'm also a Back-end developer and UI designer.
                                                </p>
                                        </div>
                                        <div className="flex items-center h-auto overflow-hidden duration-300 shadow-2xl sm:transform-gpu transform-none hover:-translate-x-6 hover:translate-y-6 rounded-2xl w-80 sm:w-128 sm:h-auto">
                                                <img src="/images/avatar.png" alt="Kainé" />
                                        </div>
                                </div>
                                <div className="flex flex-col items-center justify-center mt-10 sm:mt-20">
                                        <ul className="flex mb-2 sm:mb-4">
                                                {SocialMedia.map((Item, index) => {
                                                        return (
                                                                <li
                                                                        className={`${
                                                                                index === SocialMedia.length - 1
                                                                                        ? ""
                                                                                        : "mr-8"
                                                                        }`}
                                                                        key={Item.link}
                                                                >
                                                                        <Link href={Item.link}>
                                                                                <a href={Item.link}>
                                                                                        <Item.Icon
                                                                                                classNameSvg="group transform hover:scale-110 duration-150 w-8 sm:w-10"
                                                                                                classNamePath="fill-current group-hover:text-black text-gray-800 duration-150"
                                                                                        />
                                                                                </a>
                                                                        </Link>
                                                                </li>
                                                        );
                                                })}
                                        </ul>
                                        <p className="max-w-2xl text-xs text-center text-gray-500 duration-300 sm:text-2xl hover:translate-y-5 transform-gpu">
                                                You can read more about my biography, experience, skills, education, and
                                                much more in the next space.
                                        </p>
                                </div>
                        </div>
                        <div className="flex flex-col items-center justify-center flex-1 h-screen p-4 bg-yellow-50">
                                <div className="w-full">
                                        <div className="w-full py-2 mb-20 text-center rounded bg-amber-200">
                                                <p className="text-5xl text-gray-800">Work</p>
                                        </div>
                                        <Cards>
                                                {projects.map((item) => {
                                                        return (
                                                                <Card
                                                                        key={item.name}
                                                                        imageUrl={item.imageUrl}
                                                                        field={item.field}
                                                                        name={item.name}
                                                                        role={item.role}
                                                                        link={item.link}
                                                                        logo={item.logo}
                                                                />
                                                        );
                                                })}
                                        </Cards>
                                </div>
                                <button className="px-4 py-2 text-lg font-medium text-white duration-300 transform bg-gray-800 rounded hover:scale-110">
                                        See more project
                                </button>
                        </div>
                        <div className="flex flex-col flex-1 h-screen bg-yellow-50">Heloo</div>
                </div>
        );
}
