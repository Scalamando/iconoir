<script lang="ts">
import { defineComponent, inject } from "vue-demi";
import type { SVGAttributes } from "vue-demi";
import providerKey from "./providerKey";
export default defineComponent<SVGAttributes>(() => {
  const context = inject(providerKey);
  return { context };
});
</script>
<template>
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M12 3L12 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 8L8 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 9L20 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 9L4 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 6L16 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.1213 21.364L18.2427 19.2427M18.2427 19.2427L20.364 17.1213M18.2427 19.2427L16.1213 17.1213M18.2427 19.2427L20.364 21.364" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>