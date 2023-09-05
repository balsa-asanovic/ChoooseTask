import React from 'react';
import { Icon, Box } from '@chakra-ui/react';
import { FaStar, FaStarHalf } from 'react-icons/fa';

interface StarRatingProps {
    rating: number;
    maxRating: number;
}

const StarRating = ({ rating, maxRating }: StarRatingProps) => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
        if (i <= rating) {
            stars.push(<Icon as={FaStar} key={i} color="yellow.500" />);
        } else if (i - 0.5 <= rating) {
            stars.push(<Icon as={FaStarHalf} key={i} color="yellow.500" />);
        } else {
            stars.push(<Icon as={FaStar} key={i} color="gray.300" />);
        }
    }

    return (
        <Box
            display="flex"
            bg="gray.100" // Background color for contrast
            p="2" // Padding for spacing
            borderRadius="md" // Rounded corners
        >
            {stars}
        </Box>
    )
};

export default StarRating;
