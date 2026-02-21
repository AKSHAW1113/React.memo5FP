import React from 'react'

function Child({ fname }) {

    console.log('child component is rendered.');

    return (
        <h2>Hello, {fname}.</h2>
    )
}

export default React.memo(Child)