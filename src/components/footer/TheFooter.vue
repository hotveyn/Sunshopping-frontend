<template>
  <footer class="footer">
    <div class="footer-container container">
      <h1>Sunshop</h1>
      <ul class="links">
        <li> <h3>Полезное</h3> </li>
        <li>
          <RouterLink
              class="rt-link"
              :to="{name:'home'}"
          >
            Главная
          </RouterLink>
        </li>        <li>Личный кабинет</li>
        <li>Каталог</li>
        <li>Контакты</li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped lang="scss">
@import "@/assets/css/mixins.scss";

.footer {
  min-height: 150px;
  padding: 50px 0;
  background-color: $myBlack;
  color: white;

  .footer-container {
    @include myFlex($jc: center, $ai: start);
    gap: 50px;
    ul {
      @include myFlex($jc: center, $ai: start);
      flex-direction: column;
      gap: 10px;
      h3{
        margin-bottom: 10px;
      }
      .rt-link{
        color:white;
      }
    }
  }
}
</style>