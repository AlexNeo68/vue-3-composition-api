<template>
  <h1>Composition: {{ capacity }}</h1>

  <button @click="increaseCapacity">Increase</button>
  <p>Spaces left {{ spaceLeft }} of {{ capacity }}</p>
  <ul>
    <li v-for="name in attending" :key="name">{{ name }}</li>
  </ul>

  <div class="search">
    <input type="search" v-model="search" />
    <div>{{ searchResult }}</div>
  </div>
</template>

<script>
import { useEventSpace } from "@/use/event-space.js";
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
export default {
  setup() {
    const { capacity, increaseCapacity, attending, spaceLeft } =
      useEventSpace();
    const search = ref("");
    const searchResult = ref(0);

    watch(
      search,
      (newVal) => {
        searchResult.value = newVal.length;
      },
      { immediate: true }
    );

    return {
      capacity,
      increaseCapacity,
      attending,
      spaceLeft,
      search,
      searchResult,
    };
  },
};
</script>
