import React, { useEffect } from "react";
import {
	Button,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverFooter,
	PopoverHeader,
	PopoverTrigger,
	Portal,
	Spinner,
	useToast,
	Text,
	Box,
	Checkbox,
} from "@chakra-ui/react";
import { CirclePlus } from "tabler-icons-react";
import Sidebar from "@/components/sidebar";
import { useRouter } from "next/router";
import RightPage from "@/components/rightpage";
import EmptyState from "@/components/emptystate";
import useFetch from "@/hooks/useFetch";
import { three60Env } from "@/utils/functions";
import { Dots, Edit, Pencil, Square } from "tabler-icons-react";

interface Todo {
	id: string;
	title: string;
	description: string;
	completed: boolean;
	todo: string;
}

interface DataResponse {
	todos: Todo[];
}

const Todos: React.FC = () => {
	const router = useRouter();
	const toast = useToast();
	const popoverOptions = [
		{ id: 1, name: "Mark as Complete", icon: <Square /> },
		{ id: 2, name: "Edit", icon: <Edit /> },
		{ id: 3, name: "Delete", icon: <Pencil /> },
	];
	const userId =
		typeof window !== "undefined" ? localStorage.getItem("id") : null;
	const { data, loading, error } = useFetch<DataResponse>(
		`${three60Env.TODOS_BASE_URL}/user/${userId}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		}
	);

	if (loading) {
		return (
			<div className="flex justify-center items-center mt-[40vh]">
				<Spinner color="blue" />
			</div>
		);
	}

	if (error) {
		return <p className="text-red-700 text-lg">Error: {error.message}</p>;
	}

	return (
		<div className="h-full">
			<Sidebar />
			<div className="flex mt-[50px]">
				<div className="px-[200px] mr-[450px] mt-3">
					<p className="text-3xl font-extrabold">
						{data?.todos?.length ?? 0} Todos
					</p>
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
			<RightPage />
			{(!data || data.todos.length === 0) && (
				<EmptyState title="No Todos available" />
			)}
			{data?.todos?.map((todo) => (
				<div className="flex justify-between ml-[200px] mt-6 border w-[938px] p-4 bg-white">
					<div>
						<div className="font-bold cursor-pointer">
							{todo.todo}
						</div>
						<div>Completed: {todo.completed}</div>
					</div>
					<Popover>
						<PopoverTrigger>
							<div className="mt-3 cursor-pointer">
								<Dots />
							</div>
						</PopoverTrigger>
						<Portal>
							<PopoverContent>
								<PopoverArrow />
								<PopoverBody>
									{popoverOptions.map((popover) => (
										<Box
											_hover={{
												backgroundColor: "#e3e3e3",
											}}
											cursor="pointer"
											display="flex"
											gap={6}
											h="full"
											w="full"
											p={4}
										>
											{popover.icon}
											<Text>{popover.name}</Text>
										</Box>
									))}
								</PopoverBody>
							</PopoverContent>
						</Portal>
					</Popover>
				</div>
			))}
		</div>
	);
};

export default Todos;
