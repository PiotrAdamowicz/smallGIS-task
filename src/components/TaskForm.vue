<script lang="ts" setup>
const title = defineModel<string>("title");
const description = defineModel<string>("description");
</script>

<template>
  <InputText
    v-model="title"
    type="text"
    size="large"
    placeholder="Title"
    class="w-full border mb-4"
  />
  <Textarea
    v-model="description"
    size="large"
    placeholder="Description"
    rows="12"
    class="w-full max-h-3/4"
  />
</template>
