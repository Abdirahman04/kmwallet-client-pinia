import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { Account, Transaction } from "@/types/interfaces";

export const useAccountStore = defineStore(
  "account",
  () => {
    const accountId = ref<string>("");
    const customerId = ref<string>("");
    const accountType = ref<string>("");
    const balance = ref<number>(0);
    const transactions = ref<Array<Transaction>>([]);
    const isSet = ref<boolean>(false);

    const amount = computed(() =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(balance.value)
    );

    function setAccountStore(account: Account) {
      accountId.value = account.accountId;
      customerId.value = account.customerId;
      accountType.value = account.accountType;
      balance.value = account.balance;
      transactions.value.push(...account.transactions);
      isSet.value = true;
    }

    function deleteAccountStore() {
      accountId.value = "";
      customerId.value = "";
      accountType.value = "";
      balance.value = 0;
      transactions.value.length = 0;
      isSet.value = false;
    }

    function addTransaction(transaction: Transaction) {
      transactions.value.push(transaction);
    }

    function transaction(sign: string, value: number) {
      if (sign == "plus") balance.value = Number(balance.value) + Number(value);
      else balance.value -= Number(value);
    }

    return {
      accountId,
      customerId,
      accountType,
      balance,
      transactions,
      isSet,
      amount,
      setAccountStore,
      deleteAccountStore,
      addTransaction,
      transaction,
    };
  },
  {
    persist: true,
  }
);
