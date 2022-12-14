

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
    else if (message==3) {
        withdrawal();
    }
    else if ( message==4) {
        accountName();
    }
    else if (message==5) {
        exitAccount();
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
 //console.log("Deposite = "+message)
 if (isNaN (message)) {
    message = prompt("Invalid input");
    return;
 }
    account.balance+=message;
    message= prompt(menus+"\n Your current balance"+account.balance);
}
function withdrawal() {
    message = parseFloat(prompt("How much you would like to withdraw? "));
    account.balance-=message;
    message= prompt(menus+"\n Your current balance"+ account.balance);
}
function accountName() {

    message = parseFloat(prompt("Your account name is:-"+account.accountHolder));
    
}
function exitAccount() {
    message = prompt("You are logged out");
}
const account = {
    balance: 100,
    accountHolder: "Deepa",
};
console.log(account.balance);
atm();