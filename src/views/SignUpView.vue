<template>
  <div class="flex flex-col h-screen">
    <the-nav-bar></the-nav-bar>
    <div class="flex flex-grow justify-center items-center bg-blue-500">
      <div
        class="md:m-0 m-1 md:w-[40%] w-[98%] bg-white shadow-lg rounded-md p-5"
      >
        <h1 class="text-3xl block text-center font-semibold">
          <i class="fa-solid fa-user-plus"></i>
          Sign up
        </h1>
        <hr class="mt-3" />
        <sign-up-input
          labelFor="fname"
          placeholder="Enter first name..."
          v-model="form.firstName"
          label="First name"
          :error1="errorMark.fname1"
          :error2="errorMark.fname2"
          error1Msg="first name"
          error2Msg="first name should be at least five characters long"
        ></sign-up-input>
        <sign-up-input
          labelFor="lname"
          placeholder="Enter last name..."
          v-model="form.lastName"
          label="Last name"
          :error1="errorMark.lname1"
          :error2="errorMark.lname2"
          error1Msg="last name"
          error2Msg="last name should be at least five characters long"
        ></sign-up-input>
        <sign-up-input
          labelFor="email"
          placeholder="Enter email address..."
          v-model="form.email"
          label="Email address"
          :error1="errorMark.email1"
          :error2="errorMark.email2"
          error1Msg="email address"
          error2Msg="invalid email"
        ></sign-up-input>
        <sign-up-input
          labelFor="phone"
          placeholder="Enter phone number..."
          v-model="form.phoneNumber"
          label="Phone number"
          :error1="errorMark.phone1"
          :error2="errorMark.phone2"
          error1Msg="phone number"
          error2Msg="phone number should be in the format '+000-000-000-000'"
        ></sign-up-input>
        <sign-up-password
          labelFor="pass"
          placeholder="Enter password..."
          v-model="form.password"
          label="Password"
          :error1="errorMark.pass1"
          :error2="errorMark.pass2"
          error1Msg="password"
          error2Msg="password should be at least five characters long"
        ></sign-up-password>
        <sign-up-password
          labelFor="cpass"
          placeholder="Confirm password..."
          v-model="confirmPass"
          label="Confirm password"
          :error1="errorMark.cpass1"
          :error2="errorMark.cpass2"
          error1Msg="password again"
          error2Msg="should be the same as the password above"
        ></sign-up-password>
        <div class="mt-5 flex">
          <div>
            <span class="font-light">Already have an account? </span
            ><a href="/signin" class="text-blue-500 font-semibold">sign in</a>
          </div>
        </div>
        <div class="mt-5">
          <button
            @click="postCustomer"
            class="rounded-md py-1 w-full bg-blue-500 text-white hover:bg-transparent hover:text-blue-500 border-2 border-blue-500"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheNavBar from "@/components/TheNavBar.vue";
import SignUpInput from "@/components/SignUpInput.vue";
import SignUpPassword from "@/components/SignUpPassword.vue";
import { reactive, ref } from "vue";
import { RegistrationForm, Validation } from "@/types/interfaces";
import { useUserStore } from "@/stores/userStore";
import router from "@/router";

const userStore = useUserStore();
const form = reactive<RegistrationForm>({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
});
const confirmPass = ref<string>("");

const errorMark = reactive<Validation>({
  fname1: false,
  fname2: false,
  lname1: false,
  lname2: false,
  email1: false,
  email2: false,
  phone1: false,
  phone2: false,
  pass1: false,
  pass2: false,
  cpass1: false,
  cpass2: false,
});

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(input: string): boolean {
  const formatRegex = /^\+\d{3}-\d{3}-\d{3}-\d{3}$/;
  return formatRegex.test(input);
}

function validate() {
  for (let key in errorMark) {
    // eslint-disable-next-line no-prototype-builtins
    if (errorMark.hasOwnProperty(key)) {
      errorMark[key as keyof typeof errorMark] = false;
    }
  }
  if (form.firstName == "") errorMark.fname1 = true;
  else if (form.firstName.length < 5) errorMark.fname2 = true;
  else {
    errorMark.fname1 = false;
    errorMark.fname2 = false;
  }
  if (form.lastName == "") errorMark.lname1 = true;
  else if (form.lastName.length < 5) errorMark.lname2 = true;

  if (form.email == "") errorMark.email1 = true;
  else if (!isValidEmail(form.email)) errorMark.email2 = true;

  if (form.phoneNumber == "") errorMark.phone1 = true;
  else if (!isValidPhoneNumber(form.phoneNumber)) errorMark.phone2 = true;

  if (form.password == "") errorMark.pass1 = true;
  else if (form.password.length < 5) errorMark.pass2 = true;

  if (confirmPass.value == "") errorMark.cpass1 = true;
  else if (confirmPass.value !== form.password) errorMark.cpass2 = true;
}

function checkValidation() {
  for (let key in errorMark) {
    if (
      // eslint-disable-next-line no-prototype-builtins
      errorMark.hasOwnProperty(key) &&
      errorMark[key as keyof typeof errorMark] !== false
    ) {
      return false;
    }
  }
  return true;
}

function addCustomer() {
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  };
  const url = "http://127.0.0.1:9090/kmwallet/customer";
  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      userStore.setUserStore(data);
      router.push({ name: "dashboard" });
    })
    .catch((error) => {
      console.log(error);
      alert("There was a problem in the account creation!");
    });
}

function postCustomer() {
  validate();
  if (checkValidation()) {
    addCustomer();
  }
}
</script>
