import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { Search } from "tabler-icons-react";
import React from "react";

interface SearchProps {
	className?: string;
}

export default function SearchBox({ className }: SearchProps) {
	return (
		<div className={className}>
			<InputGroup w="500px">
				<InputLeftElement pointerEvents="none" mt={1}>
					<Search />
				</InputLeftElement>
				<Input bg="#F6F7FB" h="50px" borderRadius="25px" type="text" placeholder="Search terms" />
			</InputGroup>
		</div>
	);
}
