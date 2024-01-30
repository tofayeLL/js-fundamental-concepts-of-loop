

/* ------practice task 1---- */
/* --show even numbers and skip odd numbers-- */
// by using for loop
for(let i = 1; i <= 40; i++){
    if(i % 2 !== 0){
       continue;
    }
  console.log(i);
}


// by using while loop
let n = 1;
while(n <= 40){
    n++;
    if((n % 2) === 1){
        continue;
    }
    console.log(n);
   
}