import React from "react";
import { chakra, Flex, Icon , Image} from "@chakra-ui/react";
import logo from "../assets/img/logo-2.svg";
import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import {AiOutlineTwitter} from "react-icons/ai";
export default function Footer() {
  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={0}
      alignItems="center"
      justifyContent="center">
      <Flex
        w="full"
        as="footer"
        flexDir={{ base: "column", sm: "row" }}
        align="center"
        justify="space-between"
        px="6"
        py="6"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}>
        <Image src={logo} w={"50px"} />
        <chakra.p
          py={{ base: "2", sm: "0" }}
          color="gray.800"
          _dark={{ color: "white" }}>
          made with love by{" "}
          <chakra.a
            target="_blank"
            _hover={{ color: "blue.500" }}
            href="https://github.com/Mohammed-Alrabai/">
            {"@Mohammed Alrabai"}
          </chakra.a>
        </chakra.p>

        <Flex mx="-2">
          <chakra.a
            href="#"
            mx="2"
            _dark={{ color: "gray.300", _hover: { color: "gray.400" } }}
            _hover={{
              color: "gray.500",
            }}
            aria-label="github">
            <chakra.a
              href="https://github.com/Mohammed-Alrabai/"
              target="_blank"
              mx="2"
              _dark={{ color: "gray.300", _hover: { color: "gray.400" } }}
              _hover={{ color: "gray.300" }}>
              <Icon as={AiFillGithub} w={10} h={10}></Icon>
            </chakra.a>
          </chakra.a>

          <chakra.a
            href="#"
            mx="2"
            color="gray.600"
            _dark={{ color: "gray.300", _hover: { color: "gray.400" } }}
            _hover={{
              color: "gray.500",
            }}
            aria-label="Linkedin">
            <chakra.a
              href="https://www.linkedin.com/in/mohammed-alrabai-987a82246/"
              target="_blank"
              mx="2"
              _dark={{ color: "gray.300", _hover: { color: "gray.400" } }}
              _hover={{ color: "gray.300" }}>
              <Icon as={FaLinkedinIn} w={10} h={10}></Icon>
            </chakra.a>
          </chakra.a>
        </Flex>
      </Flex>
    </Flex>
  );
}
