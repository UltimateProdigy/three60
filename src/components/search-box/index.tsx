import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { Search } from "tabler-icons-react";
import React from "react";

interface SearchProps {
	className?: string;
}

export default function SearchBox({ className }: SearchProps) {
	return (
		<div className={className}>
			<InputGroup>
				<InputLeftElement pointerEvents="none">
					<Search />
				</InputLeftElement>
				<Input type="text" placeholder="Search" />
			</InputGroup>
		</div>
	);
}
