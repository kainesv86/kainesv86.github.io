import * as React from "react";

export interface TextFieldProps {}

const TextField: React.FunctionComponent<TextFieldProps> = () => {
        return (
                <div>
                        <input type="text" />
                </div>
        );
};

export default TextField;
