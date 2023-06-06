import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorMode,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  Image,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  ModalCloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";
import logo from "../assets/img/logo-2.svg";
import { color } from "framer-motion";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSingIn, setIsSingIn] = React.useState(false);
  const handleLoginClick = () => {
    setIsOpen(!isOpen);
  };
  const handleSingInClick = () => {
    setIsSingIn(!isSingIn);
  };
  const initialRef = React.useRef();


  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        position={"fixed"}
        zIndex={100}>
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center">
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
            <Box boxSize="10">
              <Image src={logo} />
            </Box>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}>
              <Button
                variant={"ghost"}
                _hover={{ bg: "#00D3F9", color: "white" }}>
                Features
              </Button>
              <Button
                variant={"ghost"}
                _hover={{ bg: "#00D3F9", color: "white" }}>
                Games
              </Button>
              <Button
                variant={"ghost"}
                _hover={{ bg: "#00D3F9", color: "white" }}>
                Blog
              </Button>
              <Button
                variant={"ghost"}
                _hover={{ bg: "#00D3F9", color: "white" }}
                onClick={handleLoginClick}>
                Login
              </Button>
              <Button
                variant={"ghost"}
                _hover={{ bg: "#00D3F9", color: "white" }}
                onClick={handleSingInClick}>
                Sign in
              </Button>
            </HStack>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm">
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost">
                  Features
                </Button>
                <Button w="full" variant="ghost">
                  Games
                </Button>
                <Button w="full" variant="ghost">
                  Blog
                </Button>
                <Button w="full" variant="ghost"
                  onClick={handleLoginClick}
                >
                  Login
                </Button>
                <Button w="full" variant="ghost"
                  onClick={handleSingInClick}
                >
                  Sign in
                </Button>
              </VStack>
            </Box>
            <IconButton
              aria-label="Toggle color mode"
              variant="ghost"
              color={isDarkMode ? "yellow.300" : "gray.600"}
              fontSize="20px"
              onClick={toggleColorMode}
              icon={isDarkMode ? <FiSun /> : <FiMoon />}
            />
          </HStack>
        </Flex>
      </chakra.header>

      {/* model Login*/}
      <Modal
        isOpen={isOpen}
        onClose={handleLoginClick}
        size="md"
        initialFocusRef={initialRef}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>UserName</FormLabel>
              <Input ref={initialRef} placeholder="Username" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder="Password" type="password" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={handleLoginClick}
              bg={"#00D3F9"}
              _hover={{ bg: "#01bcdd" }}
              mr={3}>
              Login
            </Button>
            <Button onClick={handleLoginClick}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* model Sign in*/}
      <Modal
        isOpen={isSingIn}
        onClose={handleSingInClick}
        size="md"
        initialFocusRef={initialRef}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign in</ModalHeader>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>UserName</FormLabel>
              <Input ref={initialRef} placeholder="Username" />
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input ref={initialRef} placeholder="Email" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder="Password" type="password" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={handleSingInClick}
              bg={"#00D3F9"}
              _hover={{ bg: "#01bcdd" }}
              mr={3}>
              Sign in
            </Button>
            <Button onClick={handleSingInClick}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
}
