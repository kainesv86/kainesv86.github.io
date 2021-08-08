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

        const onSubmit = (data: ContactProps) => console.log(data);

        return (
                <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                                className="w-full h-12 px-4 py-2 mb-4 text-xl font-medium text-gray-800 rounded bg-gray-50"
                                placeholder={"Your name"}
                                type="text"
                                {...register("name")}
                        />
                        <input
                                className="w-full h-12 px-4 py-2 mb-4 text-xl font-medium text-gray-800 rounded bg-gray-50"
                                placeholder={"Your email"}
                                type="text"
                                {...register("email")}
                        />
                        <textarea
                                className="w-full px-4 py-2 mb-4 text-xl font-medium text-gray-800 h-36"
                                placeholder={"Your message"}
                                cols={30}
                                rows={10}
                                defaultValue=""
                                {...register("message")}
                        ></textarea>
                        <div className="flex justify-end">
                                <button
                                        className="px-4 py-2 text-gray-800 border-2 border-gray-800 rounded"
                                        type="submit"
                                >
                                        Get in touch
                                </button>
                        </div>
                </form>
        );
};

export default Form;
