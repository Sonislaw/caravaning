<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Caravan } from '@lucide/vue'
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <RouterLink to="/" class="flex items-center gap-2.5">
        <span
          class="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground"
        >
          <Caravan class="size-5" aria-hidden="true" />
        </span>
        <span class="font-heading text-base font-bold tracking-normal text-foreground">
          Caravaning <span class="font-medium text-muted-foreground">Tools</span>
        </span>
      </RouterLink>
    </div>
  </header>
</template>
