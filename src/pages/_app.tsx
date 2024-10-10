import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { TodoProvider } from "@/context/todoContext";

const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const noNavbarRoutes = ["/"];
	const isNoNavbarRoute = noNavbarRoutes.includes(router.pathname);

	return isNoNavbarRoute ? (
		<main>
			<UserProvider>
				<ChakraProvider>
					<Component {...pageProps} />
				</ChakraProvider>
			</UserProvider>
		</main>
	) : (
		<main>
			<UserProvider>
				<TodoProvider>
					<ChakraProvider>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</ChakraProvider>
				</TodoProvider>
			</UserProvider>
		</main>
	);
}
