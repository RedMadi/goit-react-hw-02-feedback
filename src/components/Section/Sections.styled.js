import { styled } from 'styled-components';

export const SectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  & > * {
    /* Styles for children of Section */
    display: flex;
    gap: 30px;
    /* Add any other styles you need for the children here */
  }
`;
export const Title = styled.h2`
  margin-bottom: 30px;
  margin-top: 30px;
`;