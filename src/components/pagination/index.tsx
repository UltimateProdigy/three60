import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@chakra-ui/react";

interface PaginationProps {
	todosPerPage: number;
	totalTodos: number;
	currentPage: number;
	onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
	todosPerPage,
	totalTodos,
	currentPage,
	onPageChange,
}) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
		pageNumbers.push(i);
	}

	const maxPageNumbersToShow = 5;
	const halfMaxPageNumbers = Math.floor(maxPageNumbersToShow / 2);

	let startPage = Math.max(1, currentPage - halfMaxPageNumbers);
	let endPage = Math.min(
		pageNumbers.length,
		startPage + maxPageNumbersToShow - 1
	);

	if (endPage - startPage + 1 < maxPageNumbersToShow) {
		startPage = Math.max(1, endPage - maxPageNumbersToShow + 1);
	}

	const visiblePageNumbers = pageNumbers.slice(startPage - 1, endPage);

	return (
		<div className="flex justify-center mt-10">
			<div className="flex items-center">
				<div>
					<Button
						className="px-3 py-2 mr-4 bg-blue-500 text-white hover:bg-gray-100 hover:text-blue-500 disabled:opacity-50 border-2 hover:border-blue-500 rounded-full"
						onClick={() => onPageChange(currentPage - 1)}
						isDisabled={currentPage === 1}
						leftIcon={<ChevronLeft size={20} />}
						bg="#2468EB"
						color="white"
						border="none"
					>
						Previous
					</Button>
				</div>
				{visiblePageNumbers.map((number) => (
					<div key={number}>
						<button
							className={`px-3 py-2 rounded-full ml-1 mr-1 border-solid ${
								currentPage === number
									? "bg-blue-500 text-white"
									: "bg-white text-blue-500 border-solid border-gray border-2 hover:bg-gray-100"
							}`}
							onClick={() => onPageChange(number)}
						>
							{number}
						</button>
					</div>
				))}
				<div>
					<Button
						className="px-3 py-2 ml-4 bg-blue-500 text-white hover:bg-gray-100 hover:text-blue-500 disabled:opacity-50 border-2 hover:border-blue-500 rounded-full"
						onClick={() => onPageChange(currentPage + 1)}
						isDisabled={currentPage === pageNumbers.length}
						rightIcon={<ChevronRight size={20} />}
						bg="#2468EB"
						color="white"
						border="none"
					>
						Next
					</Button>
				</div>
			</div>
		</div>
	);
};
