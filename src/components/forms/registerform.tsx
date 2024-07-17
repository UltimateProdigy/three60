import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  background,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { useToast } from "@chakra-ui/react";
import Logo from "../logo";
import { useRouter } from "next/router";

export default function RegisterForm () {
  const toast = useToast();
  const router = useRouter();
  const [show, setShow] = React.useState(false);
  const [secondShow, setSecondShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const handleSecondClick = () => setSecondShow(!secondShow);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },

    onSubmit: (values) => {
      toast({
        position: "bottom",
        status: "success",
        description: "Submitted Successfully",
      });
      //alert(JSON.stringify(values, null, 2));
    },
  });
  console.log(formik.values);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await formik.submitForm();
    setIsSubmitting(false);
  };

  return (
    <Box mt="60px" ml="150px">
      <Logo fontWeight="bold" props={{ mt: "23px"}} />
      <Text fontSize="30px" fontWeight="bold" mb={3}>
        Create Account
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
          <label htmlFor="">Confirm Password</label>
          <InputGroup w="120%">
            <Input
              mb={4}
              backgroundColor="rgba(0, 0, 0, 0.11)"
              h={14}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="confirm password"
              type={secondShow ? "text" : "password"}
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" mt={4} onClick={handleSecondClick}>
                {secondShow ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Button
            mt={4}
            w="120%"
            h={14}
            isLoading={isSubmitting}
            loadingText="Submitting"
            background="blue"
            color="white"
            type="submit"
            onClick={() => handleSubmit()}
          >
            Register
          </Button>
          <Button mt={4} mb={4} w="120%" h={14} color="blue">
            <img
              style={{ paddingRight: "10px" }}
              src="images/google.svg"
              alt="google"
            />
            Sign up with Google
          </Button>
        </form>
        <div>
          Have you registered?,{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => router.push("/login")}
          >
            Sign in here.
          </span>{" "}
        </div>
      </Box>
    </Box>
  );
};
