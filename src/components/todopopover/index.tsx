import {
	Popover,
	PopoverTrigger,
	Portal,
	PopoverContent,
	PopoverArrow,
	PopoverBody,
	Text,
	Box,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import { Dots, Edit, Pencil, Square } from "tabler-icons-react";
import { DeleteTodoModal, EditTodoModal } from "../todomodal";

export const TodoPopover = () => {
	const toast = useToast();
	const {
		isOpen: isEditOpen,
		onOpen: onEditOpen,
		onClose: onEditClose,
	} = useDisclosure();
	const {
		isOpen: isDeleteOpen,
		onOpen: onDeleteOpen,
		onClose: onDeleteClose,
	} = useDisclosure();

	const popoverOptions = [
		{
			id: 1,
			name: "Mark as Complete",
			icon: <Square />,
			action: () =>
				toast({
					title: "Success",
					description: "Todo Marked",
					status: "info",
				}),
		},
		{ id: 2, name: "Edit", icon: <Edit />, action: onEditOpen },
		{ id: 3, name: "Delete", icon: <Pencil />, action: onDeleteOpen },
	];

	const handleEditTodo = (data: { name: string; description: string }) => {
		console.log("Edited todo:", data);
	};

	const handleDeleteTodo = () => {
		console.log("Deleted todo");
	};

	return (
		<div>
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
									key={popover.id}
									_hover={{
										backgroundColor: "#e3e3e3",
									}}
									cursor="pointer"
									display="flex"
									gap={6}
									h="full"
									w="full"
									p={4}
									onClick={popover.action}
								>
									{popover.icon}
									<Text>{popover.name}</Text>
								</Box>
							))}
						</PopoverBody>
					</PopoverContent>
				</Portal>
			</Popover>

			<EditTodoModal
				isOpen={isEditOpen}
				onClose={onEditClose}
				todo={{ name: "Title", description: "Description" }}
				onSubmit={handleEditTodo}
			/>

			<DeleteTodoModal
				isOpen={isDeleteOpen}
				onClose={onDeleteClose}
				onDelete={handleDeleteTodo}
			/>
		</div>
	);
};
