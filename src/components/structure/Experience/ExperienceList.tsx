import { VStack, Heading } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { Experience } from './Experience'
import { experiences } from '@data/experiences'

export const ExperienceList: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <VStack
      as="section"
      align="stretch"
      py="20"
      px={{ base: '4', md: '8' }}
      borderColor="black"
      borderTop="1px solid"
      spacing="16"
    >
      <Heading as="h2" variant="section" size="2xl">
        {t('experience-heading')}
      </Heading>
      <VStack spacing={6} align="stretch">
        {experiences.map((experience, index) => (
          <Experience key={index} {...experience} />
        ))}
      </VStack>
    </VStack>
  )
}