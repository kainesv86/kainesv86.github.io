import * as React from "react";

import Form from "../form";
import Socials from "../common/socials";
import { Parallax } from "react-scroll-parallax";

export interface ContactProps {}

const Contact: React.FunctionComponent<ContactProps> = () => {
        return (
                <div className="flex-1 bg-yellow-50">
                        <Parallax y={[-20, 20]}>
                                <div className="flex flex-col items-center justify-center px-8 pt-10 sm:pt-8">
                                        <div className="flex flex-col justify-center mb-0 sm:mb-4">
                                                <div
                                                        className="flex flex-col items-center mb-4 text-center"
                                                        data-aos="fade-down"
                                                >
                                                        <p className="text-3xl font-bold sm:text-5xl text-trueGray-800">
                                                                Contact
                                                        </p>
                                                        <p className="text-base font-medium text-gray-700 sm:text-2xl sm:w-172">
                                                                If you want to get in touch you can sent me message
                                                                below, I will response your message as soon as possible.
                                                        </p>
                                                </div>
                                                <div className="flex flex-col justify-start w-full sm:flex-row">
                                                        <div
                                                                className="flex flex-col mb-4 sm:px-8 sm:py-12 sm:mb-0 sm:mr-16"
                                                                data-aos={"fade-right"}
                                                        >
                                                                <p className="text-xl font-bold text-gray-800 sm:text-3xl">
                                                                        Contact Info
                                                                </p>
                                                                <div className="flex justify-between sm:flex-col">
                                                                        <div className="sm:mb-4">
                                                                                <p className="text-lg font-bold text-gray-700 sm:text-xl">
                                                                                        Address
                                                                                </p>
                                                                                <p className="text-base font-medium text-gray-700 sm:text-lg">
                                                                                        District 9, HCM City
                                                                                </p>
                                                                        </div>
                                                                        <div className="sm:mb-4">
                                                                                <p className="text-lg font-bold text-gray-700 sm:text-xl">
                                                                                        Phone
                                                                                </p>
                                                                                <p className="text-base font-medium text-gray-700 sm:text-lg">
                                                                                        (+84) 987709812
                                                                                </p>
                                                                        </div>
                                                                </div>
                                                                <div>
                                                                        <p className="text-lg font-bold text-gray-700 sm:text-xl">
                                                                                Email
                                                                        </p>
                                                                        <p className="text-base font-medium text-gray-700 sm:text-lg">
                                                                                kainesv86@gmail.com
                                                                        </p>
                                                                </div>
                                                        </div>
                                                        <div data-aos={"fade-left"}>
                                                                <Form />
                                                        </div>
                                                </div>
                                        </div>
                                        <div data-aos={"fade-up"}>
                                                <Socials />
                                        </div>
                                </div>
                        </Parallax>
                </div>
        );
};

export default Contact;
