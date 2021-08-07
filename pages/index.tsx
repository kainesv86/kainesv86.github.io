import * as React from "react";
import Link from "next/link";

import Socials from "../components/common/socials";

import Language from "../common/images/skillicon/language";
import FrontEnd from "../common/images/skillicon/frontend";
import BackEnd from "../common/images/skillicon/backend";
import Databases from "../common/images/skillicon/databases";
import Devops from "../common/images/skillicon/devops";
import Others from "../common/images/skillicon/others";

import ArrowUp from "../common/images/functionicon/arrowup";

import Skills from "../components/skills";
import Work from "../components/work";

interface Skill {
        Icon: React.FunctionComponent;
        name: string;
        details: Array<string>;
        description: string;
}

export default function Home() {
        const skills: Array<Skill> = [
                {
                        name: "Programing language",
                        details: ["Javascript", "C#", "Java"],
                        description:
                                "1 A programming language is a formal language comprising a set of strings that produce various kinds of machine code output. Programming languages are one kind of computer language, and are used in computer programming to implement algorithms. Most programming languages consist of instructions for computers.",
                        Icon: Language,
                },
                {
                        name: "Frontend",
                        details: ["ReactJS", "Redux", "JQuery", "CSS + HTML"],
                        description:
                                "2 A programming language is a formal language comprising a set of strings that produce various kinds of machine code output. Programming languages are one kind of computer language, and are used in computer programming to implement algorithms. Most programming languages consist of instructions for computers.",
                        Icon: FrontEnd,
                },
                {
                        name: "Backend",
                        details: ["NodeJs"],
                        description:
                                "3 A programming language is a formal language comprising a set of strings that produce various kinds of machine code output. Programming languages are one kind of computer language, and are used in computer programming to implement algorithms. Most programming languages consist of instructions for computers.",
                        Icon: BackEnd,
                },
                {
                        name: "Databases",
                        details: ["MongoDB"],
                        description:
                                "4 A programming language is a formal language comprising a set of strings that produce various kinds of machine code output. Programming languages are one kind of computer language, and are used in computer programming to implement algorithms. Most programming languages consist of instructions for computers.",
                        Icon: Databases,
                },
                {
                        name: "Devops",
                        details: ["Docker"],
                        description:
                                "5 A programming language is a formal language comprising a set of strings that produce various kinds of machine code output. Programming languages are one kind of computer language, and are used in computer programming to implement algorithms. Most programming languages consist of instructions for computers.",
                        Icon: Devops,
                },
                {
                        name: "Others",
                        details: ["Figma", "Vim", "Git"],
                        description:
                                "6 A programming language is a formal language comprising a set of strings that produce various kinds of machine code output. Programming languages are one kind of computer language, and are used in computer programming to implement algorithms. Most programming languages consist of instructions for computers.",
                        Icon: Others,
                },
        ];

        const [currentSkill, setCurrentSkill] = React.useState<number>(0);

        const handleSkillOnClick = (skill: number) => {
                if (skill < 0) return setCurrentSkill(skills.length - 1);
                if (skill > skills.length - 1) return setCurrentSkill(0);
                return setCurrentSkill(skill);
        };

        React.useEffect(() => {
                const interval = setInterval(() => {
                        handleSkillOnClick(currentSkill + 1);
                }, 5000);
                return () => clearInterval(interval);
        }, [currentSkill]);

        const skillSelectAnimation = React.useMemo<React.CSSProperties>(() => {
                return { transform: `translateY(${(-currentSkill / 6) * 100}%)` };
        }, [currentSkill]);

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
                        <div className="flex flex-col flex-1 bg-yellow-50"></div>
                </div>
        );
}
