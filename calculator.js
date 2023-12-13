//function add, sums num1 to num2 and returns it's result
function add(num1, num2)
{
  return num1 + num2;
}

//fuction subtract, rests num2 form num1 and returns it's result
function subtract(num1, num2)
{
  return num1 - num2;
}

//function multiply, multiplies num1 to num2 and returns it's result
function multiply(num1, num2)
{
  return num1 * num2;
}

//fuction divide, divides num2 form num1 and returns it's result
function divide(num1, num2)
{
  return num1/num2;
}

//function power, multiplies num1 by itself num2 times and returns it's result
function power(num1, num2)
{
  return num1 ** num2;
}

//function mod, divides num2 to num1 and returns the remainder
function mod(num1, num2)
{
  return num1 % num2;
}

//function sqrt, returns square root of num
function sqrt(num)
{
  return Math.sqrt(num);
}


function calculate(expression) 
{
  let num1;
  let operator;
  let num2;

  const tokens = expression.split(' ');

  if(tokens.length == 2)
  {
    operator = tokens[0];
    num1 = Number(tokens[1]);
    
  if(Number.isNaN(num1))
  {
    alert("not a number");
    return;
  }

  if (operator != "sqrt")
  {
    alert("incorrect operator");
    return;
  }
  else
  {
    return sqrt(num1);
  }

  }
  else if(tokens.length == 3)
  {
  num1 = Number(tokens[0]);
  num2 = Number(tokens[2]);
  if(Number.isNaN(num1) || Number.isNaN(num2))
  {
    alert("not a number");
    return;
  }
  
  operator = tokens[1];

  switch(operator)
  {
    case '+':
      return add(num1,num2);
      break;
    case '-':
      return subtract(num1,num2);
      break;
      case '*':
        return multiply(num1,num2);
        break;
      case '/':
        return divide(num1,num2);
        break;
        case '^':
          return power(num1,num2);
          break;
        case '%':
          return mod(num1,num2);
          break;   
          default:
            alert("incorrect operator");
            return;    
  }
  }
  else
  {
    alert("incorrect input");
    return;
  }

}


/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
