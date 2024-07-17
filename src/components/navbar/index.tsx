import { useState } from "react";
import Logo from "../logo";
import SearchBox from "../search-box";
import { useRouter } from "next/router";

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
		{ id: 0, name: "Todos", route: "/todos", icon: "" },
		{ id: 1, name: "Notes", route: "/notes", icon: "" },
		{ id: 2, name: "Links", route: "/links", icon: "" },
	];
	const handleClick = (route: string) => {
		setActiveLink(route);
		router.push(route);
	};

	return (
		<div className="flex justify-between border">
			<div className="flex gap-20">
				<Logo fontSize="30px" props={{ mt: "17px" }} />
				<div className="flex cursor-pointer">
					{links.map((link) => (
						<div
							key={link.id}
							onClick={() => handleClick(link.route)}
							className={`p-2 ${
								activeLink === link.route
									? "text-blue-500 bg-blue-100 border-b-2 border-blue-500"
									: ""
							}`}
						>
							<div className="mt-5 px-4">{link.name}</div>
						</div>
					))}
				</div>
			</div>
			<SearchBox className="mt-6" />
		</div>
	);
}
