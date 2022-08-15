import { Heading } from 'components/Heading'
import * as S from './styles'

export default function UserList() {
  return (
    <S.PageContainer>
      <S.HeadContainer>
        <Heading level={3} size='large'>
          Usuários
        </Heading>
      </S.HeadContainer>
    </S.PageContainer>
  )
}
