import React from 'react'

import './style.css'

export default ({ prayers }) => {
  return (
    <table cellspacing="0" className="prayer-table">
      <thead>
        <tr>
          <td>Дата</td>
          <td>Утренний</td>
          <td>Восход</td>
          <td>Полуденный</td>
          <td>Послeполуденный</td>
          <td>Вечерний</td>
          <td>Ночной</td>
        </tr>
      </thead>
      <tbody>{prayers}</tbody>
    </table>
  )
}
