<template>
  <main>
    <div class="container">
      <div class="catalog">
        <aside class="tools">
          asd
        </aside>
        <div class="catalog__info">
          <input
              v-model.trim="searchText"
              class="search"
              type="search"
          >
          <div class="catalog__products">
            <div
                v-if="isLoading"
                class="loading"
            >
              {{ isLoading }}
            </div>
            <template
                v-else
            >
              <ProductItem
                  v-for="product in products.items"
                  :key="product.id"
                  :product="product"
                  :search="searchText.toString()"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import  ProductItem from "@/components/items/ProductItem.vue"
import IFullProduct from "@/interfaces/IFullProduct";
import {FormRequest} from "@/services/FormRequest";
import {ref} from "vue";

let searchText = ref<string>("");
let request = new (FormRequest as any)("http://127.0.0.1:8000/api/product");
let isLoading = ref<boolean>(true);
let products = ref<IFullProduct[]>();

async function getProducts() {
  let response = await request.goSend();
  if (response.ok) {
    response = await response.json();
    products.value = response.data;
    isLoading.value = false;
    return;
  }
}

getProducts();
</script>

<style scoped lang="scss">
@import "@/assets/css/mixins.scss";

.catalog {
  @include myFlex($ai: start);
  min-height: 70vh;

  .tools {
    width: 20%;
    background-color: red;
  }

  .catalog__info {
    width: 80%;
    background-color: bisque;
    @include myFlex();
    flex-direction: column;

    .search {
      width: 100%;
      padding: 10px 20px;
      font-size: 20px;
    }

    .catalog__products {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }
  }
}

</style>