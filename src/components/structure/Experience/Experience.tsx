import { useTranslation } from 'next-i18next'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Badge,
  Text,
  Image,
  VStack,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
// import { ChevronRightIcon } from '@chakra-ui/icons'
import { HiChevronRight } from 'react-icons/hi'

import type { RoleType, Education } from '@utils/types'

export interface ExperienceProps {
  company: string
  position: { en: string; fr: string }
  role: RoleType
  duration: string
  description: { en: string; fr: string }
  skills: string[]
  logo: Education
}

export const Experience: React.FC<ExperienceProps> = ({
  company,
  position,
  role,
  duration,
  description,
  skills,
  logo,
}) => {
  const { t, i18n } = useTranslation('common')

  return (
    <Accordion allowToggle>
      <AccordionItem
        border="1px solid"
        borderColor="black"
        shadow={`8px 8px 0px 0px ${logo.color}`}
        transition="all 0.1s ease-in-out"
        _hover={{ shadow: 'none', transform: 'translate(8px, 8px)' }}
        mb={4}
      >
        <AccordionButton p={4}>
          <Flex flex="1" justify="space-between" align="center">
            <Box>
              <Flex align="center" gap={4}>
                <Image
                  src={logo.icon}
                  alt={`${company} logo`}
                  boxSize="10"
                  width="15"
                />
                <VStack align="start" spacing={1}>
                  <Text fontSize="xl" fontWeight="bold"> {position[i18n.language as keyof typeof position]}
                  </Text>
                  <Text>{company}</Text>
                </VStack>
              </Flex>
            </Box>
            <Flex align="center" gap={4}>
              <Badge colorScheme={role.color}>{role.label}</Badge>
              <Text fontSize="sm" color="gray.600">{duration}</Text>
              <AccordionIcon />
            </Flex>
          </Flex>
        </AccordionButton>

        <AccordionPanel pb={4}>
          <List spacing={2} mb={4}>
            {description[i18n.language as keyof typeof description]
              .split('.')
              .filter(item => item.trim())
              .map((item, index) => (
                <ListItem key={index} display="flex" alignItems="start">
                  <ListIcon as={HiChevronRight as React.ElementType} color={logo.color} mt={1} />
                  <Text>{item.trim()}</Text>
                </ListItem>
              ))}
          </List>
          <Flex gap={2} flexWrap="wrap">
            {skills.map((skill) => (
              <Badge
                key={skill}
                colorScheme="blue"
                variant="subtle"
                borderRadius="full"
              >
                {skill}
              </Badge>
            ))}
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}