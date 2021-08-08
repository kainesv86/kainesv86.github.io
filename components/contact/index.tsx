import * as React from "react";

import Form from "../form";

export interface ContactProps {}

const Contact: React.FunctionComponent<ContactProps> = () => {
        return (
                <div className="flex flex-col items-center flex-1 h-screen px-8 pt-8 bg-yellow-50">
                        <div className="flex flex-col">
                                <div className="mb-4 text-center">
                                        <p className="text-3xl font-bold text-trueGray-800">Contact</p>
                                        <p className="font-medium text-gray-700">
                                                If you want to get in touch you can sent me message below, I will
                                                response your message as soon as possible.
                                        </p>
                                </div>
                                <Form />
                        </div>
                </div>
        );
};

export default Contact;
