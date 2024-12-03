import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	Text,
	useToast,
	VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { authService } from "@/lib/appwrite";
import Logo from "../logo";

export default function RegisterForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const toast = useToast();
	const router = useRouter();

	const handleRegister = async (e: React.FormEvent) => {
		e.preventDefault();

		if (password.length < 8) {
			toast({
				title: "Weak Password",
				description: "Password must be at least 8 characters long",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
			return;
		}
		setIsLoading(true);
		try {
			await authService.createAccount(email, password);
			toast({
				title: "Registration Successful",
				description: "Your account has been created",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
			router.push("/login");
		} catch (error: any) {
			toast({
				title: "Registration Failed",
				description:
					error.message || "An error occurred during registration",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="center"
			minHeight="100vh"
			width="100%"
			bg="gray.100"
		>
			<VStack
				align="center"
				maxWidth="400px"
				width="100%"
				padding={6}
				borderRadius="md"
				bg="white"
				boxShadow="md"
				h="auto"
				py={8}
			>
				<Logo className="mt-6 font-bold" />
				<Text fontSize="xl" fontWeight="bold">
					Create Your Account
				</Text>

				<form onSubmit={handleRegister} style={{ width: "100%" }}>
					<VStack spacing={2} width="100%">
						<FormControl isRequired>
							<FormLabel>Email</FormLabel>
							<Input
								type="email"
								placeholder="Enter your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</FormControl>

						<FormControl isRequired>
							<FormLabel>Password</FormLabel>
							<Input
								type="password"
								placeholder="Create a strong password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</FormControl>

						<Button
							colorScheme="blue"
							type="submit"
							width="full"
							isLoading={isLoading}
                            mt={4}
						>
							Register
						</Button>

						<Button
							variant="outline"
							colorScheme="gray"
							width="full"
							onClick={() => router.push("/login")}
						>
							Already have an account? Login
						</Button>
					</VStack>
				</form>
			</VStack>
		</Box>
	);
}
