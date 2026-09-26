<script setup lang="ts">
import type { Component } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowRight, Fuel, Map, ReceiptText, Route, ShieldCheck, Weight } from '@lucide/vue'
import { Button } from '@/components/ui/button'

interface ToolItem {
  title: string
  description: string
  icon: Component
  to?: string
}

const tools: ToolItem[] = [
  {
    title: 'Kalkulator DMC',
    description: 'Sprawdź dopuszczalną masę zestawu i orientacyjne wymagane uprawnienia.',
    icon: Weight,
    to: '/kalkulator-dmc',
  },
  {
    title: 'Koszty podróży',
    description: 'Oszacuj budżet wyjazdu, uwzględniając paliwo, opłaty i noclegi.',
    icon: ReceiptText,
  },
  {
    title: 'Kalkulator spalania',
    description: 'Policz zużycie paliwa i koszt przejechania zaplanowanej trasy.',
    icon: Fuel,
  },
  {
    title: 'Kalkulator winiet',
    description: 'Zaplanuj opłaty drogowe na trasie przez europejskie kraje.',
    icon: Map,
  },
  {
    title: 'Planer trasy',
    description: 'Przygotuj trasę dopasowaną do samochodu i przyczepy.',
    icon: Route,
  },
]
</script>

<template>
  <div>
    <section
      class="relative isolate flex min-h-[440px] items-center overflow-hidden bg-[#17362f] sm:min-h-[500px]"
    >
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=85"
        alt="Górska droga prowadząca przez zielony krajobraz"
        class="absolute inset-0 -z-20 size-full object-cover object-center"
      />
      <div
        class="absolute inset-0 -z-10 bg-gradient-to-r from-[#102a25]/95 via-[#102a25]/80 to-[#102a25]/35"
      />

      <div class="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div class="max-w-2xl">
          <div class="mb-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-100">
            <ShieldCheck class="size-4" aria-hidden="true" />
            Mądrze zaplanuj każdą podróż
          </div>
          <h1
            class="font-heading text-4xl font-bold leading-tight tracking-normal text-white sm:text-5xl"
          >
            Narzędzia dla caravaningowców
          </h1>
          <p class="mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            Kalkulatory, planery i przydatne narzędzia dla podróżujących z przyczepą kempingową.
          </p>
          <Button as-child size="lg" class="mt-8 bg-emerald-700 text-white hover:bg-emerald-800">
            <RouterLink to="/kalkulator-dmc">
              Przejdź do kalkulatora DMC
              <ArrowRight class="size-4" aria-hidden="true" />
            </RouterLink>
          </Button>
        </div>
      </div>
      <div class="absolute bottom-0 right-0 hidden h-1.5 w-1/3 bg-emerald-600 sm:block" />
    </section>

    <section id="narzedzia" class="scroll-mt-20">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div class="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-sm font-semibold text-primary">Centrum narzędzi</p>
            <h2 class="mt-2 font-heading text-2xl font-bold tracking-normal sm:text-3xl">
              Przygotuj się do drogi
            </h2>
          </div>
          <p class="max-w-md text-sm leading-6 text-muted-foreground">
            Wszystko, co przydaje się przed wyjazdem i podczas planowania kolejnych kilometrów.
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(tool, index) in tools"
            :key="tool.title"
            class="flex min-h-56 flex-col border border-border bg-card p-5 transition-colors hover:border-primary/40 sm:p-6"
            :class="index === 0 ? 'border-primary/30 bg-primary/[0.025]' : ''"
          >
            <div class="flex items-start justify-between gap-4">
              <span
                class="flex size-11 shrink-0 items-center justify-center rounded-md bg-secondary text-primary"
              >
                <component :is="tool.icon" class="size-5" aria-hidden="true" />
              </span>
              <span
                v-if="!tool.to"
                class="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                Wkrótce
              </span>
            </div>
            <h3 class="mt-5 font-heading text-lg font-semibold tracking-normal">
              {{ tool.title }}
            </h3>
            <p class="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
              {{ tool.description }}
            </p>
            <div class="mt-5">
              <Button v-if="tool.to" as-child variant="outline" size="sm">
                <RouterLink :to="tool.to">
                  Otwórz
                  <ArrowRight class="size-4" aria-hidden="true" />
                </RouterLink>
              </Button>
              <Button v-else variant="outline" size="sm" disabled>Wkrótce</Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
