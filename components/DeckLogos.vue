<script setup lang="ts">
/**
 * Logos in the bottom-right corner. Configure them once in the slides.md headmatter:
 *   logos:
 *     - { src: /logos/my_logo.png, alt: My org, height: h-10 }
 * Files go in `public/logos/`.
 */
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $slidev } = useSlideContext()

interface Logo { src: string, alt?: string, height?: string }

const logos = computed(() => {
  const raw = ($slidev.configs as Record<string, unknown>)?.logos
  return Array.isArray(raw) ? (raw as Logo[]) : []
})

function resolve(src: string) {
  return src.startsWith('/') ? import.meta.env.BASE_URL + src.slice(1) : src
}
</script>

<template>
  <div
    v-if="logos.length"
    class="pointer-events-none absolute bottom-4 right-6 z-0 flex items-center gap-3 sm:bottom-6 sm:right-8 sm:gap-4"
  >
    <img
      v-for="logo in logos"
      :key="logo.src"
      :src="resolve(logo.src)"
      :alt="logo.alt ?? ''"
      class="w-auto shrink-0 object-contain opacity-90"
      :class="logo.height ?? 'h-10'"
    >
  </div>
</template>
