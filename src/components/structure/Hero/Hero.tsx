import NextLink from 'next/link'
import { useTranslation } from 'next-i18next'
import { Button, chakra, Flex, Heading, VStack, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { usePostHog } from 'posthog-js/react'
import { ButtonArrow } from '../../meta'

const MotionFlex = motion(Flex)
const MotionHeading = motion(Heading)
const MotionButton = motion(Button)

export const Hero: React.FC = () => {
  const { t } = useTranslation('common')
  const posthog = usePostHog()

  return (
    <MotionFlex
      h='calc(100vh - var(--chakra-sizes-header-height))'
      px={{ base: '4', md: '8' }}
      align={{ base: 'center', md: 'center' }}
      justify={{ base: 'center', md: 'space-between' }}
      direction={{ base: 'column', md: 'row' }}
      gap={{ base: '8', md: '0' }}
      animate={{
        background: [
          'linear-gradient(80deg, #ddcbf8 0%, #eaed9e 100%)',
          'linear-gradient(120deg, #ddfffc 0%, #C79DEE 100%)',
        ],
      }}
      transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.75 }}
    >
      <VStack
        align={{ base: 'center', md: 'flex-start' }}
        spacing={{ base: '8', md: '12' }}
        w='full'
        maxW={{ base: 'full', md: 'container.md' }}
        textAlign={{ base: 'center', md: 'left' }}
      >
        <MotionHeading
          as='h1'
          variant='hero'
          size='hero'
          wordBreak='break-word'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {t('hero-title')}
        </MotionHeading>
        <Image
          src='/img/childhood-2.jpg'
          alt={t('contact-photo-alt')}
          boxSize={{ base: '250px', sm: '300px', md: '400px', lg: '450px' }}
          objectFit='cover'
          borderRadius='2xl'
          border='1px solid black'
          p='10px'
          bg='white'
          transition="transform 0.3s ease-in-out"
          _hover={{ transform: 'scale(1.05)' }}
          display={{ base: 'block', md: 'none' }}
        />
        <NextLink href='/#projects' passHref legacyBehavior>
          <MotionButton
            as='a'
            variant='secondary'
            sx={{
              '&:hover svg': {
                transform: 'scaleX(1.1)',
              },
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.2 }}
            onClick={() => posthog.capture('hero_button_clicked')}
          >
            <chakra.span mr='4'>{t('hero-cta')}</chakra.span>
            <ButtonArrow
              transformOrigin='left'
              transition='transform 0.2s ease-in-out, fill 0.2s ease-in-out'
            />
          </MotionButton>
        </NextLink>
      </VStack>
      <Image
        src='/img/childhood-2.jpg'
        alt={t('contact-photo-alt')}
        boxSize={{ base: '250px', sm: '300px', md: '400px', lg: '450px' }}
        objectFit='cover'
        borderRadius='2xl'
        border='1px solid black'
        p='10px'
        bg='white'
        transition="transform 0.3s ease-in-out"
        _hover={{ transform: 'scale(1.05)' }}
        display={{ base: 'none', md: 'block' }}
        ml={{ base: '0', md: '8' }}
      />
    </MotionFlex>
  )
}
