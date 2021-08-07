import * as React from "react";
import Card, { CardProps } from "../common/card";
import Cards from "../cards";

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
                        <div className="w-full px-8 py-2 text-center rounded shadow bg-amber-100 mb-36">
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
                                                        <div
                                                                key={item.name}
                                                                className="flex flex-col items-center duration-500 group transform-gpu hover:-translate-y-1/2 sm:delay-500"
                                                        >
                                                                <div className="flex flex-col items-center justify-center w-screen mb-8 delay-500 cursor-pointer sm:w-44 h-80 animate-jumping2s sm:h-144">
                                                                        <div className="m-2">
                                                                                <img
                                                                                        src={item.logo}
                                                                                        alt=""
                                                                                        className="w-40 h-40"
                                                                                />
                                                                        </div>
                                                                        <p className="text-4xl font-bold text-gray-800">
                                                                                {item.name}
                                                                        </p>
                                                                        <p className="text-xl text-gray-600">
                                                                                {item.field}
                                                                        </p>
                                                                        <p className="text-sm text-gray-600">
                                                                                {item.role}
                                                                        </p>
                                                                </div>
                                                                <div className="flex items-center justify-center w-screen mx-2 mb-8 overflow-hidden rounded h-80 sm:h-144">
                                                                        <img
                                                                                src={item.imageUrl}
                                                                                alt=""
                                                                                className="object-cover w-full sm:h-full sm:w-auto"
                                                                        />
                                                                </div>
                                                        </div>
                                                ))}
                                                {/* <div className="flex flex-col items-center duration-500 group transform-gpu hover:-translate-y-1/2 sm:delay-500">
                                                        <div className="flex flex-col items-center justify-center w-screen mb-8 delay-500 cursor-pointer sm:w-44 h-80 animate-jumping2s sm:h-144">
                                                                <div className="m-2">
                                                                        <img
                                                                                src={projects[0].logo}
                                                                                alt=""
                                                                                className="w-40 h-40"
                                                                        />
                                                                </div>
                                                                <p className="text-4xl font-bold text-gray-800">
                                                                        {projects[0].name}
                                                                </p>
                                                                <p className="text-xl text-gray-600">
                                                                        {projects[0].field}
                                                                </p>
                                                                <p className="text-sm text-gray-600">
                                                                        {projects[0].role}
                                                                </p>
                                                        </div>
                                                        <div className="flex items-center justify-center w-screen mx-2 mb-8 overflow-hidden rounded h-80 sm:h-144">
                                                                <img
                                                                        src={projects[0].imageUrl}
                                                                        alt=""
                                                                        className="object-cover w-full sm:h-full sm:w-auto"
                                                                />
                                                        </div>
                                                </div> */}
                                        </Cards>
                                </div>
                        </div>
                        <button className="px-4 py-2 text-lg font-medium text-gray-800 duration-300 transform border-2 border-gray-800 w-min hover:scale-110 mt-36">
                                <p className="w-max">See more project</p>
                        </button>
                </div>
        );
};

export default Work;
