import { Box, Heading, Grid, Text, VStack, Icon, Flex, IconButton } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { hobbiesData } from '@data/hobbies'
import { PhotoItem } from './PhotoItem'
import { useState } from 'react'
import { AddIcon, ExternalLinkIcon, MinusIcon } from '@chakra-ui/icons'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

// Créer un composant Grid animé avec Framer Motion
const MotionGrid = motion(Grid)
const MotionBox = motion(Box)

export const Photos = () => {
  const { t, i18n } = useTranslation('common')
  const { introduction, photos } = hobbiesData
  const [showAllPhotos, setShowAllPhotos] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  // Préparer les slides pour le lightbox
  const slides = photos.map(photo => ({ src: photo.src }))

  // Ouvrir le lightbox avec l'index de la photo cliquée
  const openLightbox = (index: number) => {
    setCurrentPhotoIndex(index)
    setLightboxOpen(true)
  }

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
      <Heading
        as="h2"
        variant="section"
        size="2xl"
        textAlign="left"
      >
        {t('hobbies-heading')}
      </Heading>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'stretch', md: 'flex-start' }}
        gap="8"
        position="relative"
      >
        <Box
          position="relative"
          h={{ base: '300px', md: '400px' }}
          w={{ base: 'full', md: '450px' }}
          mr={{ base: 0, md: 8 }}
          borderRadius='2xl'
          border='1px solid black'
          p='10px'
          bg='white'
        >
          <PhotoItem
            src={photos[0].src}
            alt={photos[0].alt}
          />

          <Flex
            position="absolute"
            top="10px"
            right="10px"
            bottom="10px"
            left="10px"
            bg="rgba(0, 0, 0, 0.3)"
            opacity="0"
            transition="opacity 0.3s"
            _hover={{ opacity: 1 }}
            alignItems="center"
            justifyContent="center"
            borderRadius='2xl'
            gap={4}
          >
            {/* Icône pour déplier toutes les photos */}
            <IconButton
            aria-label={showAllPhotos ? "Masquer les photos" : "Afficher toutes les photos"}
            icon={<Icon as={showAllPhotos ? MinusIcon : AddIcon} w={8} h={8} />}
            variant="unstyled"
            color="white"
            size="lg"
            onClick={() => setShowAllPhotos(!showAllPhotos)}
            _hover={{ transform: 'scale(1.2)' }}
            transition="transform 0.2s"
          />
            {/* Icône pour agrandir dans le lightbox */}
            <IconButton
              aria-label="Agrandir la photo"
              icon={<Icon as={ExternalLinkIcon} w={8} h={8} />}
              variant="unstyled"
              color="white"
              size="lg"
              onClick={() => openLightbox(0)}
              _hover={{ transform: 'scale(1.2)' }}
              transition="transform 0.2s"
            />
          </Flex>
        </Box>

        <Text
          fontSize="xl"
          textAlign="left"
          flex="1"
          maxW={{ base: 'full', md: '500px' }}
        >
          {introduction[i18n.language as keyof typeof introduction]}
        </Text>
      </Flex>

      <AnimatePresence>
        {showAllPhotos && (
          <MotionGrid
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {photos.slice(1).map((photo, index) => (
              <MotionBox
                key={index}
                h={{ base: '250px', md: '300px' }}
                position="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                cursor="pointer"
                onClick={() => openLightbox(index + 1)}
              >
                <PhotoItem
                  src={photo.src}
                  alt={photo.alt}
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bg="rgba(0, 0, 0, 0.3)"
                  opacity={0}
                  transition="opacity 0.3s"
                  _hover={{ opacity: 1 }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={ExternalLinkIcon} w={8} h={8} color="white" />
                </Box>
              </MotionBox>
            ))}
          </MotionGrid>
        )}
      </AnimatePresence>

      {/* Lightbox pour afficher les photos en plein écran */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={currentPhotoIndex}
      />
    </VStack>
  )
}