import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

export function useEventSpace() {
  const capacity = ref(3);
  const attending = ref(["Tom", "John", "Vitya"]);
  const spaceLeft = computed(() => {
    return capacity.value - attending.value.length;
  });
  function increaseCapacity() {
    capacity.value++;
  }

  return { capacity, increaseCapacity, attending, spaceLeft };
}
