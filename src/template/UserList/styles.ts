import styled, { css } from 'styled-components';

export const PageContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    box-shadow: 0 0 3.2rem 0 rgb(136 152 170 / 15%);
    border: ${theme.border.radius};
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  `}
`

export const HeadContainer = styled.div`
  ${({ theme }) => css`
    border-top-left-radius: ${theme.border.radius};
    border-top-right-radius: ${theme.border.radius};
    display: flex;
    gap: 3rem;
    padding: 2rem 2.4rem;
  `}
`
