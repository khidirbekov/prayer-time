import React from 'react'

import './style.css'

export default ({ prayers }) => {
  return (
    <table className="prayer-table" cellPadding="10" cellSpacing="0">
      <thead>
        <tr>
          <td>Дата</td>
          <td>Утренний</td>
          <td>Восход</td>
          <td>Полуденный</td>
          <td>Послеполуденный</td>
          <td>Вечерний</td>
          <td>Ночной</td>
        </tr>
      </thead>
      <tbody>{prayers}</tbody>
    </table>
  )
}
