<script setup lang="ts">
/**
 * Footer palette:
 * - brand-blue #3981BF → author / institute
 * - brand-gray #262626 → short title
 * - brand-navy #1F4E79 → date + page number
 * Texts come from the headmatter in slides.md (shortAuthor, shortInstitute, shortTitle, dateLocale, eventDate).
 */
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $page, $nav, $slidev } = useSlideContext()

const slideNo = computed(() => Math.max(0, $page.value))
const slideTotal = computed(() => Math.max(0, ($nav.value?.total ?? 0)))
// Hidden on the cover (page 1).
const show = computed(() => $page.value > 1 && slideTotal.value > 0)

const cfg = computed(() => {
  const c = $slidev.configs as Record<string, unknown>
  return c ?? {}
})

// `eventDate: 'YYYY-MM-DD'` in the headmatter; falls back to today.
// Parsed as a local date so it doesn't shift a day in timezones west of UTC.
const formattedDate = computed(() => {
  const [y, m, d] = String(cfg.value.eventDate ?? '').split('-').map(Number)
  const date = y && m && d ? new Date(y, m - 1, d) : new Date()
  return new Intl.DateTimeFormat(String(cfg.value.dateLocale ?? 'en-US'), {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
})

const leftLine = computed(() => {
  const author = String(cfg.value.shortAuthor ?? '').trim()
  const inst = String(cfg.value.shortInstitute ?? '').trim()
  if (author && inst)
    return `${author} · ${inst}`
  return author || inst
})

const shortTitle = computed(() =>
  String(cfg.value.shortTitle ?? cfg.value.title ?? '').trim(),
)
</script>

<template>
  <div
    v-if="show"
    class="deck-footer-grid absolute bottom-0 left-0 right-0 z-10 grid overflow-hidden text-[9px] leading-tight text-white shadow-[0_-1px_0_rgba(0,0,0,0.08)] sm:text-[10px] sm:leading-none"
  >
    <div
      class="min-w-0 truncate bg-brand-blue px-1.5 py-1.5 text-left font-medium sm:px-2.5 sm:py-1"
      :title="leftLine"
    >
      {{ leftLine }}
    </div>
    <div
      class="min-w-0 truncate bg-brand-gray px-1.5 py-1.5 text-center font-medium sm:px-2.5 sm:py-1"
      :title="shortTitle"
    >
      {{ shortTitle }}
    </div>
    <div
      class="min-w-0 truncate bg-brand-navy px-1.5 py-1.5 text-right tabular-nums sm:px-2.5 sm:py-1"
    >
      <span>{{ formattedDate }}</span>
      <span class="ml-2 font-semibold text-white sm:ml-3">{{ slideNo }}/{{ slideTotal }}</span>
    </div>
  </div>
</template>
