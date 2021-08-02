import React from "react";
import { SocialIconDto } from "./SocialIconDto.interface";

export interface FacebookProps extends SocialIconDto {}

const Facebook: React.FunctionComponent<FacebookProps> = ({ color = "none", className = "" }) => {
        return (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48">
                        <g clipPath="url(#clip0)">
                                <path
                                        className={`${className}`}
                                        fill={color}
                                        d="M24 .1C10.745.1 0 10.89 0 24.2 0 36.138 8.653 46.025 19.997 47.94v-18.71h-5.79v-6.734h5.79V17.53c0-5.76 3.504-8.9 8.622-8.9 2.452 0 4.558.184 5.17.265v6.021l-3.55.002c-2.783 0-3.32 1.328-3.32 3.277v4.297h6.64l-.865 6.733h-5.775V48.1C38.794 46.649 48 36.51 48 24.193 48 10.89 37.255.1 24 .1z"
                                ></path>
                        </g>
                        <defs>
                                <clipPath id="clip0">
                                        <path fill="#fff" d="M0 0H48V48H0z"></path>
                                </clipPath>
                        </defs>
                </svg>
        );
};

export default Facebook;
