import * as React from "react";

import Socials from "../components/common/socials";

import Language from "../common/images/skillicon/language";
import FrontEnd from "../common/images/skillicon/frontend";
import BackEnd from "../common/images/skillicon/backend";
import Databases from "../common/images/skillicon/databases";
import Devops from "../common/images/skillicon/devops";
import Others from "../common/images/skillicon/others";

import Skills from "../components/skills";
import Work from "../components/work";
import Contact from "../components/contact";

interface Skill {
        Icon: React.FunctionComponent;
        name: string;
        details: Array<string>;
        description: string;
}

export default function Home() {
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
                                        <Socials />
                                        <p className="max-w-2xl text-xs text-center text-gray-500 duration-300 sm:text-2xl hover:translate-y-5 transform-gpu">
                                                You can read more about my biography, experience, skills, education, and
                                                much more in below.
                                        </p>
                                </div>
                        </div>
                        <Work />
                        <Skills />
                        <Contact />
                </div>
        );
}
