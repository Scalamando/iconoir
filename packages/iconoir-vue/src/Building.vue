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
    <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-bind="context"><path d="M10 9.01L10.01 8.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 9.01L14.01 8.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 13.01L10.01 12.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 13.01L14.01 12.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 17.01L10.01 16.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 17.01L14.01 16.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 20.4V5.6C6 5.26863 6.26863 5 6.6 5H12V3.6C12 3.26863 12.2686 3 12.6 3H17.4C17.7314 3 18 3.26863 18 3.6V20.4C18 20.7314 17.7314 21 17.4 21H6.6C6.26863 21 6 20.7314 6 20.4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</template>