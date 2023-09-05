// src/components/Tile.tsx
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

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
        backgroundRepeat: 'no-repeat' // Prevent image repetition
    };

    // Define a style object to set the font color to white
    const textStyle: React.CSSProperties = {
        color: 'white'
    };

    return (
        <Box
            borderWidth="1px"
            borderRadius="md"
            p="4"
            boxShadow="base"
            style={tileStyle}
        >
            <Heading as="h2" size="md" style={textStyle}>{title}</Heading>
            <Text style={textStyle}>{subtitle}</Text>
            <Text style={textStyle}>Emission Offset: {offset} tons</Text>
            <Text style={textStyle}>Star Rating: {rating}</Text>
        </Box>
    )
};

export default Tile;
