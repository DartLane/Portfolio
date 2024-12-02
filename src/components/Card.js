import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (

    <Box backgroundColor="#FFFFFF" borderRadius="10px">
      <VStack spacing={3}>
        <Image
          src={imageSrc}
          alt="Project image"
          borderRadius="10px"
          width="100%"
        />
        <VStack align="flex-start" padding="5px">
          <Heading size="lg" color="#000000">{title}</Heading>
          <Text size="md" color="#000000" fontWeight="light">{description}</Text>
          <HStack spacing={2} color="#000000">
            <Text size="sm" fontWeight="medium">See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </VStack>
      </VStack>
    </Box>

  );
};

export default Card;
