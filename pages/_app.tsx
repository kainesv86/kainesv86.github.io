import * as React from "react";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";

import Navbar from "../components/navbar";
import ScrollingUp from "../components/common/scrollingUp";

import { ParallaxProvider } from "react-scroll-parallax";
import Aos from "aos";

function MyApp({ Component, pageProps }: AppProps) {
        React.useEffect(() => {
                Aos.init({ duration: 500 });
        });
        return (
                <div className="relative flex flex-col w-full overflow-hidden bg-yellow-50 font-body">
                        <Navbar />
                        <ParallaxProvider>
                                <Component {...pageProps} />
                        </ParallaxProvider>
                        <div className="absolute bottom-3 right-3 sm:bottom-12 sm:right-12" data-aos="fade-up">
                                <ScrollingUp />
                        </div>
                </div>
        );
}
export default MyApp;
