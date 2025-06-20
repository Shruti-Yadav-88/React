import React from 'react'
import Grandchild from '../Grandchild'

const Son = ({gift}) => {
    return (
        <div>
            I am son component
            <p>I got {gift}</p>
            <Grandchild jutta={gift}/>
        </div>
    )
}

export default Son