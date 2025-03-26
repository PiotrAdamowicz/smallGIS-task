<script lang="ts" setup>
import FilterByStatus from "./FilterByStatus.vue";
import Search from "./Search.vue";
import SortByDate from "./SortByDate.vue";
import DarkModeToggle from "./DarkModeToggle.vue";
</script>

<template>
  <nav class="m-4">
    <Search />
    <SortByDate />
    <FilterByStatus />
    <DarkModeToggle />
  </nav>
</template>
