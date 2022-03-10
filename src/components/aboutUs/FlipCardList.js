import React from 'recat';
import FlipCard from './Flipcard.js';

export default function FlipCardList({ card }) {

  return (
    <FlipCard flipCard={card} key={card.id} /> 
  )
};