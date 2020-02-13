

var clientList =[];
var accountList = [];
var ammount = parseInt(0);


// Class Account

class BankAccount {
    
    constructor(accountID, client) {
      this._accountID = accountID;
      this._client = client;
      this._balance = 0;
      this._movements = 0;
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
        this._balance = this._balance + ammount;
        
      }

      withdrawFunds(ammount){
        
        this._balance = this._balance - ammount;

      }

      addMovement(){
        this._movements = this._movements + 1;
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
          
          newAccount = new BankAccount(accountNumberInput, clientNameInput); // zero parameter for avoid undefined before movements
          console.log(newAccount);
          clientList[i].addAccount(newAccount);
          accountList.push(newAccount);
          
      }
  } 

  // function createAccount(){
  //   let clientNameInput = document.getElementById("clientInputAccount").value;
  // for (client of clientList){
  //   if (nombre == clientNameInput){
  //     let accountNumberInput = document.getElementById("accountID").value;
  //     newAccount = new BankAccount(accountNumberInput, clientNameInput); // zero parameter for avoid undefined before movements
  //     console.log(newAccount);
  //     clientList[i].addAccount(newAccount);
  //     accountList.push(newAccount);

  //   }
  // }
   
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
        accountList[i].addMovement();
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
        accountList[i].addMovement();  
      }
    
  } 

    console.log(clientList);
    $(':input').val(''); // clean input fields from bootstrap 


  }

  function showBalance(){

    let accountSearched= document.getElementById("accountSearched").value;
    
    // console.log(ammountMovement);
   

    for (i=0; i < accountList.length; i++) {
      if(accountSearched == accountList[i].getAccountID){ 
        document.getElementById("result").innerHTML = "Client: "+ accountList[i].getClient +"</br>"+ "Balance: " + accountList[i].getBalance + "€" + "</br>" + 
        "Movements: " + accountList[i].getMovements; 
        
      }
  } 
    
  }


