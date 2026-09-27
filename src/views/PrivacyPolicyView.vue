<script setup lang="ts">
import { ArrowLeft } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import { siteName, siteUrl, usePageSeo } from '@/seo/usePageSeo'

usePageSeo('privacy', {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Polityka Prywatności',
  description:
    'Informacje o prywatności i przetwarzaniu danych podczas korzystania z Caravaning Tools.',
  url: `${siteUrl}/polityka-prywatnosci`,
  inLanguage: 'pl-PL',
  isPartOf: { '@type': 'WebSite', name: siteName, url: siteUrl },
})
</script>

<template>
  <article class="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
    <RouterLink
      to="/"
      class="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      <ArrowLeft class="size-4" aria-hidden="true" />
      Strona główna
    </RouterLink>

    <header class="border-b border-border pb-8">
      <p class="text-sm font-semibold text-primary">Caravaning Tools</p>
      <h1 class="mt-2 font-heading text-3xl font-bold tracking-normal sm:text-4xl">
        Polityka Prywatności
      </h1>
      <p class="mt-3 text-sm text-muted-foreground">
        Data obowiązywania:
        <time datetime="2026-09-27">27 września 2026 r.</time>
      </p>
    </header>

    <div class="divide-y divide-border">
      <section class="py-7">
        <h2 class="font-heading text-xl font-semibold tracking-normal">1. Informacje ogólne</h2>
        <p class="mt-3 text-sm leading-7 text-muted-foreground">
          Niniejsza Polityka Prywatności określa zasady korzystania ze strony internetowej
          caravaning.zgrana.pl oraz sposób przetwarzania informacji związanych z jej użytkowaniem.
        </p>
        <p class="mt-3 text-sm leading-7 text-muted-foreground">
          Administrator dokłada należytej staranności, aby chronić prywatność użytkowników
          odwiedzających serwis.
        </p>
      </section>

      <section class="py-7">
        <h2 class="font-heading text-xl font-semibold tracking-normal">2. Zakres przetwarzanych danych</h2>
        <p class="mt-3 text-sm leading-7 text-muted-foreground">
          Podczas korzystania ze strony mogą być przetwarzane podstawowe informacje techniczne
          związane z wyświetlaniem strony internetowej, takie jak:
        </p>
        <ul class="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
          <li>adres odwiedzanej strony,</li>
          <li>data i godzina wizyty,</li>
          <li>informacje o urządzeniu i przeglądarce,</li>
          <li>informacje o wydajności i czasie ładowania strony,</li>
          <li>kraj, z którego nastąpiło połączenie.</li>
        </ul>
        <p class="mt-3 text-sm leading-7 text-muted-foreground">
          Dane te wykorzystywane są wyłącznie do celów statystycznych, analitycznych oraz poprawy
          działania serwisu.
        </p>
      </section>

      <section class="py-7">
        <h2 class="font-heading text-xl font-semibold tracking-normal">3. Cloudflare Web Analytics</h2>
        <p class="mt-3 text-sm leading-7 text-muted-foreground">
          Serwis korzysta z usługi Cloudflare Web Analytics dostarczanej przez Cloudflare, Inc.
        </p>
        <p class="mt-3 text-sm leading-7 text-muted-foreground">
          Cloudflare Web Analytics służy do analizy ruchu na stronie internetowej oraz monitorowania
          jej wydajności. Według dokumentacji producenta rozwiązanie to zostało zaprojektowane w
          sposób uwzględniający prywatność użytkowników i nie wykorzystuje plików cookies,
          localStorage ani technik fingerprintingu do celów analitycznych.
        </p>
        <p class="mt-3 text-sm leading-7 text-muted-foreground">
          Cloudflare wskazuje również, że Web Analytics nie służy do śledzenia użytkowników pomiędzy
          stronami internetowymi ani do tworzenia profili użytkowników.
        </p>
        <p class="mt-3 text-sm leading-7 text-muted-foreground">
          Dane statystyczne prezentowane są administratorowi w postaci zbiorczych raportów i służą
          wyłącznie do analizy popularności treści oraz jakości działania serwisu.
        </p>
      </section>

      <section class="py-7">
        <h2 class="font-heading text-xl font-semibold tracking-normal">4. Pliki cookies</h2>
        <p class="mt-3 text-sm leading-7 text-muted-foreground">
          Strona nie wykorzystuje plików cookies do celów analitycznych realizowanych przez Cloudflare
          Web Analytics.
        </p>
        <p class="mt-3 text-sm leading-7 text-muted-foreground">
          Niezależnie od powyższego infrastruktura Cloudflare może wykorzystywać techniczne pliki
          cookies niezbędne do zapewnienia bezpieczeństwa, ochrony przed nadużyciami lub prawidłowego
          działania usług sieciowych. Szczegółowe informacje znajdują się w dokumentacji Cloudflare.
        </p>
      </section>

      <section class="py-7">
        <h2 class="font-heading text-xl font-semibold tracking-normal">5. Odbiorcy danych</h2>
        <p class="mt-3 text-sm leading-7 text-muted-foreground">
          Dostawcą infrastruktury technicznej oraz narzędzia analitycznego jest Cloudflare, Inc.
        </p>
        <p class="mt-3 text-sm leading-7 text-muted-foreground">
          Informacje dotyczące sposobu przetwarzania danych przez Cloudflare można znaleźć na stronie:
        </p>
        <a
          href="https://www.cloudflare.com/privacypolicy"
          target="_blank"
          rel="noreferrer"
          class="mt-2 inline-flex break-all text-sm font-medium text-primary underline underline-offset-4"
        >
          https://www.cloudflare.com/privacypolicy
        </a>
      </section>

      <section class="py-7">
        <h2 class="font-heading text-xl font-semibold tracking-normal">6. Bezpieczeństwo</h2>
        <p class="mt-3 text-sm leading-7 text-muted-foreground">
          Administrator stosuje środki techniczne i organizacyjne mające na celu ochronę serwisu
          przed nieuprawnionym dostępem, utratą danych lub innymi zagrożeniami.
        </p>
        <p class="mt-3 text-sm leading-7 text-muted-foreground">
          Połączenie ze stroną realizowane jest z wykorzystaniem szyfrowania HTTPS.
        </p>
      </section>

      <section class="py-7">
        <h2 class="font-heading text-xl font-semibold tracking-normal">7. Zmiany Polityki Prywatności</h2>
        <p class="mt-3 text-sm leading-7 text-muted-foreground">
          Polityka Prywatności może być aktualizowana w przypadku zmian funkcjonalności serwisu, zmian
          prawnych lub zmian dostawców usług wykorzystywanych przez stronę.
        </p>
        <p class="mt-3 text-sm leading-7 text-muted-foreground">
          Aktualna wersja dokumentu jest zawsze publikowana pod adresem:
        </p>
        <a
          href="https://caravaning.zgrana.pl/polityka-prywatnosci"
          class="mt-2 inline-flex break-all text-sm font-medium text-primary underline underline-offset-4"
        >
          https://caravaning.zgrana.pl/polityka-prywatnosci
        </a>
      </section>

      <section class="py-7">
        <h2 class="font-heading text-xl font-semibold tracking-normal">8. Kontakt</h2>
        <p class="mt-3 text-sm leading-7 text-muted-foreground">
          W sprawach związanych z funkcjonowaniem serwisu można skontaktować się z administratorem za
          pośrednictwem danych kontaktowych publikowanych w serwisie.
        </p>
      </section>
    </div>
  </article>
</template>
