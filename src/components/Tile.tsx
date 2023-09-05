// src/components/Tile.tsx
import React from 'react';
import { Box, Image, Heading, Text } from '@chakra-ui/react';

interface TileProps {
  title: string;
  subtitle: string;
  image: string;
  offset: number;
  rating: number;
}

const Tile = ({ title, subtitle, image, offset, rating }: TileProps) => (
  <Box borderWidth="1px" borderRadius="md" p="4" boxShadow="base">
    <Image src={image} alt={title} />
    <Heading>{title}</Heading>
    <Text>{subtitle}</Text>
    <Text>Emission Offset: {offset} tons</Text>
    <Text>Star Rating: {rating}</Text>
  </Box>
);

export default Tile;
