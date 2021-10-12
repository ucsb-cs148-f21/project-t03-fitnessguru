import React from 'react';
import {useState} from 'react';
import Split from './Split'

const ListSplits = ({splits}) => {
    return(
        <div id="splitList">
            {splits.map((s)=>{
                return <Split s={s} />
            })}
        </div>
    )
}

export default ListSplits;