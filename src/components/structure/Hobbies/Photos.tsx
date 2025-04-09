import { Box, Heading, Grid, Text, VStack, Icon, Flex } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { hobbiesData } from '@data/hobbies'
import { PhotoItem } from './PhotoItem'
import { useState } from 'react'
import { AddIcon } from '@chakra-ui/icons'

export const Photos = () => {
  const { t, i18n } = useTranslation('common')
  const { introduction, photos } = hobbiesData
  const [showAllPhotos, setShowAllPhotos] = useState(false)

  return (
    <VStack
      as="section"
      align="stretch"
      py="24"
      px={{ base: '6', md: '16' }}
      borderColor="black"
      borderTop="1px solid"
      spacing="12"
      {...({} as any)}
    >
      <Heading 
        as="h2" 
        variant="section" 
        size="2xl"
        textAlign="left" 
      {...({} as any)}
        
      >
        {t('hobbies-heading')}
      </Heading>
      
      <Flex 
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'stretch', md: 'flex-start' }}
        gap="8"
      {...({} as any)}

      >
        <Text 
          fontSize="xl"
          textAlign="left" 
          flex="1"
          maxW={{ base: 'full', md: '500px' }}
      {...({} as any)}

        >
          {introduction[i18n.language as keyof typeof introduction]}
        </Text>
        
        <Box 
          position="relative"
          h={{ base: '300px', md: '400px' }}
          w={{ base: 'full', md: '400px' }}
          cursor="pointer"
          onClick={() => setShowAllPhotos(!showAllPhotos)}
        >
          <PhotoItem
            src={photos[0].src}
            alt={photos[0].alt}
          />
          
          <Box
            position="absolute"
            top="0"
            right="0"
            bottom="0"
            left="0"
            bg="rgba(0, 0, 0, 0.3)"
            opacity="0"
            transition="opacity 0.3s"
            _hover={{ opacity: 1 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
      
      <Icon as={AddIcon} w={12} h={12} color="white" {...({} as any)}   />
          </Box>
        </Box>
      </Flex>
      
      {showAllPhotos && (
        <Grid 
          templateColumns={{ 
            base: 'repeat(1, 1fr)', 
            md: 'repeat(2, 1fr)', 
            lg: 'repeat(3, 1fr)' 
          }} 
          gap={6}
          w="full"
          maxW="7xl"
          mx="0"
          mt={6}
        >
          {photos.slice(1).map((photo, index) => (
            <Box
              key={index}
              h={{ base: '250px', md: '300px' }}
              position="relative"
            >
              <PhotoItem
                src={photo.src}
                alt={photo.alt}
              />
            </Box>
          ))}
        </Grid>
      )}
    </VStack>
  )
}