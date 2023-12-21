let propmtMsg=prompt("Who's there?");

var cancel = "canceled";
let count = "admin";
a = "Welcome!";

if(propmtMsg == "canceled"){
    console.log(cancel);
    
}else if(propmtMsg == "admin"){
    prompt("Password?");

    if(propmtMsg  == "canceled"){
        console.log(cancel);
    }else if(propmtMsg = a){
        alert("Welcome!");
    }else{
        console.log("Wrong password");
    }
}else{
    console.log("I dont Know you");
}