

/* ---practice task one----- */
/* for(let i = 1; i <= 200; i++){
    if(i === 100){
        break;
    }
    console.log(i);
} */


// by using while
/* let n = 1;
while(n <= 200){
   if(n === 100){
    break;
   }
   console.log(n);
   n++;
} */







/* ------practice task two------ */
let n = 1;
let sum = 0;
while(n <= 50){
    // console.log(n);
    sum = sum + n;
    if(sum >= 100){
        break;
    }
    console.log(sum);
    n++;
}


// by using for loop

/* let sum = 0;
for(let i = 1; i <= 50; i++){
    // console.log(i);
    sum = sum + i;
    if(sum >= 100){
        break;
    }
    console.log(sum);
} */