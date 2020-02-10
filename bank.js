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

    constructor(clientID, clientName, clientAccounts) {
        this._clientID = clientID;
        this._clientName = clientName;
        this._clientAccounts = clientAccounts;
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

