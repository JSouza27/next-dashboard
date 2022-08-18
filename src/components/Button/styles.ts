import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

const buttonMapper = {
  default: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.default};
    box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
    border: 1px solid ${theme.colors.default};
    color: ${theme.colors.white};
  `,
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
    box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.white};
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary};
    box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
    border: 1px solid ${theme.colors.secondary};
    color: ${theme.colors.graphite};
  `,
  info: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.info};
    box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
    border: 1px solid ${theme.colors.info};
    color: ${theme.colors.white};
  `,
  success: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.success};
    box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
    border: 1px solid ${theme.colors.success};
    color: ${theme.colors.white};
  `,
  danger: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.danger};
    box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
    border: 1px solid ${theme.colors.danger};
    color: ${theme.colors.white};
  `,
  warning: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.warning};
    box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
    border: 1px solid ${theme.colors.warning};
    color: ${theme.colors.white};
  `,
}

const outlineButtonMapper = {
  default: (theme: DefaultTheme) => css`
    background-color: transparent;
    border: 1px solid ${theme.colors.default};
    color: ${theme.colors.default};

    &:hover {
      background-color: ${theme.colors.default};
      color: ${theme.colors.white};
    }
  `,
  primary: (theme: DefaultTheme) => css`
    background-color: transparent;
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.primary};

    &:hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: transparent;
    border: none;
    color: ${theme.colors.default};

    &:hover {
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.graphite};
    }
  `,
  info: (theme: DefaultTheme) => css`
    background-color: transparent;
    border: 1px solid ${theme.colors.info};
    color: ${theme.colors.info};

    &:hover {
      background-color: ${theme.colors.info};
      color: ${theme.colors.white};
    }
  `,
  success: (theme: DefaultTheme) => css`
    background-color: transparent;
    border: 1px solid ${theme.colors.success};
    color: ${theme.colors.success};

    &:hover {
      background-color: ${theme.colors.success};
      color: ${theme.colors.white};
    }
  `,
  danger: (theme: DefaultTheme) => css`
    background-color: transparent;
    border: 1px solid ${theme.colors.danger};
    color: ${theme.colors.danger};

    &:hover {
      background-color: ${theme.colors.danger};
      color: ${theme.colors.white};
    }
  `,
  warning: (theme: DefaultTheme) => css`
    background-color: transparent;
    border: 1px solid ${theme.colors.warning};
    color: ${theme.colors.warning};

    &:hover {
      background-color: ${theme.colors.warning};
      color: ${theme.colors.white};
    }
  `,
}

export const CustomButton = styled.button<ButtonProps>`
  ${({
      theme,
      color = 'default',
      fontSize = '1.2rem',
      fontWeight = 'bold',
      height = '2.1rem',
      outline = false,
      width = '5.2rem',
    }) => css`
    align-items: center;
    border-radius: 0.4rem;
    cursor: pointer;
    display: flex;
    gap: 1rem;
    height: ${height};
    justify-content: center;
    transition: all .15s ease;
    text-align: center;
    will-change: transform;
    width: ${width};

    & > * {
      font-size: ${fontSize};
      font-weight: ${theme.font[fontWeight]}
    }

    &:hover {
      box-shadow: 0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
      transform: translateY(-1px);

      ${outline && buttonMapper[color](theme)}
    }

    ${outline ? outlineButtonMapper[color](theme) : buttonMapper[color](theme)}
  `}
`
