import styled, { css } from 'styled-components';
import theme from 'styles/theme';

type ButtonProps = {
  color?: keyof typeof theme.colors
}


type ThProps = {
  isAction?: boolean
}

export const Table = styled.table`
  border-collapse: collapse;
  word-wrap: break-word;
  width: 100%;
`

export const THead = styled.thead`
  background-color: #f6f9fc;
  color: #8898aa;
  height: 4rem;
`

export const Th = styled.th<ThProps>`
  ${({isAction}) => css`
    padding: 1.2rem 1.6rem;
    text-align: ${isAction ? 'center' : 'left'};
  `}
`

export const Tr = styled.tr`
  border-top: 1px solid #e9ecef;
  border-bottom: 1px solid #e9ecef;
`

export const Td = styled.td`
  padding: 2.4rem 1.6rem;
  text-align: left;
`

export const ActionTd = styled.td`
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 2.4rem 1.6rem;
  text-align: left;
`

export const Button = styled.button<ButtonProps>`
  ${({ theme, color = 'default' }) => css`
    align-items: center;
    background-color: transparent;
    border: none;
    color: ${theme.colors[color]};
    display: flex;
    height: 2rem;
    justify-content: center;
    width: 2rem;
  `}
`
