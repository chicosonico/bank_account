

var clientList =[];
var accountList = [];
var ammount = parseInt(0);


// Class Account

class BankAccount {
    
    constructor(accountID, client, balance, movements) {
      this._accountID = accountID;
      this._client = client;
      this._balance = balance;
      this._movements = movements;
    }

    get getAccountID() {
        return this._accountID;
    }
    get getClient() {
        return this._client;
    }
    get getBalance() {
        return this._balance;
    }
    get getMovements() {
        return this._movements;
    }

   

    set setClient(editClient) {
        this._client = editClient;
      }

    set setBalance(editBalance) {
        this._balance = editBalance;
      }

    set setMovements(editMovements) {
        this._movements = editMovements;
      } 

      addFunds(ammount){
        this._balance = parseInt(this._balance) + ammount;
        
      }

      withdrawFunds(ammount){
        this._balance = parseInt(this._balance) - ammount;
      }

      addMovement(move){
        this._movements = parseInt(this._movements) + move;
      }
      



 } 

// Client class

 class Client{
       
    constructor(clientID, clientName) {
        this._clientID = clientID;
        this._clientName = clientName;
        this._clientAccounts = [];
      }

    get getClientID() {
        return this._clientID;
    }
    get getClientName() {
        return this._clientName;
    }
    get getClientAccounts() {
        return this._clientAccounts;
    }
  

    set setClientName(editClientName) {
        this._clientName = editClientName;
      }

    set setClientAccounts(clientAccounts) {
        this._clientAccounts = clientAccounts;
      }

      addAccount(){
        this._clientAccounts.push(newAccount);

      }


 }


  function createClient(){
    let clientIDInput= document.getElementById("clientID").value;
    let clientNameInput = document.getElementById("clientName").value;
   
 
    newClient = new Client(clientIDInput, clientNameInput);
 
    clientList.push(newClient);
    console.log(clientList);
    $(':input').val(''); // clean input fields from bootstrap 


  }

function createAccount(){


    let clientNameInput = document.getElementById("clientInputAccount").value;
    let accountNumberInput = document.getElementById("accountID").value;

    for (i=0; i < clientList.length; i++) {
      if(clientNameInput == clientList[i].getClientName){
          
          newAccount = new BankAccount(accountNumberInput, clientNameInput, 0, 0); // zero parameter for avoid undefined before movements
          console.log(newAccount);
          clientList[i].addAccount(newAccount);
          accountList.push(newAccount);
          
      }
  } 
   
    console.log(clientList);
    $(':input').val(''); // clean input fields from bootstrap 


  }

  function addMoney(){


    let accountMovement= document.getElementById("accountMovement").value;
    let ammountMovement = document.getElementById("ammountMovement").value;
    ammountMovement = parseInt(ammountMovement);
    // console.log(ammountMovement);
   

    for (i=0; i < accountList.length; i++) {
      if(accountMovement == accountList[i].getAccountID){ 
        accountList[i].addFunds(ammountMovement); 
        accountList[i].addMovement(1);
      }
  } 

    console.log(clientList);
    $(':input').val(''); // clean input fields from bootstrap 


  }

  function withdrawMoney(){


    let accountMovement= document.getElementById("accountMovement").value;
    let ammountMovement = document.getElementById("ammountMovement").value;
    ammountMovement = parseInt(ammountMovement);
    // console.log(ammountMovement);
   

    for (i=0; i < accountList.length; i++) {
      if(accountMovement == accountList[i].getAccountID){ 
        accountList[i].withdrawFunds(ammountMovement); 
        accountList[i].addMovement(1);  
      }
  } 

    console.log(clientList);
    $(':input').val(''); // clean input fields from bootstrap 


  }


