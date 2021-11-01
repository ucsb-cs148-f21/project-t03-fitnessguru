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

    console.log(splits);
  }, [user.id]);

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
