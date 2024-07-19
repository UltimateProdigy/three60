import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/layout";
import { useRouter } from "next/router";

const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const noNavbarRoutes = ["/login", "/"];
	const isNoNavbarRoute = noNavbarRoutes.includes(router.pathname);

	return isNoNavbarRoute ? (
		<main className={roboto.className}>
			<ChakraProvider>
				<Component {...pageProps} />
			</ChakraProvider>
		</main>
	) : (
		<main className={roboto.className}>
			<ChakraProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ChakraProvider>
		</main>
	);
}
