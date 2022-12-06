<template>
  <div class="container">
    <h2>Категории</h2>
    <div
        v-if="isLoading"
        class="loading"
    >
      Загрузка
    </div>
    <div
        v-else
        class="categories"
    >
      <CategoryItem
          v-for="category in categories?.items"
          :key="category.id"
          :category="category"
      />
    </div>
  </div>

</template>

<script setup lang="ts">
import CategoryItem from "@/components/items/CategoryItem.vue";
import ICategories from "@/interfaces/ICategories";
import ICategory from "@/interfaces/ICategory";
import {FormRequest} from "@/services/FormRequest";
import {ref} from "vue";

let request = new (FormRequest as any)("http://127.0.0.1:8000/api/category");
let isLoading = ref<boolean>(true);
let categories = ref<ICategories>();


async function getCategories() {
  let response = await request.goSend();
  if (response.ok) {
    response = await response.json();
    categories.value = response.data;
    isLoading.value = false;
    return;
  }
}

getCategories();

</script>

<style scoped lang="scss">

</style>