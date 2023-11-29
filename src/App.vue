<template>
  <body class="w-screen h-screen " :class="isChecked1 ? 'light' : isChecked2 ? 'dark' : ''">
    <header class="bg-green-500 dark:bg-dark1 h-1/6 flex items-center justify-center">
      <img src="img\logo.png" alt=" " class="h-1/2 invert dark:invert-0"/>
    </header>
    <main class="bg-green-500 dark:bg-dark1 flex items-center justify-center h-5/6">
      <label for="switch1" class="flex items-center cursor-pointer">
      <div>
        <input id="switch1" type="checkbox" class="sr-only" v-model="isChecked1" @change="isChecked2 = false"/>
        <div class="bg-transparent w-14 h-20 rounded-full flex items-center justify-center border-lightBlack1 dark:border-dark2 border-2">
          <img src="img\sunIcon.png" alt=" " class="w-1/3 invert dark:invert-0" />
        </div>
      </div>
    </label>
    <label for="switch2" class="flex items-center cursor-pointer">
      <div>
        <input id="switch2" type="checkbox" class="sr-only" v-model="isChecked2" @change="isChecked1 = false"/>
        <div class="bg-dark2 w-14 h-20 rounded-full flex items-center justify-center border-lightBlack1 dark:border-dark2 border-2">
          <img src="img\moonIcon.png" alt=" " class="w-1/3" />
        </div>
      </div>
    </label>
    </main>
    <footer></footer>
  </body>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

let isChecked1 = ref(false);
let isChecked2 = ref(false);

onMounted(() => {
  let lastState = getCookie('lastState');
  if (lastState === 'isChecked2') {
    isChecked2.value = true;
  } else {
    isChecked1.value = true;
  }
});

watch(isChecked1, (newVal) => {
  if (newVal) {
    isChecked2.value = false;
    setCookie('lastState', 'isChecked1', 7);
  } else {
    isChecked2.value = true;
  }
});

watch(isChecked2, (newVal) => {
  if (newVal) {
    isChecked1.value = false;
    setCookie('lastState', 'isChecked2', 7);
  } else {
    isChecked1.value = true;
  }
});

function setCookie(name, value, days) {
  let date = new Date();
  date.setTime(date.getTime() + (days*24*60*60*1000));
  let expires = "expires="+ date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(';');
  for(let i=0;i < ca.length;i++) {
    let c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
</script>
