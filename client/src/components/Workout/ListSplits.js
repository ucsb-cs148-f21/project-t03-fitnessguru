import React from "react";
import { useState, useEffect } from "react";
import Split from "./Split";
import "./ListSplits.css";
import { SplitButton } from "react-bootstrap";

export default function ListSplits({ user }) {
    const [splits, setSplits] = useState([]);

    useEffect(() => {
        fetch(`/splits/${user.id}`)
            .then((res) => res.json())
            .then((splits) => setSplits(splits));
    }, [user.id]);

    function compare(a, b){
        const aName = a.name.toUpperCase()
        const bName = b.name.toUpperCase()
        if(aName < bName){
            return -1
        }else if(aName > bName){
            return 1
        }else{
            return 0
        }
    }

    splits.sort(compare)

    return (
        <div className="splitList">
            {splits.map((split) => {
                return <Split className="split" split={split} user={user} />;
            })}
        </div>
    );
    /*
    const handleDelete = (split) => {
        let newSplits = splits;
        const index = newSplits.indexOf(split);
        if(index > -1){
            newSplits.splice(index,1);
        }
        splits = newSplits;
        return(handleDeleteSplit(split))
    }
    return(
        <div className="splitList">
            {splits.map((s)=>{
                return <Split className="split" handleDeleteSplit={handleDelete} s={s} />
            })}
        </div>
    )
    */
}
