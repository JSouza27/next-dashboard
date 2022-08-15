import styled, { css } from 'styled-components';
import theme from 'styles/theme';

type HeadingProps = {
  color?: keyof typeof theme.colors
  size?: keyof typeof theme.sizes
  fontWeight?: 100 | 400 | 700
  lineHeight?: string | number
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading = styled('h1').attrs<HeadingProps>(({ level }) => ({
  as: `h${level}`
}))<HeadingProps>`
  ${({ color = "default", size = "medium", fontWeight = 700, lineHeight = 2.4}) => css`
    color: ${theme.colors[color]};
    font-size: ${theme.sizes[size]};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
  `}
`
