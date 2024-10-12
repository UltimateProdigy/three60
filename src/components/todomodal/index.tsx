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
	Textarea,
	useDisclosure,
} from "@chakra-ui/react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
}

interface TodoModalProps extends ModalProps {
	todo?: {
		name: string;
		description: string;
	};
	onSubmit: (data: { name: string; description: string }) => void;
}

export const CreateTodoModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	const [name, setName] = React.useState("");
	const [description, setDescription] = React.useState("");

	const handleSubmit = () => {
		onClose();
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
	ModalProps & { onDelete: () => void }
> = ({ isOpen, onClose, onDelete }) => {
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
					>
						Delete
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
