

const menus="Select a choice:- 1.) See Balance 2.) Make a Deposite 3.) Make a withdrawal 4.) Get account Name 5.) Exit";
function atm() {
    message = parseFloat(prompt("Select a choice:- 1.) See Balance 2.) Make a Deposite 3.) Make a withdrawal 4.) Get account Name 5.) Exit"));
    console.log("user input="+message)
    if (message == 1){
        getBalance();
    }
    else if (message==2){
        deposit();
    }
    else {
        message = prompt("Invalid input");
    }
}
function getBalance() {
    message = prompt(menus+"\n Your balance=" +account.balance);
}
function deposit() {
    message = parseFloat(prompt("How much would you like to deposit?"));
    account.balance+=message;
    message= prompt(menus+"\n Your current balance"+account.balance);
}
const account = {
    balance: 100,
};
console.log(account.balance);
atm();