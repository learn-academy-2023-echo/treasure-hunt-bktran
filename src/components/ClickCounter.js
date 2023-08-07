import React from "react"

const ClickCounter = ({clickNum}) => {
    if (clickNum === 0){
        alert("Game Over")
    }

    return (
        <>
            <h2>Clicks Remaining: {clickNum}</h2>
        </>
    )
}

export default ClickCounter