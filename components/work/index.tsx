import * as React from "react";
import Card, { CardProps } from "../common/card";
import Cards from "../cards";
import Link from "next/link";

export interface WorkProps {}

const Work: React.FunctionComponent<WorkProps> = () => {
        const [project, setProject] = React.useState<number>(0);

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

        React.useEffect(() => {
                const interval = setInterval(() => {
                        if (project >= projects.length - 1) setProject(0);
                        else setProject(project + 1);
                }, 10000);
                return () => clearInterval(interval);
        }, [project]);

        const Swing = React.useMemo<React.CSSProperties>(() => {
                return { transform: `translateX(${(-project / projects.length) * 100}%)` };
        }, [project]);

        return (
                <div className="flex flex-col items-center flex-1 h-screen bg-yellow-50">
                        <div className="w-full px-8 py-2 text-center rounded shadow mb-36">
                                <div className="flex items-center justify-between ">
                                        <div className="flex invisible">
                                                <span className="w-4 h-4 mr-4 bg-gray-900 rounded-full"></span>
                                                <span className="w-4 h-4 mr-4 bg-gray-900 rounded-full"></span>
                                                <span className="w-4 h-4 bg-gray-900 rounded-full"></span>
                                        </div>
                                        <p className="text-4xl font-medium text-gray-800">Work</p>
                                        <div className="flex">
                                                <span className="w-4 h-4 mr-4 delay-100 transform bg-blue-500 rounded-full animate-scalepoint"></span>
                                                <span className="w-4 h-4 mr-4 delay-200 transform bg-green-500 rounded-full animate-scalepointl"></span>
                                                <span className="w-4 h-4 delay-300 transform bg-red-500 rounded-full animate-scalepoint"></span>
                                        </div>
                                </div>
                        </div>
                        <div className="relative flex flex-col items-center justify-center w-full overflow-hidden h-80 sm:h-144">
                                <div className="absolute top-0 left-0 flex h-auto duration-300" style={Swing}>
                                        <Cards>
                                                {projects.map((item) => (
                                                        <Card
                                                                key={item.name}
                                                                name={item.name}
                                                                field={item.field}
                                                                logo={item.logo}
                                                                role={item.role}
                                                                link={item.link}
                                                                imageUrl={item.imageUrl}
                                                        />
                                                ))}
                                        </Cards>
                                </div>
                        </div>
                        <button className="px-4 py-2 text-lg font-medium text-gray-800 duration-300 transform border-2 border-gray-800 rounded w-min hover:scale-110 mt-36">
                                <p className="w-max">See more project</p>
                        </button>
                </div>
        );
};

export default Work;
