import React from "react";
import {
	Button,
	FormControl,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Select,
	Textarea,
	useToast,
} from "@chakra-ui/react";
import { useTodo } from "@/context/todoContext";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}

interface TodoModalProps extends ModalProps {
	todo?: {
		name: string;
		description: string;
		status?: string;
	};
	onSubmit: (data: { name: string; description: string }) => void;
}

export const CreateTodoModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	const { addTodo } = useTodo();
	const toast = useToast();
	const [name, setName] = React.useState("");
	const [description, setDescription] = React.useState("");
	const [loading, setLoading] = React.useState(false);

	const handleSubmit = async () => {
		setLoading(true);
		if (!name || !description) {
			toast({
				title: "Error",
				description: "Please fill in all fields.",
				status: "error",
			});
			return;
		}
		const newTodo = {
			name,
			description,
			status: "IN-PROGRESS",
		};
		try {
			await addTodo(newTodo);
			toast({
				title: "Success",
				description: "Todo created successfully.",
				status: "success",
			});
			setLoading(false);
			onClose();
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to create todo.",
				status: "error",
			});
		}
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} size="xl">
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Create Todo</ModalHeader>
				<ModalCloseButton />
				<hr />
				<ModalBody mt={5} mb={5}>
					<FormControl>
						<Input
							border="none"
							background="whitesmoke"
							placeholder="Title"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</FormControl>
					<Textarea
						border="none"
						mt={6}
						background="whitesmoke"
						placeholder="Description"
						noOfLines={10}
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</ModalBody>
				<hr />
				<ModalFooter>
					<Button
						mr={3}
						onClick={onClose}
						border="2px solid whitesmoke"
						background="none"
						borderRadius="full"
					>
						Cancel
					</Button>
					<Button
						borderRadius="full"
						colorScheme="blue"
						onClick={handleSubmit}
						isLoading={loading}
					>
						Create
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export const EditTodoModal: React.FC<TodoModalProps> = ({
	isOpen,
	onClose,
	todo,
	onSubmit,
}) => {
	const [name, setName] = React.useState(todo?.name || "");
	const [description, setDescription] = React.useState(
		todo?.description || ""
	);
	const { todos } = useTodo();

	const handleSubmit = () => {
		onSubmit({ name, description });
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} size="xl">
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Edit Todo</ModalHeader>
				<ModalCloseButton />
				<hr />
				<ModalBody mt={5} mb={5}>
					<FormControl>
						<Input
							border="none"
							background="whitesmoke"
							placeholder="Title"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</FormControl>
					<Textarea
						border="none"
						mt={6}
						background="whitesmoke"
						placeholder="Description"
						noOfLines={10}
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<Select
						mt={6}
						placeholder="Select Status"
						background="whitesmoke"
						border="none"
					>
						{todos?.map((todo: any) => (
							<option value="option1">{todo.status}</option>
						))}
					</Select>
				</ModalBody>
				<hr />
				<ModalFooter>
					<Button
						mr={3}
						onClick={onClose}
						border="2px solid whitesmoke"
						background="none"
						borderRadius="full"
					>
						Cancel
					</Button>
					<Button
						borderRadius="full"
						colorScheme="blue"
						onClick={handleSubmit}
					>
						Save Changes
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export const DeleteTodoModal: React.FC<
	ModalProps & { onDelete: () => void; todo?: { status: string } }
> = ({ isOpen, onClose, onDelete, todo }) => {
	const handleDelete = () => {
		onDelete();
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} size="md">
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Delete Todo</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					Are you sure you want to delete this todo? This action
					cannot be undone.
				</ModalBody>
				<ModalFooter>
					<Button
						mr={3}
						onClick={onClose}
						border="2px solid whitesmoke"
						background="none"
						borderRadius="full"
					>
						Cancel
					</Button>
					<Button
						borderRadius="full"
						colorScheme="red"
						onClick={handleDelete}
						isDisabled={todo?.status === "TRASH"}
					>
						Delete
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
