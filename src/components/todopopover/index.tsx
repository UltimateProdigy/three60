import {
	Popover,
	PopoverTrigger,
	Portal,
	PopoverContent,
	PopoverArrow,
	PopoverBody,
	Text,
	Box,
} from "@chakra-ui/react";
import { Dots, Edit, Pencil, Square } from "tabler-icons-react";

export const TodoPopover = () => {
	const popoverOptions = [
		{ id: 1, name: "Mark as Complete", icon: <Square /> },
		{ id: 2, name: "Edit", icon: <Edit /> },
		{ id: 3, name: "Delete", icon: <Pencil /> },
	];
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
	);
};
