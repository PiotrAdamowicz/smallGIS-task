<script lang="ts" setup>
import { useDateFormat } from "@vueuse/core";
import { computed } from "vue";
import { useTasksStore } from "../../store/useTasksStore";

const { title, created, id } = defineProps<{
  title: string;
  created?: Date;
  id: string;
}>();
const store = useTasksStore();
const visible = defineModel<boolean>("visible");
const completed = defineModel<boolean>("completed");
const formattedCreationDate = computed(() =>
  created ? useDateFormat(created, "HH:mm DD-MM-YYYY") : ""
);
const removeTask = () => {
  visible.value = false;
  store.removeTask(id);
};
</script>

<template>
  <span class="grid grid-cols-4 grid-rows-2 gap-x-2 gap-y-1">
    <span class="flex gap-2 transition col-span-2">
      <Button
        @click="visible = !visible"
        severity="secondary"
        variant="text"
        class="font-bold w-full flex-row"
        pt:root:class="!justify-start"
      >
        <span :class="{ 'line-through': completed }">
          {{ title }}
        </span>
        <i v-if="visible" class="pi pi-times mx-2" />
        <i v-else="visible" class="pi pi-pencil mx-2 text-green-500" />
      </Button>
    </span>
    <p class="text-sm row-start-2 col-span-2 px-1">
      {{ formattedCreationDate }}
    </p>
    <Button
      @click="removeTask"
      icon="pi pi-trash"
      severity="danger"
      class="font-bold col-start-4"
      variant="text"
    />
    <ToggleSwitch v-model="completed" class="col-start-5 col-span-1" />
  </span>
</template>
<style scoped>
.p-button {
  --p-button-padding-y: 0;
}
</style>
