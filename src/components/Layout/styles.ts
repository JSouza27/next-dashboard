import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`

export const Containers = styled.section`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1.6rem;

    @media( min-width: ${theme.screen.large}) {
      padding: 2.4rem;
    }
  `}
`

export const HeaderContainer = styled.div``

export const SideBarContainer = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadow.default};
    height: 100%;
    padding: 1.6rem;
    width: 23.4rem;
  `}
`

export const ContentContainer = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`
