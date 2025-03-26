<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <Button
    @click="toggleDark()"
    class="font-bold w-full sm:w-1/3"
    severity="secondary"
  >
    <i :class="['pi', isDark ? 'pi-moon' : 'pi-sun']" />
    <span v-if="isDark">Dark Mode</span>
    <span v-else="isDark">Light Mode</span>
  </Button>
</template>
