import React from "react";
import { SocialIconDto } from "./SocialIconDto.interface";

export interface GithubProps extends SocialIconDto {}

const Github: React.FunctionComponent<GithubProps> = ({ color = "none", classNamePath = "", classNameSvg = "" }) => {
        return (
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="none"
                        viewBox="0 0 48 48"
                        className={classNameSvg}
                >
                        <path
                                className={classNamePath}
                                fill={color}
                                d="M44.78 12.54c-2.146-3.677-5.057-6.588-8.734-8.734C32.37 1.66 28.354.587 24 .587c-4.355 0-8.37 1.073-12.047 3.219-3.677 2.146-6.588 5.057-8.734 8.734C1.073 16.217 0 20.233 0 24.586c0 5.23 1.526 9.932 4.578 14.11 3.052 4.176 6.995 7.067 11.828 8.67.562.105.979.032 1.25-.218.27-.25.406-.562.406-.937l-.016-1.687c-.01-1.063-.016-1.99-.016-2.781l-.719.124c-.458.084-1.036.12-1.734.11a13.225 13.225 0 01-2.172-.219 4.854 4.854 0 01-2.093-.937A3.965 3.965 0 019.937 38.9l-.313-.72c-.208-.478-.536-1.01-.984-1.593-.448-.584-.9-.979-1.36-1.187l-.218-.157a2.297 2.297 0 01-.406-.375 1.715 1.715 0 01-.281-.438c-.063-.146-.01-.266.156-.36.167-.094.469-.14.906-.14l.625.094c.417.084.932.333 1.547.75.614.416 1.12.958 1.515 1.624.48.855 1.057 1.506 1.735 1.954.677.448 1.359.671 2.046.671.688 0 1.281-.052 1.782-.155.5-.105.968-.261 1.406-.47.187-1.396.698-2.469 1.53-3.218a21.399 21.399 0 01-3.202-.563c-.948-.25-1.927-.656-2.937-1.22-1.011-.561-1.85-1.26-2.516-2.093-.667-.833-1.214-1.927-1.64-3.28-.427-1.355-.641-2.918-.641-4.688 0-2.521.823-4.667 2.469-6.438-.771-1.895-.698-4.02.218-6.374.605-.188 1.5-.047 2.688.421 1.188.47 2.057.87 2.61 1.204.552.333.994.615 1.328.843a22.187 22.187 0 016-.812c2.062 0 4.062.27 6 .812l1.187-.75c.812-.5 1.771-.958 2.875-1.375 1.104-.416 1.948-.53 2.532-.343.937 2.354 1.02 4.479.25 6.374 1.645 1.771 2.468 3.917 2.468 6.438 0 1.77-.214 3.338-.64 4.703-.427 1.365-.979 2.458-1.656 3.281-.677.823-1.521 1.516-2.531 2.078-1.01.563-1.99.969-2.938 1.219-.948.25-2.016.438-3.203.563 1.083.937 1.624 2.416 1.624 4.437v6.593c0 .375.13.688.391.937.26.25.672.323 1.235.219 4.833-1.604 8.776-4.495 11.828-8.672C46.473 34.517 48 29.814 48 24.585c-.001-4.353-1.075-8.368-3.22-12.045z"
                        ></path>
                </svg>
        );
};

export default Github;