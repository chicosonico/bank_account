

var clientList =[];

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

    set setClientAccounts(editClientAccounts) {
        this._clientAccounts = editClientAccounts;
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
          
          newAccount = new BankAccount(accountNumberInput, clientNameInput);

          clientList[i].setClientAccounts.push(newAccount);
          
      }
  } 
   

    console.log(clientList);
    $(':input').val(''); // clean input fields from bootstrap 





  }


