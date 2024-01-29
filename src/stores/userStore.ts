import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { Account, Transaction, User, UserData } from "@/types/interfaces";

export const useUserStore = defineStore(
  "user",
  () => {
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
    const amount = (balance: number) =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(balance);

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

    function updateUser(user: UserData) {
      customerId.value = user.customerId;
      firstName.value = user.firstName;
      lastName.value = user.lastName;
      email.value = user.email;
      phoneNumber.value = user.phoneNumber;
      password.value = user.password;
    }

    function addAccount(newAccount: Account) {
      accounts.value.push(newAccount);

      for (const account of accounts.value) {
        if (account.accountId == newAccount.accountId)
          account.transactions = [];
      }
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
      accounts.value = [];
      transactions.value = [];
      isSet.value = false;
    }

    function changeBalance(accountId: string, change: number, type: string) {
      for (const account of accounts.value) {
        if (account.accountId == accountId) {
          if (type == "sum")
            account.balance = Number(account.balance) + Number(change);
          else account.balance -= Number(change);
        }
      }
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
      amount,
      changeBalance,
      updateUser,
    };
  },
  {
    persist: true,
  }
);
