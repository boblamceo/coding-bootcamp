type Input = number | any;

export default (inputNumber: Input, secondInputNumber?: Input) => {
  // 1. if the first input is not a number, leave the party
  if (!Number.isInteger(inputNumber)) {
    return
  }

  // 2. if there is no second input, return a function to accept a new function input
  if (secondInputNumber === undefined) {
    return (newInputNumber: Input) => {
      // 2.1. if the new input from the new function call is not a number, leave the party
      if(!Number.isInteger(newInputNumber)){
        return
      }

      // 2.2. the first input is a number and the new function call's input is a also a number, leave the party with the bonus
      return inputNumber + newInputNumber
    }
  }
  
  // 3. if there is a second input but it is not a number, leave the party
  if(!Number.isInteger(secondInputNumber)){
    return
  }  

  // 4. the party ends with bonus
  return inputNumber + secondInputNumber
};
 