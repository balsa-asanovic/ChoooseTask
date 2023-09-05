// src/components/Tile.tsx
import React from 'react';

interface TileProps {
  title: string;
  subtitle: string;
  image: string;
  offset: number;
  rating: number;
}

const Tile = ({ title, subtitle, image, offset, rating }: TileProps) => (
  <div className="tile">
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <h3>{subtitle}</h3>
    <p>Emission Offset: {offset} tons</p>
    <p>Star Rating: {rating}</p>
  </div>
);

export default Tile;
