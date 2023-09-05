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
            stars.push(<Icon as={FaStar} key={i} color="yellow.500" verticalAlign="middle" />);
        } else if (i - 0.5 <= rating) {
            stars.push(<Icon as={FaStarHalf} key={i} color="yellow.500" verticalAlign="middle" />);
        } else {
            stars.push(<Icon as={FaStar} key={i} color="gray.300" verticalAlign="middle" />);
        }
    }

    return (
        <Box
            display="flex"
            justifyContent="center"
            bg="gray.100" // Background color for contrast
            p="2" // Padding for spacing
            borderRadius="8px 8px 0 0" // Rounded corners
            width="fit-content"
            fontSize="10px"
        >
            <span style={{ verticalAlign: 'middle' }}>Trip rating {stars} {rating}</span>
        </Box>
    )
};

export default StarRating;
