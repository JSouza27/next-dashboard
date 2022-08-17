import Client from 'core/client/Client'
import React from 'react'
import * as S from './styles'

import { Edit, Trash } from '@styled-icons/boxicons-solid/'

interface TableProps {
  headers: string[]
  contents: Client[] | null
  selectedCustomer?: (client: Client) => void
  excludedCustomer?: (client: Client) => void
}

export default function Table({
  headers,
  contents,
  excludedCustomer,
  selectedCustomer
}: TableProps) {
  const showActions = !!(excludedCustomer || selectedCustomer)

  const stockButtons = (client: Client) => {
    return (
      <S.ActionTd>
        {selectedCustomer && (
          <S.Button
            type='button'
            color='success'
            onClick={() => selectedCustomer(client)}
          >
            <Edit />
          </S.Button>
        )}

        {excludedCustomer && (
          <S.Button
            type='button'
            color='danger'
            onClick={() => excludedCustomer(client)}
          >
            <Trash />
          </S.Button>
        )}
      </S.ActionTd>
    )
  }

  const header = () => {
    return (
      <S.Tr>
        {headers.map((header) => (
          <S.Th key={header} isAction={header === 'Ações'}>
            {header}
          </S.Th>
        ))}
      </S.Tr>
    )
  }

  const tableBody = () => {
    return contents?.map((content, i) => (
      <S.Tr key={content.getId()}>
        <S.Td>{content.getId()}</S.Td>
        <S.Td>{content.getName()}</S.Td>
        <S.Td>{content.getAge()}</S.Td>
        {showActions && stockButtons(content)}
      </S.Tr>
    ))
  }

  return (
    <S.Table>
      <S.THead>{header()}</S.THead>
      <tbody>{tableBody()}</tbody>
    </S.Table>
  )
}
