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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M22 5L20.0455 17.3135C19.8913 18.2849 19.0538 19 18.0702 19H5.92981C4.94628 19 4.10872 18.2849 3.95454 17.3135L2 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 11C19 11 16.5 8 16.5 8C16.5 8 14.3513 11 12 11C9.64873 11 7.5 8 7.5 8C7.5 8 5 11 3 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>