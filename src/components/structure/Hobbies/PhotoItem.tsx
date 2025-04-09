import { Box, Image } from '@chakra-ui/react'

interface PhotoItemProps {
  src: string;
  alt: string;
  onClick?: () => void;
}

export const PhotoItem = ({ src, alt, onClick }: PhotoItemProps) => {
  return (
    <Box
      overflow="hidden"
      shadow="lg"
      border="1px solid"
      borderColor="black"
      h="100%"
      w="100%"
      onClick={onClick}
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.02)' }}
    >
      <Image
        src={src}
        alt={alt}
        objectFit="cover"
        w="100%"
        h="100%"
      />
    </Box>
  )
}