import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import ScrollingUp from "../components/common/scrollingUp";

function MyApp({ Component, pageProps }: AppProps) {
        return (
                <div className="relative flex flex-col w-full overflow-hidden bg-yellow-50 font-body">
                        <Navbar />
                        <Component {...pageProps} />
                        <div className="absolute bottom-3 right-3 sm:bottom-9 sm:right-9">
                                <ScrollingUp />
                        </div>
                </div>
        );
}
export default MyApp;
