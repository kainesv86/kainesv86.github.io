import * as React from "react";

export interface TextFieldProps {
        placeholder: string;
        className?: string;
        type: "textfield" | "text";
        register?: any;
        name: string;
}

const TextField: React.FunctionComponent<TextFieldProps> = ({
        register,
        type = "text",
        className,
        placeholder,
        name,
}) => {
        if (type === "textfield")
                return (
                        <textarea
                                className={`w-full px-4 py-2 mb-4 shadow text-base font-medium border-2 rounded outline-none h-24 focus:border-gray-800 border-gray-50 ${className}`}
                                placeholder={placeholder}
                                cols={30}
                                rows={10}
                                defaultValue=""
                                {...register(name)}
                        ></textarea>
                );
        if (type === "text")
                return (
                        <input
                                className={`w-full h-12 px-4 py-2 mb-4 shadow text-base font-medium text-gray-800 border-2 rounded outline-none bg-gray-50 focus:border-gray-800 border-gray-50 ${className}`}
                                placeholder={placeholder}
                                type="text"
                                {...register(name)}
                        />
                );
        return null;
};

export default TextField;
