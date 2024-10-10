import React, { useEffect, useState } from "react";
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
	Tag,
} from "@chakra-ui/react";
import { CirclePlus } from "tabler-icons-react";
import Sidebar from "@/components/sidebar";
import { useRouter } from "next/router";
import RightPage from "@/components/rightpage";
import EmptyState from "@/components/emptystate";
import { three60Env } from "@/utils/functions";
import { databases } from "@/lib/appwrite";
import { Dots, Edit, Pencil, Square } from "tabler-icons-react";
import { formatDate } from "@/utils/functions";
import { getStatusColor } from "@/components/statusColor";
import { useTodo } from "@/context/todoContext";

const Todos: React.FC = () => {
	const router = useRouter();
	const { todos } = useTodo();
	const popoverOptions = [
		{ id: 1, name: "Mark as Complete", icon: <Square /> },
		{ id: 2, name: "Edit", icon: <Edit /> },
		{ id: 3, name: "Delete", icon: <Pencil /> },
	];

	return (
		<div className="h-full">
			<Sidebar />
			<div className="flex mt-[50px]">
				<div className="px-[200px] mr-[450px] mt-3">
					<p className="text-3xl font-extrabold">
						{todos?.length} Todos
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
			{todos.map((todo: any) => (
				<div className="flex justify-between ml-[200px] mt-3 border w-[938px] p-4 bg-white">
					<div className="mr-[300px]" key={todo?.$id}>
						<div className="font-bold cursor-pointer">
							{todo?.name}
						</div>
						<div>{formatDate(todo?.$createdAt)}</div>
					</div>
					<div className="mt-3">
						<Tag
							borderRadius="full"
							colorScheme={getStatusColor(todo?.status)}
						>
							{todo?.status}
						</Tag>
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
