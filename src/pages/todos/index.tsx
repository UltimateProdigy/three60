import React, { useState } from "react";
import {
	Button,
	Spinner,
	Tag,
	useDisclosure,
	Box,
	Hide,
} from "@chakra-ui/react";
import { CirclePlus } from "tabler-icons-react";
import Sidebar from "@/components/sidebar";
import { RightPage } from "@/components/rightpage";
import { formatDate } from "@/utils/functions";
import { getStatusColor } from "@/components/statusColor";
import { useTodo } from "@/context/todoContext";
import EmptyState from "@/components/emptystate";
import { CreateTodoModal } from "@/components/todomodal";
import { TodoPopover } from "@/components/todopopover";
import { Pagination } from "@/components/pagination";
import { truncateText } from "@/components/truncateText";

const Todos: React.FC = () => {
	const { todos, loading } = useTodo();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [selectedTodo, setSelectedTodo] = useState<any>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const todosPerPage = 4;
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
			<Box className="md:ml-[200px]">
				<div className="flex flex-col md:flex-row mt-[50px] px-4 md:px-0">
					<div className="md:mr-[220px] mt-3">
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

				<Hide below="lg">
					<RightPage selectedTodo={selectedTodo} />
				</Hide>

				<div className="flex flex-col items-center md:items-start">
					{currentTodos.map((todo: any) => (
						<div
							key={todo?.$id}
							className="mt-3 border w-full md:w-[708px] p-4 bg-white mx-4 md:mx-0"
						>
							<div className="flex justify-between">
								<div
									className="mr-[100px] cursor-pointer"
									onClick={() => setSelectedTodo(todo)}
								>
									<div className="font-bold">
										{truncateText(todo?.name || "", 3)}
									</div>
									<div>{formatDate(todo?.$createdAt)}</div>
								</div>
								<div className="mt-3">
									<Tag
										borderRadius="full"
										colorScheme={getStatusColor(
											todo?.status
										)}
									>
										{todo?.status}
									</Tag>
								</div>

								<TodoPopover />
							</div>
						</div>
					))}
				</div>

				<Box className="pb-[130px] px-4 md:px-0">
					<Pagination
						todosPerPage={todosPerPage}
						totalTodos={todos.length}
						currentPage={currentPage}
						onPageChange={handlePageChange}
					/>
				</Box>
			</Box>
			<CreateTodoModal isOpen={isOpen} onClose={onClose} />
		</div>
	);
};

export default Todos;
