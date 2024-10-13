import React, { useState } from "react";
import { Button, Spinner, Tag, useDisclosure } from "@chakra-ui/react";
import { CirclePlus } from "tabler-icons-react";
import Sidebar from "@/components/sidebar";
import RightPage from "@/components/rightpage";
import { formatDate } from "@/utils/functions";
import { getStatusColor } from "@/components/statusColor";
import { useTodo } from "@/context/todoContext";
import EmptyState from "@/components/emptystate";
import {
	CreateTodoModal,
	DeleteTodoModal,
	EditTodoModal,
} from "@/components/todomodal";
import { TodoPopover } from "@/components/todopopover";
import { Pagination } from "@/components/pagination";

const Todos: React.FC = () => {
	const { todos, loading } = useTodo();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [selectedTodo, setSelectedTodo] = useState<any>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const todosPerPage = 5;
	const indexOfLastTodo = currentPage * todosPerPage;
	const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
	const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
	const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

	if (!todos) {
		return <EmptyState title="No Todos available" />;
	}

	if (loading) {
		return (
			<div className="flex justify-center mt-[40vh]">
				<Spinner color="blue" />
			</div>
		);
	}

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
					onClick={onOpen}
				>
					Create Task
				</Button>
			</div>
			<RightPage />
			{currentTodos.map((todo: any) => (
				<div
					key={todo?.$id}
					className="flex justify-between ml-[200px] mt-3 border w-[938px] p-4 bg-white"
				>
					<div className="mr-[300px]">
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
					<TodoPopover />
				</div>
			))}
			<div className="ml-[200px] mt-4 w-[938px]">
				<Pagination
					todosPerPage={todosPerPage}
					totalTodos={todos.length}
					currentPage={currentPage}
					onPageChange={handlePageChange}
				/>
			</div>
			<CreateTodoModal isOpen={isOpen} onClose={onClose} />
			<EditTodoModal
				isOpen={isEditModalOpen}
				onClose={() => setIsEditModalOpen(false)}
				todo={selectedTodo}
				onSubmit={() => null}
			/>
			<DeleteTodoModal
				isOpen={isDeleteModalOpen}
				onClose={() => setIsDeleteModalOpen(false)}
				onDelete={() => null}
			/>
		</div>
	);
};

export default Todos;
