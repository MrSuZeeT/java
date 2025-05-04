
const readline = require("readline");

const rl = readline.createInterface({input: process.stdin,output: process.stdout
});

function std (){
    rl.question("Enter ur name: ", function(name){
        rl.question("Enter your age: ", function(age){
            console.log("Your name is " + name);
            age = parseInt(age);

            if (isNaN(age)){
                console.log("Value Unrecognized.Kindly enter Numeric value!");
            }
                else if(age<18){
                    console.log("Age restricted");
                }
                else{
            console.log("Your age is " + age);
            }
             rl.close();
        });
    });
}
std();