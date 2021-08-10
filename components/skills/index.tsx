import * as React from "react";

import { Parallax } from "react-scroll-parallax";

import "aos/dist/aos.css";

export interface SkillsProps {}

interface Skill {
        name: string;
        details: string;
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

        const skills: Array<Skill> = [
                {
                        name: "Programing language",
                        details: "Javascript, C# Java",
                },
                {
                        name: "Frontend",
                        details: "ReactJS, Redux, JQuery, CSS + HTML",
                },
                {
                        name: "Backend",
                        details: "NodeJs",
                },
                {
                        name: "Databases",
                        details: "MongoDB",
                },
                {
                        name: "Devops",
                        details: "Docker",
                },
                {
                        name: "Others",
                        details: "Figma, Vim, Git",
                },
        ];

        return (
                <div className="flex-1 h-screen bg-yellow-50">
                        <Parallax y={[-20, 20]}>
                                <div className="flex flex-col items-center justify-start px-4 sm:pt-32 sm:px-44">
                                        <div
                                                className="w-full px-8 py-2 mb-4 text-center rounded shadow-md sm:mx-0 sm:mb-20 bg-yellow-50"
                                                data-aos={"fade-down"}
                                        >
                                                <p className="text-4xl font-medium text-gray-800 ">Skills</p>
                                        </div>
                                        <div className="flex flex-col px-4 mt-4 sm:mt-12 sm:flex-row">
                                                <div
                                                        className="mb-4 duration-300 hover:translate-x-6 hover:translate-y-6 sm:mr-96 transform-none sm:transform-gpu"
                                                        data-aos={"fade-right"}
                                                >
                                                        {skills.slice(0, 3).map((item) => (
                                                                <div className="mb-4" key={item.name}>
                                                                        <p className="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl">
                                                                                {item.name}
                                                                        </p>
                                                                        <p className="text-lg font-medium text-gray-500 sm:text-xl">
                                                                                {item.details}
                                                                        </p>
                                                                </div>
                                                        ))}
                                                </div>
                                                <div
                                                        className="duration-300 hover:-translate-x-6 hover:translate-y-6 transform-none sm:transform-gpu"
                                                        data-aos={"fade-left"}
                                                >
                                                        {skills.slice(3, 6).map((item) => (
                                                                <div className="mb-4" key={item.name}>
                                                                        <p className="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl">
                                                                                {item.name}
                                                                        </p>
                                                                        <p className="text-lg font-medium text-gray-500 sm:text-xl">
                                                                                {item.details}
                                                                        </p>
                                                                </div>
                                                        ))}
                                                </div>
                                        </div>
                                </div>
                        </Parallax>
                </div>
        );
};

export default Skills;
