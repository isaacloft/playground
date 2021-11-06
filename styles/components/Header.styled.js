import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.header || 'red'};
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: left;
  flex-wrap: wrap;
`;
