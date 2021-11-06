import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer || 'red'};
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  padding: 0px 10px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: left;
  flex-wrap: wrap;
`;
