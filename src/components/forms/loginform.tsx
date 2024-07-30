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

	if (error) {
		toast({});
	}

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
				<Text fontSize="50px" fontWeight="bold" textAlign="center" color='white'>
					Welcome To <span style={{ color: "#4673E4" }}>Three60</span>
				</Text>
				<Button
					width="100%"
                    mt="100px"
					h={14}
					colorScheme="blue"
					onClick={handleLogin}
				>
					Sign In
				</Button>
			</VStack>
		</Box>
	);
}
