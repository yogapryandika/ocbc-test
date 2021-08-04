import React from 'react'

const TableHead = ({ columns }) => {
  return (
    <tr>
      {
        columns.map(({ path, name }) => (
          <th key={path}>{name}</th>
        ))

      }
      <th>Actions</th>
    </tr>
  )
}

export default TableHead
