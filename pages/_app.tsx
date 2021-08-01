import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }: AppProps) {
        return (
                <div className="flex flex-col min-h-screen font-bogart">
                        <Navbar />
                        <Component {...pageProps} />
                </div>
        );
}
export default MyApp;
