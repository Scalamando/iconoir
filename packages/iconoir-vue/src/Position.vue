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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 19V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 12H3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 5V3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 12H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>