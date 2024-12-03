import React from "react";
import { Box } from "@chakra-ui/react";
import SidePage from "@/components/sidepage/sidepage";
import LoginForm from "@/components/forms/loginform";
import RegisterForm from "@/components/forms/registerform";

const Register = () => {
	return (
		<div className="flex flex-col md:flex-row h-screen">
			<div className="hidden md:block md:w-1/2">
				<SidePage />
			</div>
			<div className="w-full md:w-1/2 flex items-center justify-center">
				<RegisterForm />
			</div>
		</div>
	);
};

export default Register;
