

/* ------practice task 1---- */
/* --show even numbers and skip odd numbers-- */
// by using for loop
/* for(let i = 1; i <= 40; i++){
    if(i % 2 !== 0){
       continue;
    }
  console.log(i);
} */


// by using while loop
/* let n = 1;
while(n <= 40){
    n++;
    if((n % 2) === 1){
        continue;
    }
    console.log(n);
   
} */







/* ------practice task 2------- */
/* -----odd numbers but----- */
// by using for loop
for(let i = 55; i <= 85; i++){
    if(i % 2 === 1){
        if(i % 5 === 0){
            continue;
        }
        console.log(i);
    }
}


// by using while loop
let n = 55;
while(n <= 85){
    n++;
    if(n % 2 !== 0){
       
        if(n % 5 === 0){
            continue;
        }
        console.log(n);
    }
    
}