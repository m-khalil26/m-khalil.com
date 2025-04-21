import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

export const ModestBeginningsCard: React.FC = () => {
  const { t } = useTranslation('common');

  return (
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
          {t('modest-beginnings')}
        </Text>
        <Image
          src='/img/child.png'
          alt={t('modest-beginnings')}
          borderRadius="md"
          objectFit="cover"
          w="full"
          h="200px"
        />
      </Flex>
    </Box>
  );
};