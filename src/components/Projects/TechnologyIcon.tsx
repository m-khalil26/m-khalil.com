import { Box } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import React from 'react';

interface TechnologyIconProps {
    icon: IconType;
    color: string;
    size?: string;
}

export const TechnologyIcon: React.FC<TechnologyIconProps> = ({
    icon: Icon,
    color,
    size = "1em"
}) => {
    return (
        <Box as="span" display="inline-block">
            {/* <Icon color={color} size={size} /> */}
        </Box>
    );
};