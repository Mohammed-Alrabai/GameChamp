import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  IconButton,
  Heading,
  Button,
  Stack,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
// import {HeroBg} from "../assets/img/hero-bg.svg";
import HeroBg from "../assets/img/hero-bg-2.svg";

export default function Hero() {
  const bg = useColorModeValue("white", "gray.800");

const theme = extendTheme({
  colors: {
    prim: {
      100: "#00D3F9",
      // ...
      900: "#1a202c",
    },
  },
});

  return (
    <chakra.header>
      <Box
        w="full"
        h="100vh"
        backgroundColor="#150151"
        backgroundRepeat="no-repeat"
        backgroundImage={HeroBg}
        
        bgPos="center"
        bgSize="cover">
        <Flex align="center" pos="relative" justify="center" boxSize="full">
          <Stack textAlign="center" alignItems="center" spacing={6}>
            <Heading
              fontSize={{ base: "3xl", sm: "4xl", md: "8xl" }}
              fontWeight="semibold"
              color="#00D3F9"
              textTransform="uppercase">
              Good game <br></br> well played
            </Heading>
            <Button
              bg="#00D3F9"
              _hover={{
                bg: "#01bcdd",
              }}
              fontSize={["25px", , "2em"]}
              p={8}
              textTransform="uppercase"
              w="fit-content">
              Game Now
            </Button>
          </Stack>
        </Flex>
      </Box>
    </chakra.header>
  );
}
