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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M14 20H17C19.2091 20 21 18.2091 21 16V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.5 22.5L14 20L16.5 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 11L14 5C14 4.44772 13.5523 4 13 4L7 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 4H4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 16V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 2L4 13C4 13.5523 4.44772 14 5 14L16 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>