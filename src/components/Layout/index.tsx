import * as S from './styles'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <S.Wrapper>
      {/* <S.SideBarContainer>Menu</S.SideBarContainer> */}

      <S.Containers>
        {/* <S.HeaderContainer>Header</S.HeaderContainer> */}
        <S.ContentContainer>{children}</S.ContentContainer>
      </S.Containers>
    </S.Wrapper>
  )
}
