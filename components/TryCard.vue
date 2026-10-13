<script setup lang="ts">
/**
 * One card inside <TryThis>. `label` is the time horizon (This weekend / This month / This year);
 * `big` is an optional large number shown on top (e.g. the 10-3-1 rule).
 * Border color alternates blue / navy / blue automatically by position.
 */
defineProps<{ label: string, big?: string }>()
</script>

<template>
  <div class="deck-card try-card flex h-full flex-col">
    <div v-if="big" class="mb-2 text-5xl font-bold leading-none tracking-tight text-brand-blue">{{ big }}</div>
    <div class="deck-card-label">{{ label }}</div>
    <div class="text-[0.95rem] leading-snug text-brand-gray">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.try-card { border-left-color: #3981BF; }
.try-card:nth-child(2) { border-left-color: #1F4E79; }
</style>
