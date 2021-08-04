import React from 'react'

import TableBody from './TableBody'
import TableHead from './TableHead'

import './table.module.scss'


const Index = ({ id, data, columns, updateData, deleteData }) => {
  return (
    <table>
      <thead>
        <TableHead columns={columns} />
      </thead>
      <tbody>
        {
          data.length !== 0 ?
            data.map((val, i) => (
              <TableBody key={i} data={val} columns={columns} updateData={updateData} deleteData={deleteData} />
            ))
            :
            <tr>
              <td colSpan={columns.length + 1}>
                <div style={{ textAlign: "center" }}>No Data</div>
              </td>
            </tr>
        }
      </tbody>
    </table>
  )
}

export default Index
