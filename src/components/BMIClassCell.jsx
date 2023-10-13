import React from 'react'
import BMICell from './BMICell'

const BMIClassCell = (num) => {
  if (num < 18) {
  return 'Underweight'
  }
  if (num >= 18 && num < 24) {
    return 'Healthy Weight'
  }
  if (num >= 24 && num < 30) {
    return 'Overweight'
  }
  else {
    return 'Obese'
  }

}

export default BMIClassCell