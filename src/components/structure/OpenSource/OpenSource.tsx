import { useTranslation } from 'next-i18next';
import { Box, Heading, SimpleGrid, VStack, Flex, Text, Image } from '@chakra-ui/react';
import { contributions } from '@data/contributions';
import { Contribution } from './Contribution';

export const OpenSource: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <VStack
      as="section"
      align="stretch"
      pb="20"
      borderColor="black"
      borderTop="1px solid"
      spacing="16"
    >
      <Box
        px={{ base: '4', md: '8' }}
        pt="32"
        pb="3"
        bg="linear-gradient(90deg, #93A5CF 0%, #E4EFE9 100%)"
      >
        <Heading
          as="h2"
          variant="section"
          color="white"
          size="2xl"
          wordBreak={{ base: 'break-all', sm: 'break-word' }}
        >
          {t('open-source')}
        </Heading>
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 2, xl: 3 }}
        px={{ base: '4', md: '8' }}
        spacing="16"
      >
        {/* Carte spéciale "Mes modestes débuts" */}
        <Box
          p="4"
          borderColor="black"
          border="1px solid"
          shadow="8px 8px 0px 0px black"
          transition="all 0.1s ease-in-out"
          _hover={{ shadow: 'none', transform: 'translate(8px, 8px)' }}
        >
          <Flex h="full" flexDir="column" align="center" justify="center">
            <Text fontSize="xl" fontWeight="bold" mb="4">
              Mes modestes débuts
            </Text>
            <Image
              src="/img/childhood.jpg"
              alt="Mes modestes débuts"
              borderRadius="md"
              objectFit="cover"
              w="full"
              h="200px"
            />
          </Flex>
        </Box>

        {/* Autres contributions */}
        {contributions.map((contribution) => (
          <Contribution key={contribution.repository} {...contribution} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};