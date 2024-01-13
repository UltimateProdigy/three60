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
          pt="70px"
          pl="70px"
        >
          Track how far <br />
          you’ve gone
        </Text>
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
            <Text ml="-25px" pt={2} color="#5F5F60" fontSize="14px" fontWeight="700">TODOS</Text>
          </Box>
        </Box>
        <Text w="456px" color="white" pl="70px" pt="30px">
          Sit nisi incididunt tempor do duis fugiat proident excepteur. Ex elit
          pariatur incididunt nostrud occaecat mollit id occaecat. Voluptate
          adipisicing commodo.
        </Text>
      </Box>
      <Box>Register Page</Box>
    </Box>
  );
};

export default Register;
