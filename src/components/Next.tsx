import React from 'react'

type Props = {
    callback: any;
}

export const Next : React.FC<Props> = ({callback}) => {
    return (
        <div className='next'>
            <button onClick={callback}>
                Next
            </button>
        </div>
    )
}
