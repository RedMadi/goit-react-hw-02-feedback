import React from 'react';
import { StatisticsContainer, StatisticsDiv } from './Statistics.styled';
export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <StatisticsContainer>
        <StatisticsDiv>Good: {good}</StatisticsDiv>
        <StatisticsDiv>Neutral: {neutral}</StatisticsDiv>
        <StatisticsDiv>Bad: {bad}</StatisticsDiv>
        <StatisticsDiv>Total: {total}</StatisticsDiv>
        <StatisticsDiv>Positive feedback: {percentage}%</StatisticsDiv>
      </StatisticsContainer>
    </>
  );
};
