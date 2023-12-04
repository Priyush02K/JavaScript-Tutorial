function countVowels(str){
    let count =0;
    for (const char of str ){
        if (char ==='a'|| char ==='e' ||char ==='i' ||char ==='o'|| char ==='u') {
            count ++;            
        }
    }
    console.log(count);
}
countVowels("priyush");


//arrow function 

const countVow =(str) =>{
    let count =0;
    for (const char of str ){
        if (char ==='a'|| char ==='e' ||char ==='i' ||char ==='o'|| char ==='u') {
            count ++;            
        }
    }
    console.log(count);
}
countVow("Bhumi panday")