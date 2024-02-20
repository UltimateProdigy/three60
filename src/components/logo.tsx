import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";

const Logo = ({ ml, mb, mr, mt }: any) => {
  return (
    <Box display="flex" ml={ml} mt={mt} mr={mr} mb={mb}>
      <Image height={20} width={20} src="/images/three60.png" alt="logo" />
      <Text mt={6} fontSize="20px" color="#2468EB" fontWeight="bold">
        three60
      </Text>
    </Box>
  );
};

export default Logo;
