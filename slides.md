---
theme: seriph
colorSchema: light
background: '#F2F2F0'
themeConfig:
  primary: '#3981BF'
title: Step Out. Show Up. Step Back. · ASME Student Leader Weekend
# Footer (shown from slide 2 on; see components/DeckFooter.vue)
shortAuthor: Salomon Perez-Atencia
shortInstitute: ASME Colombia Section
shortTitle: Step Out · Show Up · Step Back
dateLocale: en-US
eventDate: '2026-10-17'   # Saturday, Student Leader Weekend
# Logos in the bottom-right corner (files in public/logos/). Leave empty to hide.
logos:
  - { src: /logos/asme_colombia.png, alt: ASME Colombia Section, height: h-20 }
# Sections: drive the top nav bar and the agenda. Tag slides with `deckSection: <id>`.
sections:
  - { id: intro, label: About me }
  - { id: syllabus, label: The idea }
  - { id: advice1, label: Advice 1 }
  - { id: advice2, label: Advice 2 }
  - { id: advice3, label: Advice 3 }
  - { id: closing, label: Takeaways }
info: |
  ASME Student Leader Weekend, Philadelphia.
  https://sections.asme.org/student-leader-weekends
drawings:
  persist: false
comark: true
duration: 15min
transition: slide-left
fonts:
  sans: 'IBM Plex Sans'
  provider: google
---

<script setup lang="ts">
const [y, m, d] = String($slidev.configs.eventDate ?? '').split('-').map(Number)
const formattedDate = new Intl.DateTimeFormat($slidev.configs.dateLocale ?? 'en-US', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
}).format(y && m && d ? new Date(y, m - 1, d) : new Date())
</script>

<div class="flex h-full flex-col justify-center text-center">

<p class="text-sm font-medium uppercase text-gray-500 mb-7" style="letter-spacing:.08em">ASME Student Leader Weekend · Philadelphia</p>

<div class="text-5xl leading-tight tracking-tight max-w-5xl mx-auto text-brand-blue">
  <div class="font-bold">Step Out. Show Up. Step Back.</div>
  <div class="mt-3 text-lg font-normal tracking-normal leading-snug text-gray-600">Three lessons from my ASME journey, from ships to data</div>
</div>

<div class="mt-6 text-2xl leading-relaxed">
  <div class="font-semibold leading-snug">Salomon Perez-Atencia</div>
  <div class="text-lg leading-snug text-gray-500">Data Delivery Engineer · Source Meridian</div>

  <div class="mt-4 text-sm text-gray-500">{{ formattedDate }}</div>

  <div class="mt-6 text-xs text-gray-500 leading-relaxed">
    Representing ASME Colombia Section
  </div>
</div>

</div>

<DeckLogos />

<!--
Hi, I'm Salomon. I'm a mechanical engineer from Colombia, and today I work with data.
-->

---
src: ./pages/01_introduction.md
---

---
src: ./pages/02_advice.md
---

---
src: ./pages/03_conclusions.md
---
