import NextLink from 'next/link'
import { useTranslation } from 'next-i18next'
import { Button, chakra, Flex, Heading, VStack, Image } from '@chakra-ui/react'
import profilepic from '@public/img/childhood.jpg'

import { motion } from 'framer-motion'
import { usePostHog } from 'posthog-js/react'
import { config } from '@config/config'
import { ButtonArrow } from '../../meta'

const MotionFlex = motion(Flex)
const MotionHeading = motion(Heading)
const MotionButton = motion(Button)

const content = {
  education: [
    {
      institute: 'Ecole Supérieure De Génie Informatique De Paris',
      location: 'Paris',
      degree: 'Master 2 / Ingénieur',
      time: {
        start: 2023,
        end: 2025,
      },
    },
    {
      institute: 'Université de Rouen Normandie',
      location: 'Rouen',
      degree: 'Licence Informatique (Mention bien - 15)',
      time: {
        start: 2019,
        end: 2023,
      },
    },
    {
      institute: 'Lycée privé Les Iris',
      location: '',
      degree: 'Baccalaureat scientifique (Mention bien - 16)',
      time: {
        start: 2019,
        end: 2023,
      },
    },
  ],
};

export const Hero: React.FC = () => {
  const { t } = useTranslation('common')
  const posthog = usePostHog()

  return (
    <MotionFlex
      h='calc(100vh - var(--chakra-sizes-header-height))'
      px={{ base: '4', md: '8' }}
      align='center'
      animate={{
        background: [
          'linear-gradient(80deg, #ddcbf8 0%, #eaed9e 100%)',
          'linear-gradient(120deg, #ddfffc 0%, #C79DEE 100%)',
        ],
      }}
      transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.75 }}
    >
      <VStack align='flex-start' pb='32' maxW='container.md' spacing='12'>
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
        src='/img/childhood.jpg'
        // alt={t('hero-alt')}
        boxSize={{ base: '450px', md: '450px' }}
        objectFit='cover'
        ml={{ base: '4', md: '8' }}
        borderRadius='2xl'
        border='1px solid black'
        p='10px' // Added padding to detach the border
        bg='white' // Added background color to make the gap visible
      />
    </MotionFlex>
  )
}
