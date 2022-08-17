import { Heading } from 'components/Heading'
import Table from 'components/Table'
import Client from 'core/client/Client'
import * as S from './styles'

export default function UserList() {
  const headers = ['Código', 'Nome', 'Idade', 'Ações']
  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 45, '2'),
    new Client('Carlos', 23, '3'),
    new Client('Pedro', 54, '4')
  ]

  const excludedCustomer = (client: Client) => {
    console.log(client.getId())
  }

  const selectedCustomer = (client: Client) => {
    console.log(client.getId())
  }

  return (
    <S.PageContainer>
      <S.HeadContainer>
        <Heading level={3} size='large'>
          Usuários
        </Heading>
      </S.HeadContainer>

      <Table
        contents={clients}
        headers={headers}
        excludedCustomer={excludedCustomer}
        selectedCustomer={selectedCustomer}
      />
    </S.PageContainer>
  )
}
