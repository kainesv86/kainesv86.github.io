import * as React from "react";
import TextField from "../common/textfield";
import { useForm } from "react-hook-form";

export interface FormProps {}

interface ContactProps {
        name: string;
        email: string;
        message: string;
}

const Form: React.FunctionComponent<FormProps> = () => {
        const { register, handleSubmit } = useForm<ContactProps>({
                defaultValues: { name: "", email: "", message: "" },
        });

        const onSubmit = (data: ContactProps) => {};

        return (
                <form onSubmit={handleSubmit(onSubmit)} className="sm:py-12 sm:w-132">
                        <p className="text-xl font-bold text-gray-800 sm:text-3xl">Send email message</p>
                        <div className="flex flex-col sm:flex-row">
                                <TextField
                                        name="name"
                                        register={register}
                                        type="text"
                                        placeholder="Your name"
                                        className="w-56 sm:mr-4"
                                />
                                <TextField name="email" register={register} type="text" placeholder="Your email" />
                        </div>
                        <TextField
                                name="message"
                                register={register}
                                type="textfield"
                                placeholder="Your message"
                                className="sm:h-48"
                        />
                        <div className="flex justify-center sm:justify-end">
                                <button
                                        className="px-4 py-2 mb-2 text-gray-800 duration-300 border-2 border-gray-800 rounded hover:scale-125 transform-none sm:transform-gpu"
                                        type="submit"
                                >
                                        Get in touch
                                </button>
                        </div>
                </form>
        );
};

export default Form;
