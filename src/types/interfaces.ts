export interface Transaction {
  transactionId: string;
  accountId: string;
  transactionType: string;
  targetAccount: string | null;
  balance: number;
}
export interface Account {
  accountId: string;
  customerId: string;
  accountType: string;
  balance: number;
  transactions: Array<Transaction>;
}
export interface User {
  customerId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  accounts: Array<Account>;
}

export interface RegistrationForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export interface Validation {
  fname1: boolean;
  fname2: boolean;
  lname1: boolean;
  lname2: boolean;
  email1: boolean;
  email2: boolean;
  phone1: boolean;
  phone2: boolean;
  pass1: boolean;
  pass2: boolean;
  cpass1: boolean;
  cpass2: boolean;
}

export interface UserData {
  customerId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export interface AddAccount {
  isFormVisible: boolean;
  sign: string;
}

export interface NewAccount {
  customerId: string;
  accountType: string;
}

export interface Community {
  id: string;
  message: string;
  customerId: string;
  timestamp: number[];
}

export interface ApiOptions {
  method: string;
  headers: {
    "Content-Type": "application/json";
  };
  body: string;
}
