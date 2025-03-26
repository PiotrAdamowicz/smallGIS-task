<script lang="ts" setup>
import { useDateFormat } from "@vueuse/core";
import { computed } from "vue";
import { useTasksStore } from "../../store/useTasksStore";
import TaskStatus from "../TaskStatus.vue";

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
const toggleTask = () => {
  if (!completed.value) {
    visible.value = !visible.value;
  }
};
</script>

<template>
  <span class="grid grid-cols-6 grid-rows-1 gap-x-2 gap-y-1">
    <Button
      @click="toggleTask"
      severity="secondary"
      variant="text"
      class="font-bold w-min-1/2 flex flex-col sm:flex-row !px-2 sm:!px-4 col-start-1 col-span-3"
    >
      <span class="flex col-span-2">
        <span
          class="text-xl md:text-2xl xl:text-4xl"
          :class="{ 'line-through': completed }"
        >
          {{ title }}
        </span>
        <i
          v-if="visible"
          class="pi pi-check text-green-500 mx-2 my-auto sm:!text-2xl"
        />
        <i
          v-else="visible"
          class="pi pi-pencil mx-2 text-green-500 my-auto sm:!text-xl md:text-2xl"
        />
      </span>
      <p class="text-xs sm:text-md xl:text-2xl">
        {{ formattedCreationDate }}
      </p>
    </Button>
    <Button
      @click="removeTask"
      icon="pi pi-trash sm:!text-2xl"
      severity="danger"
      class="font-bold mx-4 col-start-4 sm:col-start-5"
      variant="text"
    >
      <!-- <i class=""></i> -->
    </Button>
    <div class="flex flex-col gap-2 mx-2 col-span-2 col-start-5 sm:col-start-6">
      <ToggleSwitch v-model="completed" class="mx-auto" />
      <TaskStatus :completed />
    </div>
  </span>
</template>
<style scoped>
.p-button {
  --p-button-padding-y: 0;
  --p-button-padding-x: 0;
}
</style>
