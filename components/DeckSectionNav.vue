<script setup lang="ts">
/**
 * Top section bar. Sections are defined once in the slides.md headmatter (`sections:`)
 * and highlighted according to `deckSection` in each slide's frontmatter.
 * Click a label → jump to the first slide of that section.
 * A section with id `referencias` / `references` is shown as the book icon instead of a label.
 */
import { computed } from 'vue'
import { useNav, useSlideContext } from '@slidev/client'

interface Section { id: string, label: string }

const nav = useNav()
const { $slidev } = useSlideContext()

const REF_IDS = ['referencias', 'references']

const allSections = computed<Section[]>(() => {
  const raw = ($slidev.configs as Record<string, unknown>)?.sections
  return Array.isArray(raw) ? (raw as Section[]) : []
})
const sections = computed(() => allSections.value.filter(s => !REF_IDS.includes(s.id)))
const refSection = computed(() => allSections.value.find(s => REF_IDS.includes(s.id)))

function deckSectionOf(route: (typeof nav.slides.value)[number] | undefined): string {
  const raw = (route?.meta?.slide?.frontmatter as Record<string, unknown> | undefined)?.deckSection
  return typeof raw === 'string' ? raw : ''
}

const section = computed(() => deckSectionOf(nav.currentSlideRoute.value))
const show = computed(() => allSections.value.some(s => s.id === section.value))

async function goToSection(id: string) {
  const found = nav.slides.value.find(r => deckSectionOf(r) === id)
  if (found?.no != null)
    await nav.go(found.no, 0)
}
</script>

<template>
  <nav
    v-if="show"
    class="absolute top-2 left-3 right-3 z-[5] flex justify-center overflow-x-auto overflow-y-hidden [scrollbar-width:none] sm:top-3 sm:left-4 sm:right-4 [&::-webkit-scrollbar]:hidden"
    aria-label="Go to section"
  >
    <div class="flex w-max max-w-none flex-none flex-nowrap items-center gap-x-1 sm:gap-x-1.5">
      <!-- Home → cover -->
      <button
        type="button"
        class="shrink-0 cursor-pointer border-0 bg-transparent p-0 text-brand-gray opacity-25 transition-opacity duration-200 hover:opacity-60"
        title="Go to cover"
        @click="nav.go(1, 0)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-[10px] w-[10px]" aria-hidden="true">
          <path d="M10.707 2.293a1 1 0 0 0-1.414 0l-7 7A1 1 0 0 0 3 11h1v6a1 1 0 0 0 1 1h4v-4h2v4h4a1 1 0 0 0 1-1v-6h1a1 1 0 0 0 .707-1.707l-7-7Z" />
        </svg>
      </button>
      <template v-for="s in sections" :key="s.id">
        <span class="pointer-events-none shrink-0 select-none text-[9px] font-light text-brand-gray opacity-30" aria-hidden="true">·</span>
        <button
          type="button"
          class="shrink-0 cursor-pointer whitespace-nowrap border-0 bg-transparent p-0 text-[8px] font-semibold uppercase tracking-[0.1em] transition-opacity duration-200"
          :class="section === s.id
            ? 'text-brand-blue opacity-100'
            : 'text-brand-gray opacity-25 hover:opacity-60'"
          @click="goToSection(s.id)"
        >
          {{ s.label }}
        </button>
      </template>
      <!-- References → book icon -->
      <template v-if="refSection">
        <span class="pointer-events-none shrink-0 select-none text-[9px] font-light text-brand-gray opacity-30" aria-hidden="true">·</span>
        <button
          type="button"
          class="shrink-0 cursor-pointer border-0 bg-transparent p-0 transition-opacity duration-200"
          :class="section === refSection.id
            ? 'text-brand-blue opacity-100'
            : 'text-brand-gray opacity-25 hover:opacity-60'"
          :title="refSection.label"
          @click="goToSection(refSection.id)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-[10px] w-[10px]" aria-hidden="true">
            <path d="M10.75 16.82A7.462 7.462 0 0 1 15 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0 0 18 15.06v-11a.75.75 0 0 0-.546-.721A9.006 9.006 0 0 0 15 3a8.963 8.963 0 0 0-4.25 1.065V16.82ZM9.25 4.065A8.963 8.963 0 0 0 5 3c-.85 0-1.673.118-2.454.339A.75.75 0 0 0 2 4.06v11a.75.75 0 0 0 .954.721A7.506 7.506 0 0 1 5 15.5c1.579 0 3.042.487 4.25 1.32V4.065Z" />
          </svg>
        </button>
      </template>
    </div>
  </nav>
</template>
