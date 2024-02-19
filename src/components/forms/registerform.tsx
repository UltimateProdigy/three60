import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import Logo from "../logo";

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  console.log(formik.values);

  return (
    <Box mt="130px" m="150px">
      <Logo />
      <Text fontSize="30px" fontWeight="bold" mb={3}>
        Create Account
      </Text>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email/Username</label>
          <Input
            mb={4}
            id="email"
            name="email"
            type="text"
            placeholder="email/username"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label htmlFor="password">Password</label>
          <Input
            mb={4}
            id="password"
            name="password"
            type="password"
            placeholder="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Button mt={4} w="460px" background="blue" color="white" type="submit">Sign In</Button>
          <Button mt={4} w="460px" color="blue">Sign up with Google</Button>
        </form>
      </Box>
    </Box>
  );
};

export default RegisterForm;
