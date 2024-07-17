import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import Logo from "../logo";
import { useRouter } from "next/router";

export default function LoginForm () {
  const router = useRouter();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      router.push('/todos')
    },
  });
  console.log(formik.values);

  return (
    <Box mt="120px" ml="10vw">
      <Logo fontWeight="bold" props={{ mt: "23px"}} />
      <Text fontSize="30px" fontWeight="bold" mb={3}>
        Welcome Back
      </Text>
      <Box w="full">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email/Username</label>
          <Input
            backgroundColor="rgba(0, 0, 0, 0.11)"
            mb={4}
            w="120%"
            h={14}
            id="email"
            name="email"
            type="text"
            placeholder="email/username"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label htmlFor="password">Password</label>
          <InputGroup w="120%">
            <Input
              backgroundColor="rgba(0, 0, 0, 0.11)"
              mb={4}
              h={14}
              w="120%"
              id="password"
              name="password"
              placeholder="password"
              type={show ? "text" : "password"}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" mt={4} onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Button
            mt={4}
            w="120%"
            h={14}
            background="blue"
            color="white"
            type="submit"
          >
            Sign In
          </Button>
          <Button mt={4} mb={4} w="120%" h={14} color="blue">
            <img
              style={{ paddingRight: "10px" }}
              src="images/google.svg"
              alt="google"
            />
            Sign In with Google
          </Button>
        </form>
        <div>
          Not Signed Up?,{" "}
          <span style={{ color: "blue", cursor: "pointer" }} onClick={() => router.push('/')}>Create Account here.</span>{" "}
        </div>
      </Box>
    </Box>
  );
};

