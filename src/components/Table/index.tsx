import Client from 'core/client/Client'
import React from 'react'
import * as S from './styles'

interface TableProps {
  headers: string[]
  contents: Client[] | null
}

export default function Table({ headers, contents }: TableProps) {
  const header = () => {
    return (
      <tr>
        {headers.map((header) => (
          <th>{header}</th>
        ))}
      </tr>
    )
  }

  const tableBody = () => {
    return contents?.map((content, i) => (
      <tr>
        <td>{content.getId()}</td>
        <td>{content.getName()}</td>
        <td>{content.getAge()}</td>
      </tr>
    ))
  }

  return (
    <S.Table>
      <thead>{header()}</thead>
      <tbody>{tableBody()}</tbody>
    </S.Table>
  )
}
