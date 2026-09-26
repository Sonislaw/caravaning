<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Caravan, Menu, X } from '@lucide/vue'
import { Button } from '@/components/ui/button'

const menuOpen = ref(false)

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <RouterLink to="/" class="flex items-center gap-2.5" @click="closeMenu">
        <span
          class="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground"
        >
          <Caravan class="size-5" aria-hidden="true" />
        </span>
        <span class="font-heading text-base font-bold tracking-normal text-foreground">
          Caravaning <span class="font-medium text-muted-foreground">Tools</span>
        </span>
      </RouterLink>

      <nav aria-label="Nawigacja główna" class="hidden items-center gap-8 md:flex">
        <RouterLink
          to="/"
          class="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Strona główna
        </RouterLink>
        <RouterLink
          :to="{ path: '/', hash: '#narzedzia' }"
          class="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Narzędzia
        </RouterLink>
        <RouterLink
          :to="{ path: '/', hash: '#o-projekcie' }"
          class="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          O projekcie
        </RouterLink>
      </nav>

      <Button
        variant="ghost"
        size="icon"
        class="md:hidden"
        :aria-label="menuOpen ? 'Zamknij menu' : 'Otwórz menu'"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <X v-if="menuOpen" class="size-5" aria-hidden="true" />
        <Menu v-else class="size-5" aria-hidden="true" />
      </Button>
    </div>

    <nav
      v-if="menuOpen"
      aria-label="Nawigacja mobilna"
      class="border-t border-border px-4 py-3 md:hidden"
    >
      <div class="mx-auto flex max-w-7xl flex-col gap-1">
        <RouterLink to="/" class="rounded-md px-3 py-3 text-sm hover:bg-muted" @click="closeMenu">
          Strona główna
        </RouterLink>
        <RouterLink
          :to="{ path: '/', hash: '#narzedzia' }"
          class="rounded-md px-3 py-3 text-sm hover:bg-muted"
          @click="closeMenu"
        >
          Narzędzia
        </RouterLink>
        <RouterLink
          :to="{ path: '/', hash: '#o-projekcie' }"
          class="rounded-md px-3 py-3 text-sm hover:bg-muted"
          @click="closeMenu"
        >
          O projekcie
        </RouterLink>
      </div>
    </nav>
  </header>
</template>
