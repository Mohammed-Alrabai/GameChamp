import { useState } from "react";
import { Box, Wrap, WrapItem, Text, Center, Card } from "@chakra-ui/react";
import Navbar from "./componant/Navbar";
import Hero from "./componant/Hero";
import Footer from "./componant/Footer";
import Features from "./componant/Features";
import Cards from "./componant/Cards";

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Features />
    <Cards />
    <Footer />
    </>
  );
}

export default App;
