import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {

  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const [treasureLocation, setTreasureLocation] = useState(
    Math.floor(Math.random() * board.length)
  )

  const [bombLocation, setBombLocation] = useState(
    Math.floor(Math.random() * board.length)
  )

  const handleGamePlay = (clickedSquare) => {
    let updateBoard = [...board]
    // set condition for if treasure location is the same as clicked index
    if (clickedSquare === treasureLocation){
      // then reassign state value to treasure emoji
      updateBoard[clickedSquare] = "💎"
      // update state with updated boatd
      setBoard(updateBoard)
    } else if (clickedSquare === bombLocation){
      // reassign state value to bomb emoji
      updateBoard[clickedSquare] = "💣"
      // update state with updated board
      setBoard(updateBoard)
    } else {
      // access value at clicked index and set value to tree emoji
      updateBoard[clickedSquare] = "🌲"
      // pass updateBoard to setBoard method to update state
      setBoard(updateBoard)
    }
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
      {board.map((square, index) => {
        return <Square square={square} index={index} key={index} handleGamePlay={handleGamePlay}/>
      })}
      </div>
    </>
  )
}

export default App
