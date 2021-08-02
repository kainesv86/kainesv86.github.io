import * as React from "react";
import Link from "next/link";

import Facebook from "../common/images/socialIcon/facebook";
import Github from "../common/images/socialIcon/github";
import Linkedin from "../common/images/socialIcon/linkedin";
import { SocialIconDto } from "../common/images/socialIcon/SocialIconDto.interface";

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

        return (
                <div className="flex flex-col flex-1 p-4 sm:p-32 bg-yellow-50">
                        <div className="flex flex-col items-center justify-center w-full h-full transform sm:flex-row">
                                <div className="flex flex-col mr-0 sm:mr-40">
                                        <div className="flex flex-col mb-6 text-5xl text-center sm:text-6xl">
                                                <p>Hi, I'm Kainé</p>
                                                <p>A Front-end</p>
                                                <p>Developer</p>
                                        </div>
                                        <p className="mb-6 text-2xl text-center text-gray-600 sm:text-2xl">
                                                I'm also a Back-end developer and UI designer.
                                        </p>
                                </div>
                                <div className="flex items-center h-auto overflow-hidden shadow-2xl rounded-2xl w-80 sm:w-128 sm:h-auto">
                                        <img src="/images/avatar.png" alt="Kainé" />
                                </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-10 sm:mt-20">
                                <ul className="flex mb-2 sm:mb-4">
                                        {SocialMedia.map((Item, index) => {
                                                return (
                                                        <li
                                                                className={`${
                                                                        index === SocialMedia.length - 1 ? "" : "mr-8"
                                                                } group`}
                                                                key={Item.link}
                                                        >
                                                                <Link href={Item.link}>
                                                                        <a href={Item.link}>
                                                                                <Item.Icon
                                                                                        className={
                                                                                                "fill-current group-hover:text-black text-gray-800 transform duration-150 "
                                                                                        }
                                                                                />
                                                                        </a>
                                                                </Link>
                                                        </li>
                                                );
                                        })}
                                </ul>
                                <p className="max-w-2xl text-sm text-center text-gray-500 break-all sm:text-2xl ">
                                        You can read more about my biography, experience, skills, education, and much
                                        more in the next space.
                                </p>
                        </div>
                </div>
        );
}
