import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Register = () => {
  return (
    <Box display="flex">
      <Box backgroundColor="#2468EB" w="50vw" h="100vh">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="73"
          height="74"
          viewBox="0 0 73 74"
          fill="none"
        >
          <circle cx="23" cy="24" r="50" fill="#859CD9" fill-opacity="0.47" />
          <circle cx="23" cy="24" r="50" fill="#859CD9" fill-opacity="0.47" />
          <circle cx="23" cy="24" r="50" fill="#859CD9" fill-opacity="0.47" />
        </svg>
        <Text
          color="white"
          fontSize="47px"
          fontWeight="600"
          pt="100px"
          pl="70px"
        >
          Track how far <br />
          you’ve gone
        </Text>
        <Text w="456px" color="white" pl="70px" pt="30px"> 
          Sit nisi incididunt tempor do duis fugiat proident excepteur. Ex elit
          pariatur incididunt nostrud occaecat mollit id occaecat. Voluptate
          adipisicing commodo.{" "}
        </Text>
      </Box>
      <Box>Register Page</Box>
    </Box>
  );
};

export default Register;
