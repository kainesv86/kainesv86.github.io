import * as React from "react";

import Language from "../../common/images/skillicon/language";
import FrontEnd from "../../common/images/skillicon/frontend";
import BackEnd from "../../common/images/skillicon/backend";
import Databases from "../../common/images/skillicon/databases";
import Devops from "../../common/images/skillicon/devops";
import Others from "../../common/images/skillicon/others";

import ArrowUp from "../../common/images/functionicon/arrowup";

export interface SkillsProps {}

interface Skill {
        Icon: React.FunctionComponent;
        name: string;
        details: Array<string>;
        description: string;
}

const Skills: React.FunctionComponent<SkillsProps> = () => {
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

        return (
                <div className="flex flex-col flex-1 h-screen px-0 pt-32 bg-yellow-50 sm:px-44">
                        <div className="px-8 py-2 mx-4 mb-4 text-center rounded shadow sm:mx-0 sm:mb-20 bg-amber-100">
                                <p className="text-4xl font-medium text-gray-800 ">Skill</p>
                        </div>
                        <div>
                                <div className="flex flex-col sm:flex-row">
                                        <div className="flex flex-col-reverse items-center justify-start sm:flex-col">
                                                <div className="flex flex-col items-center justify-center w-64 mt-4 rounded sm:mb-8 sm:py-4 sm:mt-0 sm:shadow h-28 sm:bg-amber-100">
                                                        <div
                                                                onClick={() => handleSkillOnClick(currentSkill - 1)}
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
                                                                onClick={() => handleSkillOnClick(currentSkill + 1)}
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
                                                                                                        className="flex items-center justify-center mb-2 text-lg font-normal sm:px-8 h-72"
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
        );
};

export default Skills;
