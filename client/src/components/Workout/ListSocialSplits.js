import React from "react";
import { useState, useEffect } from "react";
import Split from "./Split";

export default function ListSocialSplits({ user }) {
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
}