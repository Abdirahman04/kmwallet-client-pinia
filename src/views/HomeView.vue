<template>
  <div class="flex flex-col h-screen">
    <the-nav-bar></the-nav-bar>
    <div class="flex flex-grow flex-col">
      <section class="bg-white text-blue-600 text-center py-16">
        <h1 class="text-4xl font-bold">Welcome to kmwallet</h1>
        <p class="mt-4">Your Digital Wallet for Seamless Banking</p>
        <p class="mt-4">
          Experience secure transactions and financial freedom.
        </p>
        <a
          href="/signup"
          class="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full"
          >Get Started</a
        >
      </section>
      <section id="banking-services" class="py-16 bg-slate-400">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold mb-8 text-center">Banking Services</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-2">Deposit</h3>
              <p>
                Conveniently deposit funds into your account with secure and
                efficient processes.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-2">Withdraw</h3>
              <p>
                Withdraw money easily from ATMs or our branches whenever you
                need it.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-2">Transfer</h3>
              <p>
                Effortlessly transfer money between your accounts or to others
                with our online banking services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="community-forum" class="bg-gray-200 py-16">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold mb-8 text-center">Community Forum</h2>
          <p class="text-center">
            Join our community forum to connect with other users, share
            experiences, and get answers to your banking questions.
          </p>
          <a
            href="/signin"
            class="mt-8 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-full"
            >Sign In</a
          >
        </div>
      </section>

      <section class="py-16">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold mb-8 text-center">About kmwallet</h2>
          <p class="text-center">
            At kmwallet, we are committed to providing innovative and secure
            banking solutions. Learn more about our mission and dedication to
            customer satisfaction.
          </p>
        </div>
      </section>
      <footer class="bg-gray-900 text-white py-8">
        <div class="container mx-auto flex flex-col items-center">
          <div class="mb-4">
            <a
              href="#banking-services"
              class="text-blue-500 hover:underline mr-4"
              >Banking Services</a
            >
            <a
              href="#community-forum"
              class="text-blue-500 hover:underline mr-4"
              >Community Forum</a
            >
            <a href="#about" class="text-blue-500 hover:underline mr-4"
              >About Us</a
            >
            <a href="#contact-form" class="text-blue-500 hover:underline"
              >Contact Us</a
            >
          </div>

          <div class="text-center mb-4">
            <p>Email: support@kmwallet.com</p>
            <p>Phone: 123-456-7890</p>
          </div>

          <div class="text-center">
            <p>&copy; 2024 kmwallet. All rights reserved.</p>
            <p>Member FDIC. Equal Housing Lender.</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheNavBar from "@/components/TheNavBar.vue";
</script>
