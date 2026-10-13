# CLAUDE.md

Slidev deck for a talk by Salomon Perez-Atencia at the **ASME Student Leader Weekend, Philadelphia (Oct 17, 2026)**.

## The talk

- **Title:** "Step Out. Show Up. Step Back." Subtitle: "Three lessons from my ASME journey, from ships to data". Footer `shortTitle`: "Step Out · Show Up · Step Back". (Renamed from "Not on the Syllabus", which only described Advice #1.) The three verbs map to Advice #1, #2, #3.
- **Audience:** ~140 ASME student section leaders from US universities.
- **Format:** professional development session. 15 min talk + 15 min Q&A.
- **Organizer ask:** share my ASME journey and my background in data analytics.
- **Angle:** non-technical lessons. Their courses already cover the technical side. Keep metrics, model names, and jargon off the slides.
- **Structure of every advice:** statement slide → personal story slide → "Try this" slide with 3 actions ordered by time horizon (This weekend / This month / This year).
- **Language:** slides and notes in English.

## Workflow

The deck is planned in one Claude session (brainstorming, no edits) and applied in another (edits from a prompt). When applying changes:
- Change only the slides the prompt mentions.
- Keep placeholders in `[square brackets]`, and add a `TODO:` line in the speaker notes of any slide that has one.
- Verify visually after every change (see below) and report what changed plus the remaining placeholders.

## Structure

- `slides.md`: headmatter (title, footer, logos, `sections`), the cover slide, and `src:` imports.
- `pages/01_introduction.md`: About me. Photo captions: "ASME SLTC · Tampa, FL · 2017" and "M.Sc. graduation · UNAL · Sept 2026" (the full university name wraps at text-[11px]).
- `pages/02_advice.md`: framing slide + Advice #1, #2, #3.
- `pages/03_conclusions.md`: Key takeaways, Ask me anything (Q&A + contact).
- `pages/02_examples.md`, `pages/99_references.md`: template leftovers, **not imported**. Keep them, don't import them.
- `components/`: `TryThis` + `TryCard` (the "Try this" slides), `DeckLogos` (put at the end of every slide), `DeckFooter`, `DeckSectionNav`.
- `public/images/`, `public/videos/`, `public/logos/`: assets, referenced as `/images/x.jpg`.

Sections (`deckSection:` on each slide): `intro`, `syllabus`, `advice1`, `advice2`, `advice3`, `closing`. The nav labels are deliberately neutral ("The idea", "Advice 1"…) so they don't spoil the punchlines. The `syllabus` id is internal; its label is "The idea".

## Style conventions

- Palette (`uno.config.ts`): `brand-blue` #3981BF, `brand-navy` #1F4E79, `brand-gray` #262626. Use the class names. Don't write `text-[#…]` in `.md`, because Vue breaks on `[]` + `#`.
- Shortcuts: `slide-deck-shell`, `slide-title`, `slide-title-bar`, `deck-card` (+ `border-l-brand-blue` / `border-l-brand-navy`, alternating), `deck-card-label`.
- Statement slides: `layout: center`, small uppercase "Advice #N" label in brand-blue, `text-3xl` bold statement.
- Story slides: horizontal 3-step timeline (numbered circles + connecting line, one `v-click` per step), with media under each step that appears together with it.
- Photos: `rounded-xl`, `shadow-md`, `ring-1 ring-gray-900/10`, `object-cover`, and tune `object-position` so faces stay visible.
- Nothing may overlap the footer or the ASME logo in the bottom-right corner.

## Gotchas

- Browsers like Chrome don't render HEIC. Convert first: `sips -s format jpeg -s formatOptions 85 -Z 1600 in.HEIC --out out.jpg`.
- Videos: `<video autoplay muted loop playsinline>`. The PNG export can't show playback, so check in `npm run dev`.

## Verify

```
npx slidev export slides.md --format png --with-clicks --output <temp dir>
```
Look at every changed slide at every click. Check video playback with `npm run dev` (http://localhost:3030).

## Publishing

- Repo: https://github.com/salperezate24/asme_slt_oct26 (public). Git author for this repo: Salomon Perez-Atencia <salperezate@unal.edu.co> (local config).
- Site: https://salperezate24.github.io/asme_slt_oct26/
- Pushing to `main` redeploys: `.github/workflows/pages.yml` builds with `--base /asme_slt_oct26/` and publishes to the `gh-pages` branch (Pages source: gh-pages / root). Local check: `npx slidev build slides.md --out dist --base /asme_slt_oct26/`.
- **Strip EXIF/GPS from every new photo before committing (the deck is public):** `exiftool -all= -overwrite_original <file>`, then check `mdls -name kMDItemLatitude <file>` returns `(null)`. If the photo has an EXIF rotation (`exiftool -Orientation`), bake it in first (Pillow `ImageOps.exif_transpose`) or it will display rotated.

## Content decisions (don't change without asking)

- Cover: title in `text-5xl`. Notes: "Hi, I'm Salomon. I'm a mechanical engineer from Colombia, and today I work with data."
- Framing: "Your professors will teach you the equations. This talk is about everything that isn't on the syllabus." Kept on screen after the rename (it still works as a framing). Notes: "Today: three non-technical lessons from my path, from ships to data, and my ASME journey along the way."
- **Advice #1:** "Curiosity sparks creativity. Discomfort makes it grow."
  - Story "My uncomfortable jump", with one lesson per step:
    1. COTECMAR 2022: "Not sure what you want yet? Take the job. It will show you what's next."
    2. M.Sc. thesis: "Engineers solve problems. Changing careers is just another one."
    3. Source Meridian, April 2024: "Your degree is a way of thinking, not a job title."
    - Each step's subtitle starts with its date, like the Advice #3 timeline: "2022 · …", "2023–2026 · …", "April 2024 · …". Step 2 caption is "My thesis: AI tracking a human egg cell" (short, so it doesn't wrap).
    - Notes are spoken text, one `[click]` per step. Key moment (marked `>>> KEY MOMENT <<<` in the notes, between steps 1 and 2): the email from my university offering any graduate program with no admission exam, and quitting my job at COTECMAR to take it ("That was the uncomfortable part."). Target ~80 seconds for this slide.
    - Notes give context the first time a name is said: COTECMAR = a Colombian Navy shipyard, XPAND = a marketing company, where I was the data analyst, UNAL = Universidad Nacional de Colombia. The video shows labels with numbers; the notes say not to explain them. Don't re-render the video.
  - "Try this": subtitle is the statement. Cards escalate in discomfort and follow the statement in order (curiosity → creativity → growth):
    - This weekend: "Sit with a section you don't know and ask what they're building."
    - This month: "Keep your hobby alive: one protected hour a week. Curiosity needs somewhere to play."
    - This year: "Apply for one thing you don't feel ready for, as long as someone there will teach you." (echoes the step 1 lesson, plus my filter: they're willing to teach you)
    - Closing line on its own click: "Be a beginner again. On purpose." (callback to the M.Sc. thesis, step 2)
    - Speaker notes name my hobby, travel, as spoken text: the current trip (New York, Lynchburg, Virginia, now Philly; finished the slides in Lynchburg), then "you can protect one hour a week for whatever keeps you curious." Card text on screen unchanged.
- **Advice #2:** "You are great. Let people see it."
  - Order: statement → Feynman story → stat slide → hand-raise → "Try this".
  - Statement notes open with the #1 → #2 bridge, as spoken text: "Curiosity gets you into new rooms. Once you're there, people need to see what you bring."
  - Story slide "Metaplast's Chief Research Chemist" (one-line title; right after the statement), subtitle "A story from Richard Feynman · “Surely You’re Joking, Mr. Feynman!”". Option A, imagined vs. real: two cards (25–50 chemists + glass office vs. 1 chief research chemist + 1 bottle-washer), then the one allowed direct quote (the bottle-washer punchline), then on click 3 the reflection line "Don't compare your inside to someone else's outside.". No bottom citation line: the title and subtitle already cite the chapter and the book. Two columns: the book cover (`/images/surely_your_joking_mr_feynman.jpg`, full height from the subtitle to just above the footer) stays on the left the whole slide; on enter (click 0) it's the only thing shown while I tell the intro. The right column fills in from click 1 (the Los Alamos lunch). No other photos. Framing: don't be the English lab (hiding your worth), don't be Metaplast (overpromising): show what's real.
  - Stat slide (after the Feynman story, before the hand-raise): ~35,000 US ME graduates per year vs 140 leaders in the room. Never present this as a percentage, because the two groups are different. Source: C. Cecere, ASME, Apr 16, 2025.
  - Hand-raise questions revealed one at a time (all 5 questions — don't trim them), then a final click with the closing line "You've done great things. Let people see them." (an intentional echo of the statement; keep it). Notes say "most of you have your hand up", not "every hand".
  - "Try this": subtitle "You are great. Let people see it." (the statement, like Advice #1). No big numbers, no Bonus line. Every action is about *showing* something, not just networking. Don't call any suggestion a "rule"; these are my own suggestions.
    - This weekend: "Introduce yourself with one thing you built, not just your major and year."
    - This month: "Put one project you're proud of on LinkedIn. Follow up with the people you met here, or email that professor." (on screen it's shortened to keep the row balanced; the notes say "the professor you want to work with")
    - This year: "Take your section's work off campus: co-host something with a section you met here, or enter a competition."
    - Closing line on its own click, same style as Advice #1: "Don't be the lab in England. Show what's real."
- **Advice #3:** "Stepping back is part of the journey." Covers the organizers' "ASME journey" ask. Completes #1 and #2 instead of contradicting them: do all of this, just not all at once. Chosen over "Go at your own pace" and "Rest is part of the work".
  - Statement-slide notes call back to hand-raise question 3 ("stayed up all night… I did too. That's not the part I'm proud of."). The hand-raise notes flag the setup.
  - Story "My ASME journey", same 3-step timeline + photo design as Advice #1. No key-moment card (time).
    1. Founded ASME UNAL Medellín, 2019 (formal founding year): "A section is a team, not a one-person show." Photo `/images/asme_unal_med_2019.jpg`.
    2. Activated ASME Colombia: date line "2023" only, plus a visible line below it, "Paused in 2025 for my thesis" (text-xs semibold brand-navy). Lesson: "“Not now” isn't “never.”" Photo `/images/asme_colombia_2023.JPEG`.
    3. Back in ASME, 2026 (Colombia Section volunteering again + Arthur L. Williston Medal Committee, introduced in the notes as "an ASME award committee", since July 2026; on screen only "Williston Medal Committee" so the line doesn't wrap): "I stepped back so I could come back." Media is not a photo but a white card the same size as the photos: "Here, with you." + "Philadelphia · 2026", no caption under it.
    - The subtitle area of each step has `min-h-[2rem]` so lessons and media line up despite step 2's extra line.
    - Notes open with burnout context as spoken text: started university at 15, close to burning out in the 2nd semester, felt alone and my mental health took a hit, "If that's you right now, talk to someone.", transferred to Medellín and took fewer credits, "Going at my own pace wasn't falling behind; it's the reason I stayed." Step 1 notes connect to it: "That's why, when I founded the section, I knew it had to be a team, not a one-person show." If the slide runs long, trim the step 1 explanation, never the burnout part.
  - Statement-slide notes say "Most of you raised your hand" (not "Everyone").
  - "Try this": subtitle is the statement. Cards build succession, so the section survives a leader stepping back:
    - This weekend: "Write down the 3 things only you know how to do in your section."
    - This month: "Teach one of them to someone else."
    - This year: "Plan one month where the section runs without you, and see what holds up."
    - Closing line on its own click: "Build a section that doesn't need you every week."
    - Second closing line on its own (last) click, one size smaller (text-xl), reads as its continuation: "And a life where stepping back isn't falling behind."
  - Key takeaway 3 = the statement.
- **Key takeaways:** subtitle "Step out. Show up. Step back."; each card has a small verb label (STEP OUT / SHOW UP / STEP BACK) above its statement. Final click: closing line in two centered lines, "In 2017, I was sitting where you are. / Someday, one of you will be up here." (callback to About me; split so it clears the logo). Notes end with "Pick one action you saw today and do it this weekend."
- **Closing:** the last slide is "Ask me anything." + LinkedIn QR (`/images/linkedin_qr.svg`, navy on white) + email salperezate@unal.edu.co. It stays up during the whole Q&A. No phone number on any slide (the deck is published on GitHub Pages).

## Open TODOs

- Advice #3 budget: 2:30 max (talk is at ~14 min). Target: statement 0:15, story 1:20, Try this 0:45. Rehearse to confirm.
