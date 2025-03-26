import type { extractRuntimeEmits } from "vue/compiler-sfc";

export interface Task {
  id: string;
  title: string;
  created: Date;
  description: string;
  completed: boolean;
}
