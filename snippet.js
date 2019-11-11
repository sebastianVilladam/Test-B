/*
* 1. Please optimize the following code, to make it run lighter. Discard stuff you may deem unnecessary 
* R/: the require line was doin nothig because the lodas library was needed.
*     I got rid of the squares array, it did not have any purpose.
*     To print tthe sequares a simply used a forech function and call the printNumber function with
*     the squareUp function as a parameter so it is simplier ad faster.
*/
var numbers = [1, 5, 6, 10, 13, 15, 17, 21];
function printSquares() {
  numbers.forEach(element => {
      printNumber(squareUp(element));
  });
}

function squareUp(n) {
  return n * n;
}

function printNumber(n) {
  console.log(n)
}

printSquares();

/*
* 2. The following code should uppercase the names in the array, however, it's not working :(. Could you fix it? 
* R/: The  code wasnt working because the uso of the arrays, I just simply it by using only ona array, names.
* By using one array, and a for in instead of a basic for, it makes the code faster
*/

const names = ['ron', 'lamar', 'tom', 'mike'];
console.log(names);

function capitalizeNames(names)
{
    for (var key in names) 
    {
        var name = names[key] + "";
        names[key] = name.toUpperCase();    
    }
}

capitalizeNames(names);
console.log(names);

/*
*  3. The following code should be able to delete all elements of an array, however, there is a problem. Could you try to fix it please?
* The problem here was the use of a auto iterator like foreach and forin, this both methods just delete the half of elemnts in the array
* thats becouse wen the function eliminates an element the array leght is reduced per element eliminated, so if the array has 50 elements
* the function will eliminate 25 elements, and so on. So the solution was to simply use a variable called n to keep the numbers of elements
* on the array and use a basic for to eliminate the elements.
*/

const fillArray = (n) => {
  const num = [];
  for (i = 0; i <= n; i++) {
    num.push(i)
  }
  console.log(num);
  return num;
};

const deleteNumbers = () => {
    n = 10;
  const numbers = fillArray(n);
  for (var i = 0; i < n + 1; i++) 
  {
      numbers.shift();
  }
  console.log(numbers)
}

deleteNumbers()