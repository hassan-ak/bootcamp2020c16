import React from 'react'

type Props = {
    setScore: number;
}

export const Score: React.FC<Props> = ({setScore}) => {
    return (
        <div>
            <h2>Score: {setScore}</h2>
        </div>
    )
}
