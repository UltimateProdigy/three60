import { useTodo } from "@/context/todoContext";
import React, { useState } from "react";

interface Ilinks {
	id: number;
	name: string;
	number: string;
	color: string;
	bgColor: string;
}

export default function Sidebar() {
	const [activeLink, setActiveLink] = useState<string>("All Todos");
	const { todos } = useTodo();

	const links: Ilinks[] = [
		{
			id: 1,
			name: "All Todos",
			number: todos.length,
			color: "#4673E4",
			bgColor: "#9cb4f0",
		},
		{
			id: 2,
			name: "Backlog",
			number: todos?.filter((todo: any) => todo?.status === "BACKLOG")
				.length,
			color: "#97A6AE",
			bgColor: "#c3ccd0",
		},
		{
			id: 3,
			name: "In Progress",
			number: todos?.filter((todo: any) => todo?.status === "IN-PROGRESS")
				.length,
			color: "#4673E4",
			bgColor: "#9cb4f0",
		},
		{
			id: 4,
			name: "Finished",
			number: todos?.filter((todo: any) => todo?.status === "COMPLETED")
				.length,
			color: "#28BA63",
			bgColor: "#a7ecc3",
		},
		{
			id: 5,
			name: "Overdue",
			number: todos?.filter((todo: any) => todo?.status === "OVERDUE")
				.length,
			color: "#C9981A",
			bgColor: "#f1d58f",
		},
		{
			id: 6,
			name: "Trash",
			number: todos?.filter((todo: any) => todo?.status === "TRASH")
				.length,
			color: "#F20101",
			bgColor: "#fe7e7e",
		},
	];

	return (
		<div className="fixed md:absolute md:left-[60px] md:top-[140px] bottom-0 left-0 right-0 md:w-[70px] h-[70px] md:h-[470px] sm:rounded-t-[40px] md:rounded-[40px] flex md:flex-col items-center justify-center bg-white border z-50">
			<div className="flex md:flex-col items-center justify-between w-full px-4 md:px-0 overflow-x-auto md:overflow-x-visible">
				{links.map((link) => (
					<div
						onClick={() => setActiveLink(link.name)}
						key={link.id}
						className={`flex md:flex-col items-center cursor-pointer md:w-[70px] py-2 min-w-fit px-2 md:px-0 ${
							activeLink === link.name
								? "md:border-l-2 border-t-2 md:border-t-0 border-blue-500 bg-[#f5f5f5]"
								: ""
						}`}
					>
						<p className="text-xs whitespace-nowrap">{link.name}</p>
						<div
							style={{ backgroundColor: link.bgColor }}
							className="w-[25px] h-[25px] rounded-[25px] flex items-center justify-center md:mt-2 ml-2 md:ml-0"
						>
							<p style={{ color: link.color, fontSize: "12px" }}>
								{link.number}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
