import React from 'react'

const Statistics = (props) => {
    const [points, rebaunds, assist, allStar] =props.statistics
  return (
    <div>
        <ul>
            <li>{points}</li>
            <li>{rebaunds}</li>
            <li>{assist}</li>
            <li>{allStar}</li>
        </ul>
    </div>
  )
}

export default Statistics