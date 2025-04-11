import { Box, Heading, Text, Stack, HStack } from '@chakra-ui/react'
import { TechnologyIcon } from './TechnologyIcon'

interface ProjectCardProps {
    title: string
    description: string
    technologies: Array<{
        name: string
        icon: string
        color: string
    }>
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    technologies
}) => {
    return (
        <Box borderWidth="1px" borderRadius="lg" p={6}>
            <Stack spacing={4}>
                <Heading size="md">{title}</Heading>
                <Text>{description}</Text>
                <HStack spacing={2}>
                    {/* {technologies.map((tech) => (
                        <TechnologyIcon
                            key={tech.name}
                            icon={tech.icon}
                            color={tech.color}
                        />
                    ))} */}
                </HStack>
            </Stack>
        </Box>
    )
}