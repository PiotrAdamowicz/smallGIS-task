import type { extractRuntimeEmits } from "vue/compiler-sfc";
import { CompletedTask } from "./extractRuntimeEmits.ts";

export interface Task {
  id: number;
  title: string;
  created: Date;
  description: string;
  completed: CompletedTask;
}
