import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";

interface LogoProps {
	props?: any;
	fontWeight?: string;
	fontSize?: string;
	className?: string;
}

const Logo = ({
	fontWeight,
	fontSize = "20px",
	className,
	props,
}: LogoProps) => {
	return (
		<Box display="flex">
			<Image
				height={20}
				width={20}
				src="/images/three60.png"
				alt="logo"
			/>
			<Text
				{...props}
				className={className}
				fontSize={fontSize}
				color="#2468EB"
				fontWeight={fontWeight}
			>
				three60
			</Text>
		</Box>
	);
};

export default Logo;
