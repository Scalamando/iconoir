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
    <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><g clip-path="url(#clip0_2032_8261)"><path d="M13 21.5704C10.5996 21.8661 8.09267 21.0927 6.25001 19.25C3.07437 16.0744 3.07437 10.9256 6.25001 7.74999L11.5757 2.42426C11.8101 2.18995 12.1899 2.18995 12.4243 2.42426L17.75 7.75001C19.982 9.98202 20.6453 13.1887 19.7397 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 20L18 22L22 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_2032_8261"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
</template>