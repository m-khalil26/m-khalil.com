import { VStack, Heading, Text, Image } from '@chakra-ui/react'

export const Hobbies: React.FC = () => {
    return (
        <VStack
            id="hobbies"
            as="section"
            align="stretch"
            py="20"
            px={{ base: '4', md: '8' }}
        >
            <Heading as="h2" size="xl" mb="4">
                About Photography
            </Heading>
            <Text>
                Photography has always been a passion of mine. Capturing moments and
                creating stories through images is something I deeply enjoy.
            </Text>
            <Image
                src="/img/photography.jpg"
                alt="Photography"
                borderRadius="md"
                objectFit="cover"
                w="full"
                h="300px"
                mt="4"
            />
        </VStack>
    )
}