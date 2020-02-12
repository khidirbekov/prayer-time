import React from 'react'

import './style.css'

export default ({ prayers }) => {
  return (
    <table className='prayer-table' cellPadding='10' cellSpacing='0'>
      <thead>
        <tr>
          <td>Дата</td>
          <td>Утр.</td>
          <td>Восх.</td>
          <td>Полуд.</td>
          <td>Посл. полуд.</td>
          <td>Веч.</td>
          <td>Ноч.</td>
        </tr>
      </thead>
      <tbody>
        {prayers}
      </tbody>
    </table>
  )
}
