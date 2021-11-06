import { StyledHeader } from '../../styles/components/Header.styled';
import styled from 'styled-components';

const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.font || 'white'};
`;
export default function Header() {
  return (
    <StyledHeader>
      <H2>Simple UI</H2>
    </StyledHeader>
  );
}
