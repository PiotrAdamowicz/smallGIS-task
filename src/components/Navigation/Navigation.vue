<script lang="ts" setup>
import FilterByStatus from "./FilterByStatus.vue";
import Search from "./Search.vue";
import SortByDate from "./SortByDate.vue";

const showDoneTasks = defineModel<boolean>("showDoneTasks");
</script>

<template>
  <nav class="m-4">
    <Search />
    <SortByDate />
    <FilterByStatus v-model:showDoneTasks="showDoneTasks" />
  </nav>
</template>
