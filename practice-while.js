

// practice --1

/* let count = 1;
while (count <= 60) {
    // console.log(count);
    console.log('I will invest at least 6 hours every single day for the next 6 months')
    count++;
} */


// ---practice task ---2--
// -----odd numbers----
// let n = 61;
/* while (n <= 100) {
     if (n % 2 === 1) {
         console.log(n);
     }
     n++; */


//    another way
/*  if((n % 2) !== 0){
     console.log(n);
 }
 n++;
 
} */



/* -----even numbers---- */

// let n = 78;
/* while (n <= 98) {
    if ((n % 2) === 0) {
        console.log(n);
    }
    n++; */

    //    another way
 /*    if ((n % 2) !== 1) {
        console.log(n);
    }
    n++;

} */




/* ----practice task three------ */

let n = 81;
let sum = 0;
while(n <= 131){
    if(n % 2 === 1){
        // console.log(n);
        sum = sum + n;
        console.log(sum);
    }
    n++;
}
console.log('All the odd numbers total sum:', sum);