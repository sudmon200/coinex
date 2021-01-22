import React from 'react'

function CoinsTable(props) {
  console.log(props)
  return (
    <div>
      {props.coin.id}
    </div>
  )
}

export default CoinsTable
