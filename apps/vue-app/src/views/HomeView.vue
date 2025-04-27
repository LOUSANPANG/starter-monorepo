<script setup lang="ts">
import { greet } from 'pkg-utils'
</script>

<template>
  <div class="home">
    {{ greet('Vue app!') }}
  </div>
</template>
