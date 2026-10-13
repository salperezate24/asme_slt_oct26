<script setup lang="ts">
/**
 * "Try this" slide body: title + subtitle + 3-column grid of <TryCard>s.
 *   <TryThis subtitle="...">
 *     <TryCard v-click label="This weekend">Action</TryCard>
 *     ...
 *     <template #below>Optional line under the cards</template>
 *   </TryThis>
 */
defineProps<{ title?: string, subtitle?: string }>()
</script>

<template>
  <div class="slide-deck-shell">
    <header class="mb-5 text-left">
      <h1 class="slide-title">{{ title ?? 'Try this' }}</h1>
      <div class="slide-title-bar" />
      <div v-if="subtitle" class="mt-2 text-sm italic text-gray-500">{{ subtitle }}</div>
    </header>

    <div class="grid w-full max-w-5xl grid-cols-3 items-stretch gap-5">
      <slot />
    </div>

    <div v-if="$slots.below" class="mt-5 max-w-5xl">
      <slot name="below" />
    </div>
  </div>
</template>
