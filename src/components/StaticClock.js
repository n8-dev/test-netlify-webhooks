import React from "react";

function StaticClock () {

        return (
            <>
                <h2>Clock at compile time</h2>
                <h2>It is {process.env.MY_VAR_EN}.</h2>
            </>
        );
}

export default StaticClock;