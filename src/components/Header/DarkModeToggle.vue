<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <Button
    @click="toggleDark()"
    class="font-bold w-full sm:w-1/3 xl:!text-2xl"
    severity="secondary"
  >
    <i :class="['pi xl:!text-2xl', isDark ? 'pi-moon' : 'pi-sun']" />
    <span v-if="isDark">Dark Mode</span>
    <span v-else="isDark">Light Mode</span>
  </Button>
</template>
