import { defineStore } from "pinia";
import { ref, computed } from "vue";

interface Transaction {
  transactionId: string;
  accountId: string;
  transactionType: string;
  targetAccount: string;
  balance: number;
}
interface Account {
  accountId: string;
  customerId: string;
  accountType: string;
  balance: number;
  transactions: Array<Transaction>;
}
interface User {
  customerId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  accounts: Array<Account>;
}

export const useUserStore = defineStore("user", () => {
  const customerId = ref<string>("");
  const firstName = ref<string>("");
  const lastName = ref<string>("");
  const email = ref<string>("");
  const phoneNumber = ref<string>("");
  const password = ref<string>("");
  const accounts = ref<Array<Account>>([]);
  const transactions = ref<Array<Transaction>>([]);
  const isSet = ref<boolean>(false);

  const fullName = computed(() => `${firstName.value} ${lastName.value}`);

  function setUserStore(user: User) {
    customerId.value = user.customerId;
    firstName.value = user.firstName;
    lastName.value = user.lastName;
    email.value = user.email;
    phoneNumber.value = user.phoneNumber;
    password.value = user.password;
    accounts.value = user.accounts;
    isSet.value = true;
  }

  function addAccount(account: Account) {
    accounts.value.push(account);
  }

  function deleteAccount(accountId: string) {
    accounts.value.filter((acc) => acc.accountId != accountId);
  }

  function getTransactions(accountId: string) {
    for (const account of accounts.value) {
      if (account.accountId == accountId)
        transactions.value.push(...account.transactions);
    }
  }

  function addTransaction(accountId: string, transaction: Transaction) {
    for (const account of accounts.value) {
      if (account.accountId == accountId)
        account.transactions.push(transaction);
    }
  }

  function deleteUserStore() {
    customerId.value = "";
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    phoneNumber.value = "";
    password.value = "";
    isSet.value = false;
  }

  return {
    customerId,
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    isSet,
    fullName,
    setUserStore,
    deleteUserStore,
    accounts,
    addAccount,
    deleteAccount,
    getTransactions,
    addTransaction,
  };
});
