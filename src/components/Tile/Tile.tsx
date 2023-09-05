// src/components/Tile.tsx
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import StarRating from '../StarRating/StarRating';

interface TileProps {
    title: string;
    subtitle: string;
    image: string;
    offset: number;
    rating: number;
}

const Tile = ({ title, subtitle, image, offset, rating }: TileProps) => {

    const tileStyle: React.CSSProperties = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover', // Adjust how the image covers the background
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat', // Prevent image repetition
        minHeight: '200px',
    };

    return (
        <Box
            borderWidth="4px"
            borderRadius="xl"
            padding="4px 4px 0px 4px"
            boxShadow="base"
            style={tileStyle}
            display="flex" // Center content horizontally and vertically
            flexDirection="column" // Stack content vertically
            justifyContent="center" // Center content vertically
            alignItems="center" // Center content horizontally
            textAlign="center" // Center text content
        >
            <Heading 
                as="h2" 
                size="md" 
                color="white"
                marginTop="30px"
            >
                {title}
            </Heading>
            <Text 
                fontSize="8px" 
                color="white"
            >
                {subtitle}
            </Text>
            <Box 
                color="white"
                rounded="md"
                fontSize="10px"
                backgroundColor="gray.600"
                padding="8px"
                marginTop="10px"
            >
                <span style={{marginRight: "30px"}}>Emission Offset:</span> {offset}
            </Box>
            <Box marginTop="auto">
            <StarRating 
                rating={rating} 
                maxRating={5}
            />
            </Box>
        </Box>
    )
};

export default Tile;
