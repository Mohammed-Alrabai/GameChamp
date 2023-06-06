import React from "react";
import { Badge, Box, Flex, Image, Text, SimpleGrid } from "@chakra-ui/react";

import { AiOutlineStar } from "react-icons/ai";
import RedImg from "../assets/img/Red_Dead_Redemption_2.jpg";
import FrotImg from "../assets/img/2.jpeg";
import GodImg from "../assets/img/3.jpg";
import FarImg from "../assets/img/4.png";
import Ark from "../assets/img/ARKSurvivalEvolved.jpg";
import among from "../assets/img/amogus.jpeg";
import Det from "../assets/img/Detroit.jpg";
import Het from "../assets/img/HITMAN.jpeg";


export default function App() {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Red Dead Redemption 2",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };
  const card = [
    {
      image: RedImg,
      imageAlt: "Rear view of modern home with pool",
      stat: "New",
      v: 1.2,
      date: "6 days ago",
      title: "Red Dead Redemption 2",
      Price: "$30",
      reviewCount: 56,
      rating: 4,
    },
    {
      image: FrotImg,
      imageAlt: "Rear view of modern home with pool",
      stat: "Updated",
      v: 4.8,
      date: "14 days ago",
      title: "Fortinet",
      Price: "$50",
      reviewCount: 41,
      rating: 4,
    },
    {
      image: GodImg,
      imageAlt: "Rear view of modern home with pool",
      stat: "New",
      v: 3.2,
      date: "4 days ago",
      title: "God of War",
      Price: "$100",
      reviewCount: 78,
      rating: 4,
    },
    {
      image: FarImg,
      imageAlt: "Rear view of modern home with pool",
      stat: "Updated",
      v: 3.2,
      date: "10 days ago",
      title: "Far Cry 6",
      Price: "$120",
      reviewCount: 54,
      rating: 3,
    },
    // hi
    {
      image: among,
      imageAlt: "Rear view of modern home with pool",
      stat: "New",
      v: 3.2,
      date: "22 days ago",
      title: "Among Us",
      Price: "$44",
      reviewCount: 43,
      rating: 4,
    },
    {
      image: Ark,
      imageAlt: "Rear view of modern home with pool",
      stat: "Updated",
      v: 3.2,
      date: "10 days ago",
      title: "Ark Survival Evolved",
      Price: "$140",
      reviewCount: 65,
      rating: 3,
    },
    {
      image: Det,
      imageAlt: "Rear view of modern home with pool",
      stat: "New",
      v: 3.2,
      date: "10 days ago",
      title: "Detroit: Become Human",
      Price: "$110",
      reviewCount: 90,
      rating: 3,
    },
    {
      image: Het,
      imageAlt: "Rear view of modern home with pool",
      stat: "Updated",
      v: 3.2,
      date: "10 days ago",
      title: "HITMAN",
      Price: "$54",
      reviewCount: 90,
      rating: 3,
    },
  ];

  return (
<SimpleGrid  spacing={10}
      columns={{ base: 1, sm: 1, md: 3, lg: 4, xl: 4 }}
      bg="#edf3f8"
      _dark={{ bg: "#151a23" }}
      p={50}
      flexDir="row"
      w="full"
      alignItems="center"
      justifyContent="center"
      gap={10}>
      {card.map((card, index) => (
        <Box
          key={index}
          bg="white"
          _dark={{ bg: "gray.800" }}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg">
          <Image
            objectFit="cover"
            w="full"
            h="250px"
            src={card.image}
            alt={card.imageAlt}
            roundedTop="lg"
          />

          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge rounded="full" px="2" colorScheme="teal">
                {card.stat}
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2">
                {card.v} virsion - {card.date} date
              </Box>
            </Box>

            <Text
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}>
              {card.title}
            </Text>

            <Box>
              {card.Price}
              <Box as="span" color="gray.600" fontSize="sm">
                / Price
              </Box>
            </Box>

            <Box display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <AiOutlineStar
                    key={i}
                    color={i < card.rating ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {card.reviewCount} reviews
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
}
