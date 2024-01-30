<template>
  <router-view />
</template>

<style>
body::-webkit-scrollbar-track {
  background-color: #f5f5f5;
  border-radius: 10px;
}

/* Custom scrollbar thumb */
body::-webkit-scrollbar-thumb {
  background-color: #343456;
  border-radius: 10px;
  border: 2px solid #f5f5f5;
}

/* Custom scrollbar corner */
body::-webkit-scrollbar-corner {
  background-color: #f5f5f5;
}

/* Custom scrollbar */
body::-webkit-scrollbar {
  width: 12px;
}

/* Optional: Hover effect on the scrollbar thumb */
body::-webkit-scrollbar-thumb:hover {
  background-color: #212132;
}

/* Optional: Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Optional: Add styling for the content */
body {
  margin: 0;
  font-family: "Arial", sans-serif;
}
</style>
