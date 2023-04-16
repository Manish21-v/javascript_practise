function pattern1(n) {

  //prints on each row
  for (let outer = 0; outer < n; outer++) {
    
    //Print on every column
    for (let inner = 0; inner < n; inner++) {
      process.stdout.write("*");    
    }
    console.log();// to print on new line
  }
}

function pattern2(n){
  //for printing on each row
  for (let outer = 0; outer < n; outer++) {
    
    //for printing on each column
    for (let inner = 0; inner <= outer; inner++) {
      process.stdout.write("*");
    }
    console.log();//To print on new line
  }
}


function pattern3(n){
  //for printing on each row
  for (let outer = n; outer > 0; outer--) {
    
    //for printing on each column
    for (let inner = outer; inner > 0; inner--) {
      process.stdout.write("*");
    }
    console.log();//To print on new line
  }
}

function pattern4(n){
  //for printing on each row
  for (let inner = 0; inner < n; inner++) {

    //for printing on each column
    for (let outer = 0; outer <= inner; outer++) {
      process.stdout.write(`${outer+1}`);
    }
    console.log();//for printing on new line
  }
}

function pattern5(n){
  //for printing on each row
  let decrementColumn = 4;
  for (let inner = 0; inner < (2*n -1) ; inner++) {
    let column ;
    if(inner < 5) {
      column = inner + 1;
    }
    else{
      column = decrementColumn;
      decrementColumn -= 1;
    }
    for (let outer = 0; outer < column; outer++) {
        process.stdout.write('*');      
    }
    console.log();//printing on new line
  }
}

function pattern6(n){
  //for printing on each row
  for (let inner = 0; inner < (2*n -1) ; inner++) {
    
    for (let outer = 0; outer < column; outer++) {
        process.stdout.write('*');      
    }
    console.log();//printing on new line
  }
}

function pattern6(n) {
  //for printing on each row
  for (let outer = 1; outer <= n; outer++) {
    
    //for printing space
    for (let space = n-outer; space > 0; space--) {
      process.stdout.write("#");
    }

    //for printing on each column
    for (let inner = 1; inner <= outer; inner++) {
      process.stdout.write(`${inner} `);
    }
    console.log();
  }
}




function pattern7(n) {
  //for printing on each row
  for (let outer = 1; outer <= n; outer++) {
    
    //for printing space
    for (let space = n-outer; space > 0; space--) {
      process.stdout.write(" ");
    }

    //for printing on each column
    for (let inner = 0; inner < outer; inner++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

// function pattern8(n) {
//   // for printing each row
//   for (let outer = 1; outer <= n; outer++) {
//     // for printing spaces
//     for (let space = n - outer; space > 0; space--) {
//       // print space
//       process.stdout.write(" ");
//     }

//     // for printing stars
//     for (let inner = 0; inner < outer; inner++) {
//       // print star and space
//       process.stdout.write("* ");
//     }
//     console.log();
//   }
// }

// // Example usage with 5 rows
// pattern8(5);


// function printPyramid(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let spaces = ' '.repeat(rows - i);
//     let stars = '*'.repeat(2 * i - 1);
//     console.log(spaces + stars);
//   }
// }

// Example usage with 5 rows
// const rows = 5;
// printPyramid(rows);
pattern1(4);
pattern2(4);
pattern3(4);
pattern4(4);
pattern5(5);
pattern6(5);
pattern7(5);