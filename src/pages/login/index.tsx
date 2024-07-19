import React from "react";
import { Box, Text } from "@chakra-ui/react";
import SidePage from "@/components/sidepage/sidepage";
import LoginForm from "@/components/forms/loginform";

const Login = () => {
  return (
    <Box display="flex">
      <SidePage />
      <LoginForm />
    </Box>
  );
};

export default Login;
