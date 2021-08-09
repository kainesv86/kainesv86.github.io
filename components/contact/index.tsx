import * as React from "react";

import Form from "../form";
import Socials from "../common/socials";

export interface ContactProps {}

const Contact: React.FunctionComponent<ContactProps> = () => {
        return (
                <div className="flex flex-col items-center justify-center flex-1 h-screen px-8 pt-8 bg-yellow-50">
                        <div className="flex flex-col justify-center mb-0 sm:mb-4">
                                <div className="flex flex-col items-center mb-4 text-center">
                                        <p className="text-3xl font-bold sm:text-5xl text-trueGray-800">Contact</p>
                                        <p className="text-base font-medium text-gray-700 sm:text-2xl sm:w-172">
                                                If you want to get in touch you can sent me message below, I will
                                                response your message as soon as possible.
                                        </p>
                                </div>
                                <div className="flex flex-col justify-start w-full sm:flex-row">
                                        <div className="flex flex-col mb-4 sm:px-8 sm:py-12 sm:mb-0 sm:mr-16">
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
                                        <Form />
                                </div>
                        </div>
                        <Socials />
                </div>
        );
};

export default Contact;
