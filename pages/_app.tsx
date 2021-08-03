import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }: AppProps) {
        return (
                <div className="relative flex flex-col min-h-screen bg-yellow-50 font-body">
                        <Navbar />
                        <Component {...pageProps} />
                </div>
        );
}
export default MyApp;
