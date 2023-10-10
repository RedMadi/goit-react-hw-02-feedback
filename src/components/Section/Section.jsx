import React from 'react';
import { SectionStyle, Title } from './Sections.styled';
export const Section = ({ title, children }) => {
  return (
    <>
      <SectionStyle>
        <Title>{title}</Title>
        {children}
      </SectionStyle>
    </>
  );
};
