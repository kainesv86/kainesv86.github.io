import * as React from "react";
import Link from "next/link";

import Facebook from "../common/images/socialIcon/facebook";
import Github from "../common/images/socialIcon/github";
import Linkedin from "../common/images/socialIcon/linkedin";
import { SocialIconDto } from "../common/images/socialIcon/SocialIconDto.interface";

import Language from "../common/images/skillicon/language";
import FrontEnd from "../common/images/skillicon/frontend";
import BackEnd from "../common/images/skillicon/backend";
import Databases from "../common/images/skillicon/databases";
import Devops from "../common/images/skillicon/devops";
import Others from "../common/images/skillicon/others";

import ArrowUp from "../common/images/functionicon/arrowup";

import Card, { CardProps } from "../components/common/card";
import Cards from "../components/cards";

interface SocialMediaProps {
        link: string;
        Icon: React.FunctionComponent<SocialIconDto>;
}

interface Skill {
        Icon: React.FunctionComponent<SocialIconDto>;
        name: string;
        details: Array<string>;
        description: string;
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
                        <div className="flex flex-col flex-1 h-screen bg-yellow-50">
                                <div className="w-full px-8 py-2 text-center rounded shadow bg-amber-100">
                                        <div className="flex items-center justify-between ">
                                                <div className="flex invisible">
                                                        <span className="w-4 h-4 mr-4 bg-gray-900 rounded-full"></span>
                                                        <span className="w-4 h-4 mr-4 bg-gray-900 rounded-full"></span>
                                                        <span className="w-4 h-4 bg-gray-900 rounded-full"></span>
                                                </div>
                                                <p className="text-4xl font-medium text-gray-800">Work</p>
                                                <div className="flex">
                                                        <span className="w-4 h-4 mr-4 bg-blue-500 rounded-full"></span>
                                                        <span className="w-4 h-4 mr-4 bg-green-500 rounded-full"></span>
                                                        <span className="w-4 h-4 bg-red-500 rounded-full"></span>
                                                </div>
                                        </div>
                                </div>
                                <div className="flex flex-col items-center justify-center sm:mt-40 sm:mx-44">
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
                                        <button className="px-4 py-2 mt-2 text-lg font-medium text-gray-800 duration-300 transform border-2 border-gray-800 rounded sm:mt-20 hover:scale-110">
                                                See more project
                                        </button>
                                </div>
                        </div>
                        <div className="flex flex-col flex-1 h-screen px-0 pt-32 bg-yellow-50 sm:px-44">
                                <div className="px-8 py-2 mx-4 mb-4 text-center rounded shadow sm:mx-0 sm:mb-20 bg-amber-100">
                                        <p className="text-4xl font-medium text-gray-800 ">Skill</p>
                                </div>
                                <div>
                                        <div className="flex flex-col sm:flex-row">
                                                <div className="flex flex-col-reverse items-center justify-start sm:flex-col">
                                                        <div className="flex flex-col items-center justify-center w-64 mt-4 rounded sm:mb-8 sm:py-4 sm:mt-0 sm:shadow h-28 sm:bg-amber-100">
                                                                <div
                                                                        onClick={() =>
                                                                                handleSkillOnClick(currentSkill - 1)
                                                                        }
                                                                        className="duration-300 transform hover:scale-150"
                                                                >
                                                                        <ArrowUp />
                                                                </div>
                                                                <div className="relative w-full overflow-hidden text-xl font-medium text-center h-7">
                                                                        <div
                                                                                className="absolute w-full duration-300 transform"
                                                                                style={skillSelectAnimation}
                                                                        >
                                                                                {skills.map((item) => {
                                                                                        return (
                                                                                                <p
                                                                                                        key={item.name}
                                                                                                        className="mb-2"
                                                                                                >
                                                                                                        {item.name}
                                                                                                </p>
                                                                                        );
                                                                                })}
                                                                        </div>
                                                                </div>
                                                                <div
                                                                        className="duration-300 transform rotate-180 hover:scale-150"
                                                                        onClick={() =>
                                                                                handleSkillOnClick(currentSkill + 1)
                                                                        }
                                                                >
                                                                        <ArrowUp />
                                                                </div>
                                                        </div>
                                                        <div className="overflow-hidden sm:m-12">
                                                                <div className="relative w-40 h-40 text-x">
                                                                        <div
                                                                                className="absolute w-full duration-300 transform"
                                                                                style={skillSelectAnimation}
                                                                        >
                                                                                {skills.map((item) => {
                                                                                        return (
                                                                                                <div
                                                                                                        key={item.Icon.toString()}
                                                                                                        className="mb-2"
                                                                                                >
                                                                                                        <item.Icon />
                                                                                                </div>
                                                                                        );
                                                                                })}
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="w-full mt-4 sm:ml-8 sm:mt-0">
                                                        <div className="flex flex-col items-center justify-center rounded sm:mb-8 sm:py-4 sm:shadow auto sm:h-28 sm:bg-amber-100">
                                                                <div className="relative w-full overflow-hidden text-xl font-medium text-center sm:px-8 h-7">
                                                                        <div
                                                                                className="absolute w-full duration-300 transform"
                                                                                style={skillSelectAnimation}
                                                                        >
                                                                                {skills.map((item) => {
                                                                                        return (
                                                                                                <div key={item.name}>
                                                                                                        <ul className="flex items-center justify-center mb-2 text-sm font-medium sm:text-xl sm:justify-start">
                                                                                                                {item.details.map(
                                                                                                                        (
                                                                                                                                details,
                                                                                                                                index
                                                                                                                        ) => (
                                                                                                                                <li
                                                                                                                                        className={`px-2 ${
                                                                                                                                                index !==
                                                                                                                                                item
                                                                                                                                                        .details
                                                                                                                                                        .length -
                                                                                                                                                        1
                                                                                                                                                        ? "mr-4"
                                                                                                                                                        : ""
                                                                                                                                        } bg-gray-800 rounded text-amber-100`}
                                                                                                                                        key={
                                                                                                                                                details
                                                                                                                                        }
                                                                                                                                >
                                                                                                                                        {
                                                                                                                                                details
                                                                                                                                        }
                                                                                                                                </li>
                                                                                                                        )
                                                                                                                )}
                                                                                                        </ul>
                                                                                                </div>
                                                                                        );
                                                                                })}
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className="mx-4 h-72 sm:h-64">
                                                                <div className="overflow-hidden">
                                                                        <div className="relative w-full h-72">
                                                                                <div
                                                                                        className="absolute w-full duration-300 transform "
                                                                                        style={skillSelectAnimation}
                                                                                >
                                                                                        {skills.map((item) => {
                                                                                                return (
                                                                                                        <div
                                                                                                                key={
                                                                                                                        item.description
                                                                                                                }
                                                                                                                className="flex items-center justify-center px-8 mb-2 text-lg font-normal h-72"
                                                                                                        >
                                                                                                                <p>
                                                                                                                        {
                                                                                                                                item.description
                                                                                                                        }
                                                                                                                </p>
                                                                                                        </div>
                                                                                                );
                                                                                        })}
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className="flex flex-col flex-1 p-4 mt-20 sm:p-32 bg-yellow-50"></div>
                </div>
        );
}
