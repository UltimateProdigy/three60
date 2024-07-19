import { useState } from "react";
import Logo from "../logo";
import SearchBox from "../search-box";
import { useRouter } from "next/router";
import "../../styles/Home.module.css"

interface ILink {
	id: number;
	name: string;
	route: string;
	icon: string;
}

export default function Navbar() {
	const router = useRouter();
	const [activeLink, setActiveLink] = useState<string>("/todos");
	const links: ILink[] = [
		{ id: 0, name: "Todos", route: "/todos", icon: "/images/todo.svg" },
		{ id: 1, name: "Notes", route: "/notes", icon: "/images/note.svg" },
		{ id: 2, name: "Links", route: "/links", icon: "/images/link.svg" },
	];

	const handleClick = (route: string) => {
		setActiveLink(route);
		router.push(route);
	};

	return (
		<div className="flex justify-between border px-14 bg-white">
			<div className="flex gap-20">
				<Logo fontSize="30px" props={{ mt: "17px" }} fontWeight="bold" />
				<div className="flex cursor-pointer">
					{links.map((link) => (
						<div
							key={link.id}
							onClick={() => handleClick(link.route)}
							className={`flex items-center p-2 mr-5 ${
								activeLink === link.route
									? "text-blue-500 border-b-2 border-blue-500"
									: ""
							}`}
						>
							<div className="flex items-center gap-1">
								<img
									src={link.icon}
									alt="icon"
									className={`w-5 h-5 ${
										activeLink === link.route
											? "filter-blue"
											: ""
									} ${link.name === "Todos" ? "mt-2" : ""}`}
								/>
								<div className="mt-1 px-2">{link.name}</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<SearchBox className="mt-4" />
		</div>
	);
}
