<template>
  <header class="header">
    <div class="container header-container">
      <div class="info">
        <RouterLink
            class="rt-link"
            :to="{name:'home'}"
        >
          <h1>Sunshop</h1>
        </RouterLink>
        <ul>
          <li>
            <RouterLink
                class="rt-link"
                :to="{name:'home'}"
            >
              Главная
            </RouterLink>
          </li>
          <li>
            <RouterLink
                class="rt-link"
                :to="{name:'profile'}"
            >
              Личный кабинет
            </RouterLink>
          </li>
          <li>
            <RouterLink
                class="rt-link"
                :to="{name:'catalog'}"
            >
              Каталог
            </RouterLink>
          </li>
          <li>
            <RouterLink
                class="rt-link"
                :to="{name:'home'}"
            >
              О нас
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">


</script>

<style scoped lang="scss">
@import "@/assets/css/mixins.scss";

.header {
  width: 100%;
  background-color: $myOrange;
}

.header-container {
  .info {
    padding: 50px 0;
    @include myFlex();

    h1 {
      font-size: 40px;
    }

    ul {
      @include myFlex();
      gap: 20px;

      .rt-link {
        font-size: 20px;
      }
    }
  }

}
</style>