import React from 'react'

const BMICell = (num1, num2) => {
  
  const BMI = 703 * (num1/(num2 * num2))
  return BMI.toFixed(1)
}

export default BMICell