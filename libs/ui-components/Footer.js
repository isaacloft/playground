import { StyledFooter } from '../../styles/components/Footer.styled';
import styled from 'styled-components';

const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.font || 'white'};
`;

export default function Footer() {
  return (
    <StyledFooter>
      <H3>Footer</H3>
    </StyledFooter>
  );
}
