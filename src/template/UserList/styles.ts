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

export const HeadContainer = styled.div`
  ${({ theme }) => css`
    border-top-left-radius: ${theme.border.radius};
    border-top-right-radius: ${theme.border.radius};
    display: flex;
    gap: 3rem;
    padding: 2rem 2.4rem;
  `}
`
