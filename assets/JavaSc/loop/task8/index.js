var n = 45;

for(i = 1; i<=n; i++){
    if(i%3==0){
        console.log(i,"Fizz");
    }else if(i%5==0){
        console.log(i,"Buzz");
    }
    for(j=1; j<=n; j++){
        if(i%3==0 && i%5==0){
           console.log(i,"FizzBuzz");
        }
    }
}