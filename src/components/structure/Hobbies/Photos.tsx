import { Box, Heading, Text, VStack, HStack, Image } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { useTranslation } from 'next-i18next'
import { hobbiesData } from '@data/hobbies'
import { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const slide = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`

export const Photos = () => {
  const { t, i18n } = useTranslation('common')
  const { introduction, photos } = hobbiesData
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  return (
    <VStack
      as="section"
      align="stretch"
      py="24"
      px={{ base: '6', md: '16' }}
      borderColor="black"
      borderTop="1px solid"
      spacing="12"
    >
      <Heading as="h2" variant="section" size="2xl" textAlign="left">
        {t('hobbies-heading')}
      </Heading>

      <Text fontSize="xl" textAlign="left" maxW="700px">
        {introduction[i18n.language as keyof typeof introduction]}
      </Text>

      <Box
        w="full"
        overflow="hidden"
        borderRadius="md"
        position="relative"
      // bg="gray.100"
      >
        <HStack
          spacing="8"
          animation={`${slide} 80s linear infinite`}
          display="inline-flex"
          w="max-content"
        >
          {photos.concat(photos).map((photo, index) => (
            <Box
              key={index}
              flexShrink={0}
              w="300px"
              h="400px"
              overflow="hidden"
              borderRadius="md"
              onClick={() => {
                setPhotoIndex(index % photos.length)
                setIsOpen(true)
              }}
              cursor="pointer"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                objectFit="cover"
                w="100%"
                h="100%"
              />
            </Box>
          ))}
        </HStack>
      </Box>

      {isOpen && (
        <Lightbox
          mainSrc={photos[photoIndex].src}
          nextSrc={photos[(photoIndex + 1) % photos.length].src}
          prevSrc={photos[(photoIndex + photos.length - 1) % photos.length].src}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + photos.length - 1) % photos.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % photos.length)
          }
        />
      )}
    </VStack>
  )
}