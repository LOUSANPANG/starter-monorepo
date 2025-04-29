<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'secondary'
}>(), {
  variant: 'primary'
})
</script>

<template>
  <button :style="{ backgroundColor: variant === 'primary' ? 'blue' : 'gray', color: 'white' }" v-bind="$attrs">
    <slot />
  </button>
</template>
