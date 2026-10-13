---
layout: two-cols
transition: slide-left
deckSection: examples
class: px-10 pt-10
---

<h1 class="slide-title">Two columns</h1>
<div class="slide-title-bar mb-4" />

Left column content, written in plain **Markdown**.

- Point A
- Point B

::right::

<div class="pt-24">

| Metric | Value |
| ------ | ----- |
| A      | 0.92  |
| B      | 0.87  |

</div>

---
layout: image-right
image: /images/placeholder.svg
backgroundSize: contain
transition: slide-left
deckSection: examples
class: px-10 pt-10
---

<h1 class="slide-title">Image on the right</h1>
<div class="slide-title-bar mb-4" />

Put images in `public/images/` and reference them as `/images/file.png`.

---
transition: slide-left
deckSection: examples
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="slide-title">Equations and figures</h1>
  <div class="slide-title-bar" />
</header>

<div class="grid grid-cols-2 items-center gap-8">
<div>

The loss function:

$$
\mathcal{L} = -\frac{1}{N}\sum_{i=1}^{N} y_i \log \hat{y}_i
$$

Inline math also works: $E = mc^2$.

</div>
<figure>
  <img src="/images/placeholder.svg" alt="Placeholder" class="mx-auto max-h-48 object-contain" />
  <figcaption class="mt-2 text-[11px] leading-snug text-gray-500">Figure 1. Caption text.</figcaption>
</figure>
</div>
</div>

<DeckLogos />

---
layout: center
transition: slide-left
deckSection: examples
---

<div class="deck-card border-l-brand-blue max-w-3xl">
  <p class="text-xl font-semibold leading-snug text-brand-gray">
    A single <span class="text-brand-blue">key message</span> centered on the slide.
  </p>
</div>
