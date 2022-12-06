<template>
<div class="category">
<!--  <RouterLink/>-->
  {{props.category.name}}
</div>
</template>

<script setup lang="ts">

import ICategory from "@/interfaces/ICategory";

const props = defineProps<{
  category:ICategory
}>();

</script>

<style scoped lang="scss">

</style>