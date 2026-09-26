<script setup lang="ts">
import { computed, ref } from 'vue'
import { ArrowLeft, Caravan, RotateCcw, Scale } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'

const carDmc = ref<number | string>('')
const trailerDmc = ref<number | string>('')

const totalDmc = computed(() => Number(carDmc.value) + Number(trailerDmc.value))
const hasBothValues = computed(() => Number(carDmc.value) > 0 && Number(trailerDmc.value) > 0)

const formattedTotal = computed(() =>
  new Intl.NumberFormat('pl-PL', { maximumFractionDigits: 0 }).format(totalDmc.value),
)

const licenseGuidance = computed(() => {
  if (!hasBothValues.value) return ''
  if (totalDmc.value <= 3500) return 'Możliwe prowadzenie z prawem jazdy kategorii B.'
  if (totalDmc.value <= 4250) return 'Sprawdź wymagania dla B96.'
  return 'Prawdopodobnie wymagane będzie B+E.'
})

const resetCalculator = () => {
  carDmc.value = ''
  trailerDmc.value = ''
}
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
    <RouterLink
      to="/"
      class="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      <ArrowLeft class="size-4" aria-hidden="true" />
      Wszystkie narzędzia
    </RouterLink>

    <div class="max-w-3xl">
      <div class="flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary">
        <Caravan class="size-6" aria-hidden="true" />
      </div>
      <p class="mt-6 text-sm font-semibold text-primary">Bezpiecznie zaplanuj zestaw</p>
      <h1 class="mt-2 font-heading text-3xl font-bold tracking-normal sm:text-4xl">
        Kalkulator DMC zestawu
      </h1>
      <p class="mt-3 text-base leading-7 text-muted-foreground">
        Sprawdź całkowitą dopuszczalną masę zestawu oraz wymagane uprawnienia.
      </p>
    </div>

    <div class="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.8fr)] lg:gap-8">
      <section aria-labelledby="calculator-heading" class="border border-border bg-card p-5 sm:p-8">
        <div class="flex items-start justify-between gap-4">
          <div>
            <h2 id="calculator-heading" class="font-heading text-lg font-semibold tracking-normal">
              Dane pojazdów
            </h2>
            <p class="mt-1 text-sm text-muted-foreground">
              Wprowadź wartości z dowodów rejestracyjnych.
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Wyczyść formularz"
            @click="resetCalculator"
          >
            <RotateCcw class="size-4" aria-hidden="true" />
          </Button>
        </div>

        <form class="mt-8 space-y-6" @submit.prevent>
          <div class="space-y-2">
            <label for="car-dmc" class="text-sm font-medium">DMC samochodu</label>
            <div class="relative">
              <input
                id="car-dmc"
                v-model.number="carDmc"
                type="number"
                inputmode="numeric"
                min="1"
                step="1"
                placeholder="np. 2500"
                class="h-12 w-full rounded-md border border-input bg-background px-4 pr-14 text-base tabular-nums outline-none transition-shadow placeholder:text-muted-foreground/60 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
              />
              <span
                class="absolute inset-y-0 right-4 flex items-center text-sm text-muted-foreground"
                >kg</span
              >
            </div>
          </div>

          <div class="space-y-2">
            <label for="trailer-dmc" class="text-sm font-medium">DMC przyczepy</label>
            <div class="relative">
              <input
                id="trailer-dmc"
                v-model.number="trailerDmc"
                type="number"
                inputmode="numeric"
                min="1"
                step="1"
                placeholder="np. 1500"
                class="h-12 w-full rounded-md border border-input bg-background px-4 pr-14 text-base tabular-nums outline-none transition-shadow placeholder:text-muted-foreground/60 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
              />
              <span
                class="absolute inset-y-0 right-4 flex items-center text-sm text-muted-foreground"
                >kg</span
              >
            </div>
          </div>
        </form>

        <p class="mt-6 border-t border-border pt-5 text-xs leading-5 text-muted-foreground">
          Wynik jest orientacyjny. Przed podróżą sprawdź dopuszczalne masy pojazdów i aktualne
          wymagania dotyczące uprawnień.
        </p>
      </section>

      <section
        aria-live="polite"
        aria-label="Wynik kalkulacji"
        class="flex min-h-72 flex-col justify-between bg-[#17362f] p-6 text-white sm:p-8"
      >
        <div class="flex items-center justify-between gap-4">
          <div>
            <p class="text-sm font-medium text-emerald-100">Wynik kalkulacji</p>
            <h2 class="mt-1 font-heading text-xl font-semibold tracking-normal">
              Łączne DMC zestawu
            </h2>
          </div>
          <span
            class="flex size-11 items-center justify-center rounded-md border border-white/15 bg-white/10"
          >
            <Scale class="size-5 text-emerald-100" aria-hidden="true" />
          </span>
        </div>

        <div class="py-8">
          <p
            v-if="hasBothValues"
            class="font-heading text-5xl font-bold tabular-nums tracking-normal sm:text-6xl"
          >
            {{ formattedTotal }}
            <span class="text-2xl font-medium text-white/70 sm:text-3xl">kg</span>
          </p>
          <p v-else class="max-w-xs text-base leading-7 text-white/70">
            Uzupełnij DMC samochodu i przyczepy, aby zobaczyć wynik.
          </p>
        </div>

        <div class="border-t border-white/20 pt-5">
          <p class="text-xs font-semibold uppercase text-emerald-100">Orientacyjne uprawnienia</p>
          <p class="mt-2 text-sm leading-6 text-white/90">
            {{ licenseGuidance || 'Wynik pojawi się po uzupełnieniu obu pól.' }}
          </p>
        </div>
      </section>
    </div>
  </div>
</template>
