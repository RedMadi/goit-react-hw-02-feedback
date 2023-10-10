import React from 'react';
import { Options, Button } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <Options>
        {options.map(option => (
          <Button
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        ))}
      </Options>
    </>
  );
};
