import React from 'react'

const TableBody = ({ data, columns, updateData, deleteData }) => {

  return (
    <tr key={data.id} data-testid="data">
      {
        columns.map(({ path }) => (
          <td key={path}>{data[path]}</td>
        ))
      }
      <td>
        <div>
          <button className={`btn btn-success`} onClick={() => updateData(data)}>Edit</button>
          <button className={`btn btn-danger`} onClick={() => deleteData(data.id)}>Delete</button>
        </div>
      </td>
    </tr >
  )
}

export default TableBody
