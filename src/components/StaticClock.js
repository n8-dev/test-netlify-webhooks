import React from "react";

function StaticClock (props) {

        return (
            <>
                <h2>Clock at compile time</h2>
                <h2>It is {props.date.toLocaleTimeString()}.</h2>
            </>
        );
}

export default StaticClock;