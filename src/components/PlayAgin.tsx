import React from 'react'

type Props = {
    callback: any;
}

export const PlayAgain : React.FC<Props> = ({callback}) => {
    return (
        <div className='playAgain'>
            <button onClick={callback}>
                Play Again
            </button>
        </div>
    )
}