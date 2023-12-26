import React, { useContext } from 'react'
import { GlobaInfo } from './App'
import Superchild from './superchild';

function Child() {

    const { appcolor } = useContext(GlobaInfo);

    return (
        <>
            <div style={{ color: appcolor }}>child</div>
            <Superchild />
        </>
    )
}

export default Child