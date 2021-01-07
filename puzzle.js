function pyramidDescent(target, pyramid) {

  const formattedPyramid = makePyramid(pyramid);

  //should return path and total
  function traversePyramid(row = 0, col = 0, memo = []) {
    if
    let val;
    if (memo[row][col]) {
      val = memo[row][col];
    }
    else {
      val = null;
      memo[row][col] = val;
    }
  }





  const makeMemo = (path, valid, total) => ({
    path,
    valid,
    total
  })

  memo[row][col] = makeMemo()
  //method that returns node at position
  //x.right()

}
const sumRight = {
  path: '',
  total: 0
};
//start at row one p 1
//memoize row 1
//choose value to go to next
//what about divisors? 
//check if target % n === 0
t.product = product * n

const val = 0
const row = null
const index = null

function checkPath() {
  memoTable.push({
    path: '',
    total: 0
    //memoize each cell with input as index????

  })

  //mark paths that aren't viable in memo table as well as point up until then
  //if left is invalid in memo table
  //traverse right


  const traverseNextNode = (pyramid, node) => {
    if (!node.left && !node.right) {
      return;
    }
    //I dont want to check if the current is viable, I want to check if the next is viable
    const left = node.left.value * current.product;
    if (target % left === 0) {
      //verifies that target is divisible by number
      //if number is too large, target mod n is positive, not 0

      //if invalid memoize and break

    }
    else if (target % right === 0) {
      //run function that calls recursive function from here
    }

    //MAKE COLSURES
    //have memo table at middle level
    //validate and track moves at inner level

    else {
      break;
    }


  }


}

return {
  path: [],
  total: 0
}


      //do one path
      //if not = x
      //do other path

    }



return;
}



function makePyramid(pyramid) {
  /*this takes in the pyramid string and turns it into a multidimensional array 
  with O(n) time complexity*/

  const formattedPyramid = [];
  let row = [];
  let rowLength = 0;
  let num = '';
  const regex = /\d/;

  for (let i = 0; i < pyramid.length; i++) {
    //if pyramid[i] is a digit, add to digit string
    if (pyramid[i].match(regex)) {
      num = `${num}${pyramid[i]}`
    }
    else {
      /*if the intended rowLength is greator than the actual length,
      add new item to row and reset num*/
      if (rowLength > row.length) {
        row.push(Number(num));
        num = '';
      }
      else {
        /*otherwise, add num to row, then add row to pyramid*/
        row.push(Number(num));
        formattedPyramid.push(row);

        num = '';
        row = [];
        rowLength += 1;
      }
    }
  }
  /*add last number to row*/
  row.push(Number(num));
  /*add last row to pyramid*/
  formattedPyramid.push(row);

  return formattedPyramid;
}

pyramidDescent(720, `2
4,3
3,2,6
2,9,5,2
10,5,2,15,5`)
