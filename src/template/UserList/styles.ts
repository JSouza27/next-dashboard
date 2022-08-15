import styled, { css } from 'styled-components';

export const PageContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: ${theme.border.radius};
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  `}
`
