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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M19 6.5C16 6.5 14.5 6 14.5 3L5 3L5 21L19 21L19 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 15L5 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 9L19 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 21L12 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>