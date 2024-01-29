/* ---continue---that means skip iteration---when we wants to skip something in the loop we will use continue */


/* for(let i = 0; i <= 10; i++){
    if((i % 2) === 1){
        continue;
    }
    console.log(i);
} */



// by use while loop
let n = 0;
while(n <= 15){
    n++;
    if((n % 5) !== 0){
        continue;
    }
    console.log(n);
}

