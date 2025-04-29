<script setup lang="ts">
import { add } from '@common/pkg-utils'
import { MyButton } from '@common/pkg-ui'
</script>

<template>
  <main>
    <h1>@common/pkg-utils：{{ add(1, 2) }}</h1>
    <MyButton>你好！</MyButton>
  </main>
</template>
