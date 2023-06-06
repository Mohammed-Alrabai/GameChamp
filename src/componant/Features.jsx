import React from "react";
import {
  Container,
  Box,
  chakra,
  Text,
  SimpleGrid,
  Flex,
  Link,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { GiAchievement } from "react-icons/gi";
import {RxUpdate} from "react-icons/rx";

const features = [
  {
    heading: "Payments",
    content:
      "Choose from Stripe, Paddle, Braintree, or PayPal to launch your product quickly.",
    icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
      </svg>
    ),
  },
  {
    heading: "Continuous Updates",
    content:
      "Benefit from the ability to fetch updates to continuously bring the latest developments and content to your gaming website",
    icon: <Icon as={RxUpdate} w={35} h={35} color={"white"} />,
  },
  {
    heading: "Rewards and Achievements",
    content:
      " Earn, unlock, and level up for added excitement and motivation in gaming experiences",
    icon: <Icon as={GiAchievement} w={35} h={35} color={"white"} />,
  },
];

const Features = () => {
  return (
    <Container maxW="6xl" p={{ base: 5, md: 10 }}>
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={20} textAlign="center">
        Interactive gaming website with easy, thrilling user experience!
      </chakra.h3>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        placeItems="center"
        spacing={10}
        mb={4}>
        {features.map((feature, index) => (
          <Box
            key={index}
            bg={useColorModeValue("gray.100", "gray.700")}
            p={6}
            rounded="lg"
            textAlign="center"
            pos="relative">
            <Flex
              p={2}
              w="max-content"
              color="white"
              bgGradient="linear(to-br, #228be6, #15aabf)"
              rounded="md"
              marginInline="auto"
              pos="absolute"
              left={0}
              right={0}
              top="-1.5rem"
              boxShadow="lg">
              {feature.icon}
            </Flex>
            <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={6}>
              {feature.heading}
            </chakra.h3>
            <Text fontSize="md" mt={4}>
              {feature.content}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Features;
