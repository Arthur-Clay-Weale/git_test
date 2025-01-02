

const arr = [1,2,3,4,5,6];

function sumOfTripplesEvens (array) {
    const result = array.filter(num => num % 2 == 0).map(num => num * 3).reduce((prev,current) => {return prev + current}, 0);
    console.log(result);
}

sumOfTripplesEvens(arr);