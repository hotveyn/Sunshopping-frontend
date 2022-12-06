<template>
  <main class="main">
    <div class="container">
      <div
          v-if="isLoading"
          class="loading"
      >
        Загрузка
      </div>
      <div
          v-else
          class="product"
      >
        <p>Название - {{ product?.title }}</p>
        <p>Цена - {{ product?.to_price }}</p>
        <p>Скидочная цена - {{ product?.cost_price }}</p>
        <p>Описание - {{ product?.title }}</p>
        <img
            class="product__img"
            :src="`http://127.0.0.1:8000${img}`"
            alt="product"
        >
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import IFullProduct from "@/interfaces/IFullProduct";
import {FormRequest} from "@/services/FormRequest";
import {ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();

let productId = route.params.id;

let request = new (FormRequest as any)(`http://127.0.0.1:8000/api/product/${productId}`);
let isLoading = ref<boolean>(true);
let product = ref<IFullProduct>();
let img = ref<string>();
async function getProductInfo() {
  let response = await request.goSend();
  if (response.ok) {
    response = await response.json();
    product.value = response.data;
    img.value = product.value?.image.url;
    isLoading.value = false;
    return;
  }
}

getProductInfo();
</script>

<style scoped lang="scss">
@import "@/assets/css/mixins.scss";

.main {
  min-height: 70vh;

  @include myFlex($jc:center);
}

.product{
  @include myFlex($jc:center);
  flex-direction: column;
  .product__img{
    max-width: 400px;
    max-height: 300px;
    object-fit: cover;
  }
}

</style>