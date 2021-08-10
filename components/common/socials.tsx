import * as React from "react";
import Link from "next/link";

import Facebook from "../../common/images/socialIcon/facebook";
import Github from "../../common/images/socialIcon/github";
import Linkedin from "../../common/images/socialIcon/linkedin";
import { SocialIconDto } from "../../common/images/socialIcon/SocialIconDto.interface";

export interface SocialsProps {}

interface SocialProps {
        link: string;
        Icon: React.FunctionComponent<SocialIconDto>;
}

const SocialMedia: Array<SocialProps> = [
        { link: "/1", Icon: Facebook },
        { link: "/2", Icon: Github },
        { link: "/3", Icon: Linkedin },
];

const Socials: React.FunctionComponent<SocialsProps> = () => {
        return (
                <div className="flex flex-col items-center">
                        <ul className="flex">
                                {SocialMedia.map((Item, index) => {
                                        return (
                                                <li
                                                        className={`${index === SocialMedia.length - 1 ? "" : "mr-8"}`}
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
                </div>
        );
};

export default Socials;
