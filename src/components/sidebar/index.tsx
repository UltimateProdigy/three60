import { useTodo } from "@/context/todoContext";
import { databases } from "@/lib/appwrite";
import { three60Env } from "@/utils/functions";
import React, { useEffect, useState } from "react";

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
	const handleClick = (name: string) => {
		setActiveLink(name);
	};

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
			number: todos?.filter((todo: any) => todo.status === "BACKLOG")
				.length,
			color: "#97A6AE",
			bgColor: "#c3ccd0",
		},
		{
			id: 3,
			name: "In Progress",
			number: todos?.filter((todo: any) => todo.status === "IN-PROGRESS")
				.length,
			color: "#4673E4",
			bgColor: "#9cb4f0",
		},
		{
			id: 4,
			name: "Finished",
			number: todos?.filter((todo: any) => todo.status === "COMPLETED")
				.length,
			color: "#28BA63",
			bgColor: "#a7ecc3",
		},
		{
			id: 5,
			name: "Overdue",
			number: todos?.filter((todo: any) => todo.status === "OVERDUE")
				.length,
			color: "#C9981A",
			bgColor: "#f1d58f",
		},
		{
			id: 6,
			name: "Trash",
			number: todos?.filter((todo: any) => todo.status === "TRASH")
				.length,
			color: "#F20101",
			bgColor: "#fe7e7e",
		},
	];

	return (
		<div className="border w-[70px] h-[470px] rounded-[40px] absolute left-[60px] top-[200px] flex flex-col items-center justify-center bg-white">
			{links.map((link) => (
				<div
					onClick={() => handleClick(link.name)}
					key={link.id}
					className={`flex flex-col items-center cursor-pointer w-[70px] py-2 ${
						activeLink === link.name
							? "border-l-2 border-blue-500 bg-[#f5f5f5]"
							: ""
					}`}
				>
					<p className="text-xs">{link.name}</p>
					<div
						style={{ backgroundColor: link.bgColor }}
						className="w-[25px] h-[25px] rounded-[25px] flex items-center justify-center mt-2"
					>
						<p style={{ color: link.color, fontSize: "12px" }}>
							{link.number}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
