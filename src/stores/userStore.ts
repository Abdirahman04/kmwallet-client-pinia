import { defineStore } from "pinia";
import { ref, computed } from "vue";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export const useUserStore = defineStore("user", () => {
  const firstName = ref<string>("");
  const lastName = ref<string>("");
  const email = ref<string>("");
  const phoneNumber = ref<string>("");
  const password = ref<string>("");
  const isSet = ref<boolean>(false);

  const fullName = computed(() => `${firstName.value} ${lastName.value}`);

  function setUserStore(user: User) {
    firstName.value = user.firstName;
    lastName.value = user.lastName;
    email.value = user.email;
    phoneNumber.value = user.phoneNumber;
    password.value = user.password;
    isSet.value = true;
  }

  function deleteUserStore() {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    phoneNumber.value = "";
    password.value = "";
    isSet.value = false;
  }

  return {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    isSet,
    fullName,
    setUserStore,
    deleteUserStore,
  };
});
