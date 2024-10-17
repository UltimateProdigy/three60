import React from "react";
import EmptyState from "../emptystate";
import { Box, Tag, Text } from "@chakra-ui/react";
import { getStatusColor } from "../statusColor";
import { Clock } from "../icons";
import { useTodo } from "@/context/todoContext";

interface RightPageProps {
	selectedTodo: any;
}

export const RightPage: React.FC<RightPageProps> = ({ selectedTodo }) => {
	const { todos } = useTodo();

	if (!selectedTodo) {
		return (
			<div className="absolute h-[90vh] w-[700px] top-[80px] bg-white right-0">
				<EmptyState
					title="No todo/note is currently opened until, you create a task"
					className="mt-[35vh]"
				/>
			</div>
		);
	}

	return (
		<div className="absolute h-[90vh] w-[700px] top-[80px] bg-white right-0 p-8 pt-[100px]">
			<div className="flex justify-between">
				<div className="flex gap-3">
					<Tag
						colorScheme={getStatusColor(selectedTodo?.status)}
						borderRadius="full"
						paddingInline={2}
						h={7}
					>
						{
							todos.filter(
								(todo: any) =>
									todo.status === selectedTodo?.status
							).length
						}
					</Tag>
					<Text color={getStatusColor(selectedTodo?.status)}>
						{selectedTodo?.status}
					</Text>
				</div>

				<p className="text-gray-600 mb-6">
					<Clock />
					<span className="ml-2">
						{new Date(
							selectedTodo?.$createdAt
						).toLocaleDateString()}
					</span>
				</p>
			</div>

			<h1 className="text-4xl font-bold mb-4 text-gray-600">
				{selectedTodo?.name}
			</h1>
			<p className="text-md text-gray-600">{selectedTodo?.description}</p>
		</div>
	);
};
