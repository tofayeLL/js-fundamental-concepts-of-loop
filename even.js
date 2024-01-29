
/* show output all even numbers between 1 to 10 */

/* let num = 0;
while(num <= 10){
   
    console.log(num);
     num += 2;
} */


/* same problem by using for loop */
let num = 1;
while(num <= 10){
    console.log(num);
    if(num % 2 === 0) {
        console.log('even number is', num);
    }
    num++; 
    
    
}

