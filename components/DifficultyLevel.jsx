import React from 'react'
import { AddressContext } from "../_app.jsx";

const DifficultyLevel = () => {

    const {
        difficulty
      } = useContext(AddressContext);
  return (
    <div>
        <span>Difficulty: {difficulty}</span>
    </div>
  )
}

export default DifficultyLevel