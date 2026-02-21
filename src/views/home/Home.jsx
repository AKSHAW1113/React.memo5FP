import React, { useState } from 'react'
import Child from '../child/Child';


function Home() {
    const [count, setCount] = useState(0)

    console.log('parent component is rendered.');

    return (
        <>
            <h1>Parent count:: {count}</h1><br />
            <button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded' onClick={() => setCount(count + 1)}>
                INCREMENT
            </button> <br /><br />

            <Child fname='rohit' />
            
        </>
    )
}
export default Home