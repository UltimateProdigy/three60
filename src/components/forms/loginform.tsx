import {
	Box,
	Button,
	Input,
	InputGroup,
	InputRightElement,
	Text,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useState } from "react";
import Logo from "../logo";
import { useRouter } from "next/router";
import { three60Env } from "@/utils/functions";
import axios from "axios";

export default function LoginForm() {
	const toast = useToast();
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);
	const formik = useFormik({
		initialValues: {
			username: "",
			password: "",
		},
		onSubmit: async (values) => {
			try {
				const response = await axios.post(
					three60Env.LOGIN_BASE_URL,
					{
						username: values.username,
						password: values.password,
					},
					{
						headers: {
							"Content-Type": "application/json",
						},
					}
				);
				setLoading(true);
				if (response.status === 200) {
					const token = response.data.token;
					const id = response.data.id;
					localStorage.setItem("authToken", token);
					localStorage.setItem("id", id);
					toast({
						position: "bottom",
						status: "success",
						description: "Logged In Successfully",
					});
					router.push("/todos");
				}
			} catch (error) {
				toast({
					position: "bottom",
					status: "error",
					description: "Error, Please Try Again",
				});
				console.error("Error logging in:", error);
			}
		},
	});
	console.log(formik.values);

	return (
		<Box mt="120px" ml="10vw">
			<Logo fontWeight="bold" props={{ mt: "23px" }} />
			<Text fontSize="30px" fontWeight="bold" mb={3}>
				Welcome Back
			</Text>
			<Box w="full">
				<form onSubmit={formik.handleSubmit}>
					<label htmlFor="email">Username</label>
					<Input
						backgroundColor="rgba(0, 0, 0, 0.11)"
						mb={4}
						w="120%"
						h={14}
						id="username"
						name="username"
						type="text"
						placeholder="username"
						onChange={formik.handleChange}
						value={formik.values.username}
					/>
					<label htmlFor="password">Password</label>
					<InputGroup w="120%">
						<Input
							backgroundColor="rgba(0, 0, 0, 0.11)"
							mb={4}
							h={14}
							w="120%"
							id="password"
							name="password"
							placeholder="password"
							type={show ? "text" : "password"}
							onChange={formik.handleChange}
							value={formik.values.password}
						/>
						<InputRightElement width="4.5rem">
							<Button
								h="1.75rem"
								size="sm"
								mt={4}
								onClick={handleClick}
							>
								{show ? "Hide" : "Show"}
							</Button>
						</InputRightElement>
					</InputGroup>

					<Button
						mt={4}
						w="120%"
						h={14}
						background="blue"
						color="white"
						type="submit"
						isLoading={loading}
					>
						Sign In
					</Button>
					<Button
						mt={4}
						mb={4}
						w="120%"
						h={14}
						color="blue"
						as="a"
						href="/api/auth/login"
					>
						<img
							style={{ paddingRight: "10px" }}
							src="images/google.svg"
							alt="google"
						/>
						Sign In with Google
					</Button>
				</form>
				<div>
					Not Signed Up?,{" "}
					<span
						style={{ color: "blue", cursor: "pointer" }}
						onClick={() => router.push("/")}
					>
						Create Account here.
					</span>{" "}
				</div>
			</Box>
		</Box>
	);
}
