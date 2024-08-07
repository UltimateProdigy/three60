import { useState } from "react";
import React from "react";
import Logo from "../logo";
import SearchBox from "../search-box";
import { useRouter } from "next/router";
import "../../styles/Home.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
	Avatar,
	AvatarBadge,
	Button,
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	IconButton,
	useDisclosure,
	Box,
	Flex,
	HStack,
	VStack,
	Text,
	Image,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
} from "@chakra-ui/react";
import { Menu } from "tabler-icons-react";

interface ILink {
	id: number;
	name: string;
	route: string;
	icon: string;
}

export default function Navbar() {
	const { user, error, isLoading } = useUser();
	const router = useRouter();
	const [activeLink, setActiveLink] = useState<string>("/todos");
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleLogout = () => {
		router.push(`/api/auth/logout?returnTo=${encodeURIComponent("/")}`);
	};

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
		<>
			<Box
				display={{ base: "none", md: "flex" }}
				justifyContent="space-between"
				className="border px-14 bg-white"
			>
				<div className="flex gap-20">
					<Logo
						fontSize="30px"
						props={{ mt: "17px" }}
						fontWeight="bold"
					/>
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
										} ${
											link.name === "Todos" ? "mt-2" : ""
										}`}
									/>
									<div className="mt-1 px-2">{link.name}</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="flex">
					<SearchBox className="mt-4 mr-8" />
					<Popover>
						<PopoverTrigger>
							<Avatar
								src={`${user?.picture}`}
								mt={4}
								name={`${user?.name}`}
								cursor="pointer"
							>
								<AvatarBadge boxSize="1.25em" bg="green.500" />
							</Avatar>
						</PopoverTrigger>
						<PopoverContent>
							<PopoverArrow />
							<PopoverCloseButton />
							<PopoverHeader fontWeight="bold">
								{user?.name}
							</PopoverHeader>
							<PopoverBody>
								<Button
									w="full"
									colorScheme="blue"
									onClick={handleLogout}
								>
									Log Out
								</Button>
							</PopoverBody>
						</PopoverContent>
					</Popover>
				</div>
			</Box>

			<Box
				display={{ base: "flex", md: "none" }}
				justifyContent="space-between"
				p="4"
				bg="white"
				className="border"
			>
				<Logo
					fontSize="24px"
					fontWeight="bold"
					props={{ mt: "19px" }}
				/>
				<IconButton
					aria-label="Open Menu"
					icon={<Menu />}
					onClick={onOpen}
					mt={4}
				/>
				<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
					<DrawerOverlay />
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerHeader>
							<Popover>
								<PopoverTrigger>
									<Avatar
										src={`${user?.picture}`}
										name={`${user?.name}`}
										cursor="pointer"
									>
										<AvatarBadge
											boxSize="1.25em"
											bg="green.500"
										/>
									</Avatar>
								</PopoverTrigger>
								<PopoverContent>
									<PopoverArrow />
									<PopoverCloseButton />
									<PopoverHeader fontWeight="bold">
										{user?.name}
									</PopoverHeader>
									<PopoverBody>
										<Button
											w="full"
											colorScheme="blue"
											onClick={handleLogout}
										>
											Log Out
										</Button>
									</PopoverBody>
								</PopoverContent>
							</Popover>
						</DrawerHeader>
						<DrawerBody>
							<VStack spacing="20px">
								{links.map((link) => (
									<Flex
										key={link.id}
										onClick={() => handleClick(link.route)}
										w="full"
										className={`p-2 ${
											activeLink === link.route
												? "text-blue-500 border-b-2 border-blue-500"
												: ""
										}`}
										cursor="pointer"
									>
										<HStack spacing="10px" w="full">
											<Image
												src={link.icon}
												alt="icon"
												boxSize="20px"
												className={
													activeLink === link.route
														? "filter-blue"
														: ""
												}
											/>
											<Text mt="1px" px="2">
												{link.name}
											</Text>
										</HStack>
									</Flex>
								))}
								<SearchBox className="w-[50px]" />
							</VStack>
						</DrawerBody>
					</DrawerContent>
				</Drawer>
			</Box>
		</>
	);
}
