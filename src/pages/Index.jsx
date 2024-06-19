import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Image src="/youtube-logo.svg" alt="YouTube Logo" boxSize="50px" />
        <Text fontSize="2xl" fontWeight="bold">YouTube Clone</Text>
      </Flex>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
        <VStack spacing={4}>
          <Text fontSize="xl">Welcome to the YouTube Clone</Text>
          <Text>Start exploring videos now!</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;