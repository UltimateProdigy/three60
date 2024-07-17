import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  );
}
