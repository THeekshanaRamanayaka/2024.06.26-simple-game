//console.log("Hello");

// class Customer{
//     name;
//     age;
//     address;

//     // Customer(){
        
//     // }

//     constructor(name,age,address){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }

//     setName(name){
//         this.name = name;
//     }
//     getName(){
//         return this.name;
//     }
//     getAge(){
//         return this.age;
//     }
//     getAddress(){
//         return this.address;
//     }
// }

// let Customer01 = new Customer("Saman",18,"Panadura");
// console.log(Customer01.getName());
// console.log(Customer01.getAge());
// console.log(Customer01.getAddress());

let randomNumber = Math.floor((Math.random()*10)+1);
console.log(randomNumber);
let count = 0;
function guess(){
    count++;
    let lblOutput = document.getElementById("output");
    if(count <= 3){
        let userInputNumber = (document.getElementById("userInput").value);
        if(randomNumber == userInputNumber){
            lblOutput.innerHTML = "You Win the Game !!!"
        }else if(randomNumber > userInputNumber){
            lblOutput.innerHTML = "Try Again !!! Your Number is greater than expected ..."
        }else{
            lblOutput.innerHTML = "Try Again !!! Your Number is less than expected ..."
        }
    }else{
        document.getElementById("output").disabled = true;
        document.getElementById("btnGuessNumber").disabled = true;
        lblOutput.innerHTML = "Out Of Rounds ..."
    }
}