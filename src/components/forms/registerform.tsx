import {
	Box,
	Button,
	Input,
	InputGroup,
	InputRightElement,
	Text,
} from "@chakra-ui/react";
import { three60Env } from "@/utils/functions";
import { useFormik } from "formik";
import React from "react";
import { useToast } from "@chakra-ui/react";
import Logo from "../logo";
import { useRouter } from "next/router";
import axios from "axios";

export default function RegisterForm() {
	const toast = useToast();
	const router = useRouter();
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);
	const formik = useFormik({
		initialValues: {
			username: "",
			password: "",
		},
		onSubmit: async (values) => {
			try {
				const response = await axios.post(
					three60Env.REGISTER_BASE_URL,
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
				if (response.status === 201) {
					toast({
						position: "bottom",
						status: "success",
						description: "Registration Succesful, proceed to Login",
					});
					router.push("/login");
				}
			} catch (error) {
				toast({
					position: "bottom",
					status: "error",
					description: `${error}`,
				});
			}
		},
	});
	console.log(formik.values);

	return (
		<Box mt="120px" ml="150px">
			<Logo fontWeight="bold" props={{ mt: "23px" }} />
			<Text fontSize="30px" fontWeight="bold" mb={3}>
				Create Account
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
						loadingText="Submitting"
						background="blue"
						color="white"
						type="submit"
					>
						Register
					</Button>
					<Button mt={4} mb={4} w="120%" h={14} color="blue">
						<img
							style={{ paddingRight: "10px" }}
							src="images/google.svg"
							alt="google"
						/>
						Sign up with Google
					</Button>
				</form>
				<div>
					Have you registered?,{" "}
					<span
						style={{ color: "blue", cursor: "pointer" }}
						onClick={() => router.push("/login")}
					>
						Sign in here.
					</span>{" "}
				</div>
			</Box>
		</Box>
	);
}
