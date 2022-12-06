<template>
  <RouterLink
      v-show="show()"
      :to="`/product${props.product.id}`"
  >
    {{ props.product.title }}
  </RouterLink>
</template>

<script setup lang="ts">
import IFullProduct from "@/interfaces/IFullProduct";

const props = defineProps<{
  product: IFullProduct
  search: string
}>();

function show(): boolean {
  if (props.search) {
    return props.product.title.toLowerCase().search(props.search.toLowerCase()) !== -1;
  }
  return true;
}

</script>

<style scoped lang="scss">

</style>