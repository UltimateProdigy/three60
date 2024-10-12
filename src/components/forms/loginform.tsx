import { Box, Button, Text, useToast, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import bgImage from "../../../public/images/bg.jpg";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function LoginForm() {
	const { error } = useUser();
	const toast = useToast();
	const router = useRouter();

	const handleLogin = () => {
		router.push(`/api/auth/login?returnTo=${encodeURIComponent("/todos")}`);
	};

	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="center"
			minHeight="100vh"
			width="100%"
			backgroundImage={`url(${bgImage.src})`}
			backgroundSize="cover"
			backgroundPosition="center"
			backgroundRepeat="no-repeat"
		>
			<VStack
				spacing={4}
				align="center"
				maxWidth="400px"
				width="100%"
				padding={6}
				borderRadius="md"
			>
				<Text
					fontSize="50px"
					fontWeight="bold"
					textAlign="center"
					color="white"
				>
					Welcome To <span style={{ color: "#4673E4" }}>Three60</span>
				</Text>
				<Button
					width="100%"
					mt="100px"
					h={14}
					background="linear-gradient(90deg, rgba(0,15,36,1) 0%, rgba(35,123,209,1) 100%, rgba(255,0,194,1) 100%)"
					onClick={handleLogin}
					borderRadius="full"
					color="white"
					_hover={{
						background:
							"linear-gradient(90deg, rgba(0,15,36,1) 0%, rgba(35,176,209,1) 100%, rgba(255,0,194,1) 100%)",
					}}
				>
					Sign In
				</Button>
			</VStack>
		</Box>
	);
}
