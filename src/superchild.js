import React, { useContext } from 'react'
import { GlobaInfo } from './App'




function Superchild() {
    const { seccolor } = useContext(GlobaInfo);
    return (
        <div style={{ color: seccolor }}>superchild</div>
    )
}

export default Superchild