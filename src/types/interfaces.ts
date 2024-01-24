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
