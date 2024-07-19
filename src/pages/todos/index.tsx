import React, { useEffect } from "react";
import { Button, useToast } from "@chakra-ui/react";
import { CirclePlus } from "tabler-icons-react";
import Sidebar from "@/components/sidebar";
import { useRouter } from "next/router";

const Todos = () => {
	const router = useRouter();
	const toast = useToast();

	useEffect(() => {
		const token = localStorage.getItem("authToken");
		if (!token) {
			router.push("/login");
			toast({
				position: "bottom",
				status: "info",
				description: "Please Login with Credentials",
			});
		}
	}, [router]);

	return (
		<div>
			<Sidebar />
			<div className="flex mt-[50px]">
				<div className="px-[200px] mr-[300px] mt-3">
					<p className="text-3xl font-extrabold">0 Todos</p>
				</div>
				<Button
					leftIcon={<CirclePlus />}
					bgColor="#28BA63"
					color="white"
					p="30px"
					fontWeight="light"
					_hover={{
						bgColor: "#219a52",
					}}
				>
					Create Task
				</Button>
			</div>
		</div>
	);
};

export default Todos;
