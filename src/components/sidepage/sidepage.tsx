import React from "react";
import { Box, HStack, Text } from "@chakra-ui/react";

const SidePage = () => {
	return (
		<Box>
			<Box backgroundColor="#2468EB" w="50vw" h="100vh">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="73"
					height="74"
					viewBox="0 0 73 74"
					fill="none"
				>
					<circle
						cx="23"
						cy="24"
						r="50"
						fill="#859CD9"
						fill-opacity="0.47"
					/>
					<circle
						cx="23"
						cy="24"
						r="50"
						fill="#859CD9"
						fill-opacity="0.47"
					/>
					<circle
						cx="23"
						cy="24"
						r="50"
						fill="#859CD9"
						fill-opacity="0.47"
					/>
				</svg>
				<Text
					color="white"
					fontSize="47px"
					fontWeight="600"
					pt="70px"
					pl="70px"
				>
					Track how far <br />
					you’ve gone
				</Text>
				<HStack spacing={6}>
					<Box
						backgroundColor="#FFF"
						borderRadius="5px"
						w="144px"
						h="105px"
						mt={6}
						ml="70px"
					>
						<Box ml="95px">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="44"
								height="39"
								viewBox="0 0 44 39"
								fill="none"
							>
								<path
									d="M43.7334 0.429183L22.7405 38.3013L0.438697 1.18489L43.7334 0.429183Z"
									fill="#2468EB"
									fill-opacity="0.81"
								/>
							</svg>
						</Box>
						<Box display="flex" justifyContent="space-evenly">
							<Box
								w="35px"
								h="35px"
								backgroundColor="rgba(70, 115, 228, 0.10)"
								borderRadius="50px"
								display="flex"
								justifyContent="center"
								pt="10px"
								ml="-25px"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="13"
									viewBox="0 0 16 13"
									fill="none"
								>
									<path
										d="M3.8814 0.000577159L1.75957 1.89462L0.931536 1.15616L0 1.9852L1.2938 3.13905L1.75957 3.53482L2.22534 3.13847L4.81294 0.830772L3.8814 0V0.000577159ZM6.93477 0.992888V2.14674H15.3445V0.992888H6.93477ZM3.8814 4.61598L1.75957 6.5106L0.931536 5.76983L0 6.6006L1.2938 7.75445L1.75957 8.15022L2.22534 7.75388L4.81294 5.44617L3.8814 4.6154V4.61598ZM6.93477 5.60829V6.76214H15.3445V5.60829H6.93477ZM3.8814 9.23138L1.75957 11.1254L0.931536 10.387L0 11.216L1.2938 12.3699L1.75957 12.7656L2.22534 12.3693L4.81294 10.0616L3.8814 9.2308V9.23138ZM6.93477 10.2237V11.3775H15.3445V10.2237H6.93477Z"
										fill="#4673E4"
									/>
								</svg>
							</Box>
							<Text
								ml="-25px"
								pt={2}
								color="#5F5F60"
								fontSize="14px"
								fontWeight="700"
							>
								TODOS
							</Text>
						</Box>
					</Box>
					<Box
						backgroundColor="#FFF"
						borderRadius="5px"
						w="144px"
						h="105px"
						mt={6}
					>
						<Box
							display="flex"
							justifyContent="space-evenly"
							mt={9}
						>
							<Box
								w="35px"
								h="35px"
								backgroundColor="rgba(70, 115, 228, 0.10)"
								borderRadius="50px"
								display="flex"
								justifyContent="center"
								pt="10px"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="13"
									viewBox="0 0 16 13"
									fill="none"
								>
									<path
										d="M0 0V12.7656H9.57816L15.3445 7.96843V0H0ZM1.0403 0.865466H14.3041V6.70736H8.06234V11.9002H1.0403V0.865466ZM9.14728 11.9002H9.10264V7.57283H14.3041V7.60996L9.14728 11.9002Z"
										fill="#4673E4"
									/>
								</svg>
							</Box>
							<Text
								pt={2}
								color="#5F5F60"
								fontSize="14px"
								fontWeight="700"
							>
								NOTES
							</Text>
						</Box>
					</Box>
					<Box
						backgroundColor="#FFF"
						borderRadius="5px"
						w="144px"
						h="105px"
						mt={6}
					>
						<Box
							display="flex"
							justifyContent="space-evenly"
							mt={9}
						>
							<Box
								w="35px"
								h="35px"
								backgroundColor="rgba(70, 115, 228, 0.10)"
								borderRadius="50px"
								display="flex"
								justifyContent="center"
								pt="10px"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="15"
									height="13"
									viewBox="0 0 15 13"
									fill="none"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M1.65966 0.884414C1.51294 0.884414 1.37223 0.931003 1.26848 1.01393C1.16473 1.09686 1.10644 1.20934 1.10644 1.32662V11.1135L5.53221 8.75481L9.95798 11.1135V6.6331C9.95798 6.51582 10.0163 6.40334 10.12 6.32041C10.2238 6.23748 10.3645 6.19089 10.5112 6.19089C10.6579 6.19089 10.7986 6.23748 10.9024 6.32041C11.0061 6.40334 11.0644 6.51582 11.0644 6.6331V12.7656L5.53221 9.81787L0 12.7656V1.32662C0 0.974779 0.174857 0.637348 0.486104 0.388558C0.797351 0.139769 1.21949 0 1.65966 0H6.08543C6.23216 0 6.37287 0.0465895 6.47662 0.129519C6.58037 0.212449 6.63865 0.324926 6.63865 0.442207C6.63865 0.559487 6.58037 0.671964 6.47662 0.754894C6.37287 0.837824 6.23216 0.884414 6.08543 0.884414H1.65966Z"
										fill="#4673E4"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M14.2244 1.01358C14.2759 1.05466 14.3168 1.10346 14.3447 1.15718C14.3725 1.2109 14.3869 1.2685 14.3869 1.32666C14.3869 1.38483 14.3725 1.44242 14.3447 1.49614C14.3168 1.54987 14.2759 1.59867 14.2244 1.63974L10.9051 4.29297C10.8537 4.33415 10.7926 4.36682 10.7254 4.38911C10.6582 4.41141 10.5861 4.42288 10.5134 4.42288C10.4406 4.42288 10.3686 4.41141 10.3013 4.38911C10.2341 4.36682 10.1731 4.33415 10.1217 4.29297L8.46204 2.96636C8.41061 2.92524 8.36981 2.87643 8.34197 2.82271C8.31413 2.76899 8.2998 2.71142 8.2998 2.65327C8.2998 2.59513 8.31413 2.53756 8.34197 2.48384C8.36981 2.43012 8.41061 2.38131 8.46204 2.34019C8.51348 2.29908 8.57454 2.26647 8.64175 2.24422C8.70895 2.22196 8.78098 2.21051 8.85372 2.21051C8.92646 2.21051 8.99849 2.22196 9.0657 2.24422C9.1329 2.26647 9.19397 2.29908 9.2454 2.34019L10.5134 3.35461L13.441 1.01358C13.4924 0.9724 13.5535 0.939728 13.6207 0.917435C13.6879 0.895142 13.7599 0.883667 13.8327 0.883667C13.9055 0.883667 13.9775 0.895142 14.0447 0.917435C14.1119 0.939728 14.173 0.9724 14.2244 1.01358Z"
										fill="#4673E4"
									/>
								</svg>
							</Box>
							<Text
								pt={2}
								color="#5F5F60"
								fontSize="14px"
								fontWeight="700"
							>
								BOOKMARKS
							</Text>
						</Box>
					</Box>
				</HStack>

				<Text w="456px" color="white" pl="70px" pt="30px">
					Sit nisi incididunt tempor do duis fugiat proident
					excepteur. Ex elit pariatur incididunt nostrud occaecat
					mollit id occaecat. Voluptate adipisicing commodo.
				</Text>
			</Box>
		</Box>
	);
};

export default SidePage;
