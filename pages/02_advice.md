---
layout: center
transition: slide-up
deckSection: syllabus
---

<div class="max-w-4xl text-center">
  <div class="text-3xl font-bold leading-snug tracking-tight text-brand-gray">
    Your professors will teach you <span class="text-brand-blue">the equations</span>.
  </div>
  <div v-click class="mt-8 text-2xl font-semibold leading-snug text-brand-gray">
    This talk is about everything that <span class="text-brand-blue">isn't on the syllabus</span>.
  </div>
</div>

<DeckLogos />

<!--
Today: three non-technical lessons from my path, from ships to data, and my ASME journey along the way.
-->

---
layout: center
transition: slide-left
deckSection: advice1
---

<div class="max-w-4xl text-center">
  <div class="mb-4 text-[11.5px] !font-bold uppercase tracking-wider text-brand-blue">Advice #1</div>
  <div class="text-3xl font-bold leading-snug tracking-tight text-brand-gray">
    <span class="text-brand-blue">Curiosity</span> sparks creativity.<br/>
    <span class="text-brand-navy">Discomfort</span> makes it grow.
  </div>
</div>

<DeckLogos />

<!--
Personal story: from mechanical engineering (naval maintenance at COTECMAR, a Colombian Navy shipyard) into data.
Being a beginner again was uncomfortable, and that's where I grew.
-->

---
transition: slide-left
deckSection: advice1
---

<div class="slide-deck-shell">
<header class="mb-5 text-left">
  <h1 class="slide-title">My uncomfortable jump</h1>
  <div class="slide-title-bar" />
</header>

<!-- Horizontal 3-step timeline; each step's photo appears on the same click -->
<div class="relative grid w-full max-w-5xl grid-cols-3 gap-6">
  <div class="absolute left-[16.67%] right-[16.67%] top-4 h-0.5 bg-brand-blue/30" />
  <div v-click class="relative flex flex-col items-center text-center">
    <div class="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white shadow">1</div>
    <div class="mt-2 text-[1rem] font-semibold text-brand-gray">Reliability &amp; Maintenance</div>
    <div class="text-xs text-gray-500">2022 · Naval maintenance · COTECMAR</div>
    <div class="mt-1 min-h-[2.5rem] text-sm italic leading-snug text-brand-gray">Not sure what you want yet? Take the job. It will show you what's next.</div>
    <img src="/images/maintenance_reliability_2.JPEG" alt="In front of a ship in dry dock at COTECMAR" class="mt-2 h-40 w-full overflow-hidden rounded-xl object-cover shadow-md ring-1 ring-gray-900/10" style="object-position: 50% 40%" />
    <div class="mt-1 text-[11px] text-gray-500">Dry dock · COTECMAR</div>
  </div>
  <div v-click class="relative flex flex-col items-center text-center">
    <div class="flex h-8 w-8 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white shadow">2</div>
    <div class="mt-2 text-[1rem] font-semibold text-brand-gray">M.Sc. thesis</div>
    <div class="text-xs text-gray-500">2023–2026 · Computer vision + biology</div>
    <div class="mt-1 min-h-[2.5rem] text-sm italic leading-snug text-brand-gray">Engineers solve problems. Changing careers is just another one.</div>
    <div class="mt-2 h-40 w-full overflow-hidden rounded-xl bg-black shadow-md ring-1 ring-gray-900/10">
      <video class="h-full w-full object-contain" autoplay muted loop playsinline><source src="/videos/thesis_detection.mp4" type="video/mp4" /></video>
    </div>
    <div class="mt-1 text-[11px] text-gray-500">My thesis: AI tracking a human egg cell</div>
  </div>
  <div v-click class="relative flex flex-col items-center text-center">
    <div class="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white shadow">3</div>
    <div class="mt-2 text-[1rem] font-semibold text-brand-gray">Data Engineer</div>
    <div class="text-xs text-gray-500">April 2024 · Source Meridian · healthcare data</div>
    <div class="mt-1 min-h-[2.5rem] text-sm italic leading-snug text-brand-gray">Your degree is a way of thinking, not a job title.</div>
    <img src="/images/first_day_source_meridian.jpg" alt="First day at Source Meridian" class="mt-2 h-40 w-full overflow-hidden rounded-xl object-cover shadow-md ring-1 ring-gray-900/10" style="object-position: 50% 35%" />
    <div class="mt-1 text-[11px] text-gray-500">Day one · Source Meridian · April 2024</div>
  </div>
</div>
</div>

<DeckLogos />

<!--
[click] Step 1: Right after graduating, I joined COTECMAR, a Colombian Navy shipyard. I had interned there, and they picked me. I learned a lot, but I realized the maritime industry wasn't where I wanted to stay. Everyone was talking about learning to code, so I started relearning programming on my own.

>>> KEY MOMENT (say it, don't show it; slow down here) <<<
Then one email changed everything. My university offered me a spot in any graduate program, no admission exam. I chose Engineering Analytics, because it kept both doors open: go fully into data, or become a better reliability engineer. But to do it, I had to quit my job. That was the uncomfortable part.

[click] Step 2: I joined XPAND, a marketing company, as their data analyst. Weird for a mechanical engineer, but it showed me my engineering thinking works anywhere. Then, for my thesis, I had no topic. My professor brought an idea: using AI to track a human egg cell. I knew nothing about biology. It was hard, and it's where I learned the most.
(The boxes in the video are the cell structures the model finds; don't explain the numbers.)

[click] Step 3: That's how I ended up as a data engineer. Mechanical engineering didn't lock me into machines. It taught me how to think, and that's what I use every day with data.

Timing: target ~80 seconds for this slide.
-->

---
transition: slide-left
deckSection: advice1
---

<TryThis subtitle="Curiosity sparks creativity. Discomfort makes it grow.">
  <TryCard v-click label="This weekend">Sit with a section you don't know and ask what they're building.</TryCard>
  <TryCard v-click label="This month">Keep your hobby alive: one protected hour a week. Curiosity needs somewhere to play.</TryCard>
  <TryCard v-click label="This year">Apply for one thing you don't feel ready for, as long as someone there will teach you.</TryCard>
  <template #below>
    <div v-click class="mt-4 w-full text-center text-2xl font-bold leading-snug tracking-tight text-brand-navy">
      Be a beginner again. On purpose.
    </div>
  </template>
</TryThis>

<DeckLogos />

<!--
(From step 3: "…a way of thinking, not a job title." So how do you start? This weekend:)

[click] Sit with a section you don't know and ask what they're building. There are 140 leaders here from schools you've never visited. That's free curiosity.

[click] This month: keep your hobby alive. For me, that's travel. Right now I'm on a trip: New York, Lynchburg, Virginia, and now Philly. I actually finished these slides in Lynchburg. You can't travel every week, but you can protect one hour a week for whatever keeps you curious.

[click] This year: apply for one thing you don't feel ready for. My filter is simple: if they're willing to teach you, say yes. That's every step on the last slide.

[click] Be a beginner again. On purpose. That's what I did with my thesis.
-->

---
layout: center
transition: slide-left
deckSection: advice2
---

<div class="max-w-4xl text-center">
  <div class="mb-4 text-[11.5px] !font-bold uppercase tracking-wider text-brand-blue">Advice #2</div>
  <div class="text-3xl font-bold leading-snug tracking-tight text-brand-gray">
    You are great. <span class="text-brand-blue">Let people see it.</span>
  </div>
</div>

<DeckLogos />

<!--
Curiosity gets you into new rooms. Once you're there, people need to see what you bring.

Believing in yourself is half of it. The other half is letting other people see it.

And this isn't about faking it. It's about not hiding what you're worth.
-->

---
transition: slide-left
deckSection: advice2
---

<div class="slide-deck-shell !pb-[2.75rem]">
<header class="mb-3 text-left">
  <h1 class="slide-title">Metaplast's Chief Research Chemist</h1>
  <div class="slide-title-bar" />
  <div class="mt-2 text-sm italic text-gray-500">A story from Richard Feynman · “Surely You’re Joking, Mr. Feynman!”</div>
</header>

<!-- Cover on the left the whole slide. Right: click 1 left card, click 2 right card + quote, click 3 reflection. -->
<div class="grid w-full grid-cols-[auto_1fr] items-start gap-8">

<img src="/images/surely_your_joking_mr_feynman.jpg" alt="“Surely You’re Joking, Mr. Feynman!” book cover" class="h-[21rem] w-auto rounded-lg object-contain shadow-lg ring-1 ring-gray-900/10" />

<div class="flex min-w-0 flex-col pr-28">
  <div class="grid grid-cols-2 items-stretch gap-4">
    <div v-click="1" class="deck-card border-l-brand-navy h-full !px-4 !py-3">
      <div class="deck-card-label">What they imagined</div>
      <div class="mt-1 text-lg font-semibold leading-snug text-brand-gray">25–50 chemists</div>
      <div class="mt-1 text-[0.95rem] leading-snug text-brand-gray">A chief chemist with his own glass office</div>
    </div>
    <div v-click="2" class="deck-card border-l-brand-blue h-full !px-4 !py-3">
      <div class="deck-card-label">What was really there</div>
      <div class="mt-1 text-lg font-semibold leading-snug text-brand-gray">1 chief research chemist</div>
      <div class="text-sm leading-snug text-gray-500">(a fresh grad on a summer job)</div>
      <div class="mt-1 text-[0.95rem] leading-snug text-brand-gray">+ 1 bottle-washer</div>
    </div>
  </div>

  <div v-click="2" class="mt-4 text-left text-lg italic !leading-snug text-brand-navy">
    “…you are now talking to the chief research chemist of the Metaplast Corporation, whose staff consisted of one bottle-washer!”
  </div>

  <div v-click="3" class="mt-5 text-left text-2xl font-bold !leading-snug tracking-tight text-brand-navy">
    Don't compare your inside to someone else's outside.
  </div>
</div>

</div>
</div>

<DeckLogos />

<!--
Let me borrow a story from Richard Feynman, the Nobel Prize–winning physicist. It's in his book "Surely You're Joking, Mr. Feynman!"

Right after MIT, Feynman couldn't find a job. Back then, nobody knew what to do with a physicist. So an old friend from his hometown offered him a summer job at his tiny company in New York. They metal-plated plastics. About four people. Feynman got a big title: chief research chemist. His whole staff? One bottle-washer: his friend's brother.

And this tiny company ran full-page ads in a plastics magazine, showing off their shiniest pieces.

[click] Years later, at Los Alamos, Feynman is having lunch with a colleague who used to work in a lab in England on the exact same problem. And he says: "We couldn't compete. There was this American company, Metaplast. They must have had twenty-five, fifty chemists. The chief chemist had his own glass office…"

[click] And Feynman says: "You are now talking to the chief research chemist of the Metaplast Corporation, whose staff consisted of one bottle-washer!"

And no, the lesson isn't 'advertise like Metaplast': their ads promised more than they could deliver, and they failed on their first big job.

[click] Don't compare your inside to someone else's outside.

That lab in England had six real chemists, and they walked away because someone else looked bigger. I think a lot of you are that lab: better than you let people see. Let me show you how rare you actually are.
-->

---
layout: center
transition: slide-left
deckSection: advice2
---

<div class="max-w-5xl text-center">
  <div class="grid grid-cols-2 gap-16">
    <div>
      <div class="text-7xl font-bold leading-tight tracking-tight text-brand-gray">~35,000</div>
      <div class="mt-3 text-lg font-semibold leading-snug text-brand-gray">new mechanical engineers graduate in the US every year.</div>
    </div>
    <div v-click>
      <div class="text-7xl font-bold leading-tight tracking-tight text-brand-blue">140</div>
      <div class="mt-3 text-lg font-semibold leading-snug text-brand-gray">student leaders are in this room.</div>
    </div>
  </div>
  <div v-click class="mt-10 text-3xl font-bold leading-snug tracking-tight text-brand-navy">
    You're not here by accident.
  </div>
</div>

<div class="absolute bottom-9 left-12 right-48 text-left text-[10px] leading-snug text-gray-500">
  Source: C. Cecere, “When It Comes to Engineers, Demand Exceeds Supply,” ASME, Apr. 16, 2025.
</div>

<DeckLogos />

<!--
Don't present it as a percentage. 35,000 is one graduating class; you are 140 from every class year and the whole country, chosen to lead your sections.

You're not here by accident. Let's see why. Raise your hand if…
-->

---
transition: slide-up
deckSection: advice2
---

<div class="slide-deck-shell">
<header class="mb-3 text-left">
  <h1 class="slide-title">Raise your hand if…</h1>
  <div class="slide-title-bar" />
</header>

<div class="flex w-full max-w-5xl flex-col gap-2 pt-1">
  <div v-click class="deck-card border-l-brand-blue !py-2">
    <p class="!my-0 text-[0.95rem] text-brand-gray"><span class="font-semibold text-brand-blue">1.</span> …you've ever built something with your own hands.</p>
  </div>
  <div v-click class="deck-card border-l-brand-navy !py-2">
    <p class="!my-0 text-[0.95rem] text-brand-gray"><span class="font-semibold text-brand-blue">2.</span> …you've ever taken something apart just to see how it works.</p>
  </div>
  <div v-click class="deck-card border-l-brand-blue !py-2">
    <p class="!my-0 text-[0.95rem] text-brand-gray"><span class="font-semibold text-brand-blue">3.</span> …you've stayed up all night to finish a project.</p>
  </div>
  <div v-click class="deck-card border-l-brand-navy !py-2">
    <p class="!my-0 text-[0.95rem] text-brand-gray"><span class="font-semibold text-brand-blue">4.</span> …you've had a design fail and gone back to fix it.</p>
  </div>
  <div v-click class="deck-card border-l-brand-blue !py-2">
    <p class="!my-0 text-[0.95rem] text-brand-gray"><span class="font-semibold text-brand-blue">5.</span> …you've led a team or organized something for your ASME section.</p>
  </div>
</div>

<div v-click="1" class="mt-3 text-sm italic text-gray-500">Keep your hand up 🙋</div>

<div v-click="6" class="mt-6 w-full text-center text-3xl font-bold leading-snug tracking-tight text-brand-navy">
  You've done great things. Let people see them.
</div>
</div>

<DeckLogos />

<!--
Hands should stay up and add up: by the end, most of you have your hand up.

Question 3 (stayed up all night) sets up Advice #3. Let them be proud of it here; the callback comes later.

[click] Look around: most of you have your hand up. You've done great things. Let people see them.

So how do you let people see it? Starting this weekend:
-->

---
transition: slide-left
deckSection: advice2
---

<TryThis subtitle="You are great. Let people see it.">
  <TryCard v-click label="This weekend">Introduce yourself with one thing you built, not just your major and year.</TryCard>
  <TryCard v-click label="This month">Put one project you're proud of on LinkedIn. Follow up with the people you met here, or email that professor.</TryCard>
  <TryCard v-click label="This year">Take your section's work off campus: co-host something with a section you met here, or enter a competition.</TryCard>
  <template #below>
    <div v-click class="mt-4 w-full text-center text-2xl font-bold leading-snug tracking-tight text-brand-navy">
      Don't be the lab in England. Show what's real.
    </div>
  </template>
</TryThis>

<DeckLogos />

<!--
(From the hand-raise: "So how do you let people see it? Starting this weekend:")

[click] When you meet someone here, don't just say your major and your year. Tell them about one thing you built. Pick one of the hands you just raised.

[click] This month: put one project you're proud of on LinkedIn. Then message the people you met here and mention what you talked about. Or email that professor you want to work with and ask for 15 minutes.

[click] This year: take your section's work off campus. Co-host something with a section you met this weekend, or enter a competition.

[click] Remember the lab in England. Don't hide what you're worth. Show what's real.
-->

---
layout: center
transition: slide-left
deckSection: advice3
---

<div class="max-w-4xl text-center">
  <div class="mb-4 text-[11.5px] !font-bold uppercase tracking-wider text-brand-blue">Advice #3</div>
  <div class="text-3xl font-bold leading-snug tracking-tight text-brand-gray">
    <span class="text-brand-blue">Stepping back</span> is part of the journey.
  </div>
</div>

<DeckLogos />

<!--
Remember the hand-raise? Most of you raised your hand for staying up all night to finish a project. I did too. That's not the part I'm proud of.

Advice #1 and #2 ask you to do more. This one is how you keep doing it for years: do all of this, just not all at once.
-->

---
transition: slide-left
deckSection: advice3
---

<div class="slide-deck-shell">
<header class="mb-5 text-left">
  <h1 class="slide-title">My ASME journey</h1>
  <div class="slide-title-bar" />
</header>

<!-- Horizontal 3-step timeline; each step's photo appears on the same click -->
<div class="relative grid w-full max-w-5xl grid-cols-3 gap-6">
  <div class="absolute left-[16.67%] right-[16.67%] top-4 h-0.5 bg-brand-blue/30" />
  <div v-click class="relative flex flex-col items-center text-center">
    <div class="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white shadow">1</div>
    <div class="mt-2 text-[1rem] font-semibold text-brand-gray">Founded ASME UNAL Medellín</div>
    <div class="min-h-[2rem]">
      <div class="text-xs text-gray-500">2019 · Student section</div>
    </div>
    <div class="mt-1 min-h-[2.5rem] text-sm italic leading-snug text-brand-gray">A section is a team, not a one-person show.</div>
    <img src="/images/asme_unal_med_2019.jpg" alt="ASME UNAL Medellín student section in a classroom, 2019" class="mt-2 h-40 w-full overflow-hidden rounded-xl object-cover shadow-md ring-1 ring-gray-900/10" style="object-position: 50% 40%" />
    <div class="mt-1 text-[11px] text-gray-500">ASME UNAL Medellín · 2019</div>
  </div>
  <div v-click class="relative flex flex-col items-center text-center">
    <div class="flex h-8 w-8 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white shadow">2</div>
    <div class="mt-2 text-[1rem] font-semibold text-brand-gray">Activated ASME Colombia</div>
    <div class="min-h-[2rem]">
      <div class="text-xs text-gray-500">2023</div>
      <div class="text-xs font-semibold text-brand-navy">Paused in 2025 for my thesis</div>
    </div>
    <div class="mt-1 min-h-[2.5rem] text-sm italic leading-snug text-brand-gray">“Not now” isn't “never.”</div>
    <img src="/images/asme_colombia_2023.JPEG" alt="ASME Colombia Section members in an auditorium, 2023" class="mt-2 h-40 w-full overflow-hidden rounded-xl object-cover shadow-md ring-1 ring-gray-900/10" style="object-position: 50% 45%" />
    <div class="mt-1 text-[11px] text-gray-500">ASME Colombia Section · 2023</div>
  </div>
  <div v-click class="relative flex flex-col items-center text-center">
    <div class="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white shadow">3</div>
    <div class="mt-2 text-[1rem] font-semibold text-brand-gray">Back in ASME</div>
    <div class="min-h-[2rem]">
      <div class="text-xs text-gray-500">2026 · Williston Medal Committee</div>
    </div>
    <div class="mt-1 min-h-[2.5rem] text-sm italic leading-snug text-brand-gray">I stepped back so I could come back.</div>
    <div class="mt-2 flex h-40 w-full flex-col items-center justify-center rounded-xl bg-white shadow-md ring-1 ring-gray-900/10">
      <div class="text-2xl font-bold tracking-tight text-brand-navy">Here, with you.</div>
      <div class="mt-1 text-sm text-gray-500">Philadelphia · 2026</div>
    </div>
  </div>
</div>
</div>

<DeckLogos />

<!--
I started university at 15. By my second semester I was close to burning out. I felt alone, and my mental health took a hit. If that's you right now, talk to someone. I transferred to Medellín and took fewer credits. Going at my own pace wasn't falling behind; it's the reason I stayed.

[click] In 2019 we formally founded the ASME student section at UNAL Medellín, the Medellín campus of Universidad Nacional de Colombia. That's why, when I founded the section, I knew it had to be a team, not a one-person show. I stayed involved until I graduated, and that team is what let me step away later.

[click] In 2023 we activated the ASME Colombia Section. Then in 2025, writing my thesis while working full time, I had to pause volunteering. Completely. That was hard, and it was the right call. "Not now" isn't "never."

[click] This year I'm back: volunteering with the Colombia Section again, and on the Arthur L. Williston Medal Committee, an ASME award committee, since July. And now I'm here. Here, with you. I stepped back so I could come back.

Budget: about 1:20 for this slide (~25s per step). If it runs long, trim the step 1 explanation, never the burnout part.
-->

---
transition: slide-left
deckSection: advice3
---

<TryThis subtitle="Stepping back is part of the journey.">
  <TryCard v-click label="This weekend">Write down the 3 things only you know how to do in your section.</TryCard>
  <TryCard v-click label="This month">Teach one of them to someone else.</TryCard>
  <TryCard v-click label="This year">Plan one month where the section runs without you, and see what holds up.</TryCard>
  <template #below>
    <div v-click class="mt-4 w-full text-center text-2xl font-bold leading-snug tracking-tight text-brand-navy">
      Build a section that doesn't need you every week.
    </div>
    <div v-click class="mt-2 w-full text-center text-xl font-bold leading-snug tracking-tight text-brand-navy">
      And a life where stepping back isn't falling behind.
    </div>
  </template>
</TryThis>

<DeckLogos />

<!--
(From step 3: "I stepped back so I could come back." You can only do that if your section can run without you. So, this weekend:)

[click] Write down the 3 things only you know how to do in your section. The password, the sponsor contact, the room booking. That list is your risk.

[click] This month: teach one of them to someone else. That's how you build the next leader.

[click] This year: plan one month where the section runs without you, for exams, a thesis, or just to rest, and see what holds up. If it falls apart, you've learned what to teach next.

[click] Build a section that doesn't need you every week. That's how mine was still there when I came back.

[click] And a life where stepping back isn't falling behind. Your studies and your career need pauses too: plan them, don't apologize for them.
-->
