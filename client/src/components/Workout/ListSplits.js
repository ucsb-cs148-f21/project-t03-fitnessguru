import React from "react";
import Split from "./Split";
import "./ListSplits.css";

const ListSplits = ({ splits }) => {
  return (
    <div className="splitList">
      {splits.map((s) => {
        return <Split className="split" s={s} />;
      })}
    </div>
  );
};

export default ListSplits;
