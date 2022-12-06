<template>
  <main>
    <div class="container container-auth">

      <div class="login">
        <h2>логин</h2>
        <form>
          <input
              v-model.trim="logLog"
              type="text"
              placeholder="login"
          >
          <input
              v-model.trim="passwordLog"
              type="password"
              placeholder="nickname"
          >
          <button
              @click.prevent="login()"
          >
            Авторизоваться
          </button>
        </form>
      </div>
      <div class="reg">
        <h2>регистрация</h2>
        <form>
          <input
              v-model.trim="logReg"
              type="text"
              placeholder="login"
          >
          <input
              v-model.trim="nickReg"
              type="text"
              placeholder="nickname"
          >
          <input
              v-model.trim="passwordReg"
              type="password"
              placeholder="password"
          >
          <button
              @click.prevent="reg"
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import {FormRequest} from "@/services/FormRequest";
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";

const route = useRouter();

let logReg = ref<string>("");
let nickReg = ref<string>("");
let passwordReg = ref<string>("");

let logLog = ref<string>("");
let passwordLog = ref<string>("");




async function login() {
  let logRequest = new (FormRequest as any)("http://127.0.0.1:8000/api/login", "POST",{
    login: logLog.value,
    password: passwordLog.value,
  });

  if (logLog.value && passwordLog.value) {
    let response = await logRequest.goSend();
    if (response.ok) {
      let data = await response.json();
      localStorage.setItem("token", data.data.token);
      await route.push({name: "home"})
    }

  } else {
    console.log("log not");
  }
}

async function reg() {
  let regRequest = new (FormRequest as any)("http://127.0.0.1:8000/api/register", "POST", {
    login: logReg.value,
    nickname: nickReg.value,
    password: passwordReg.value,
  });

  if (logReg.value && nickReg.value && passwordReg.value) {
    let response = await regRequest.goSend();
    if (response.ok) {
      await route.push({name: "home"})
    }

  } else {
    console.log("reg not");
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/css/mixins.scss";

.container-auth {
  min-height: 70vh;
  @include myFlex($jc: center);
  gap: 100px;

  > div {
    @include myFlex($jc: center);
    flex-direction: column;

    form {
      @include myFlex($jc: center);
      flex-direction: column;
    }
  }
}
</style>