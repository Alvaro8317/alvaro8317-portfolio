# CLAUDE.md

Guide for working in this repository.

## About the project

Personal portfolio of Álvaro Garzón, served at https://alvaro8317.lat/. Single-page app built with
React 19 + Vite + TypeScript + Tailwind CSS v4, plus small pages for events where the owner gives
talks (thank-you note + free course coupons + socials).

- `src/` — the Vite app (`package.json`, `vite.config.ts`, `tailwind.config.js`, `.nvmrc`). All
  `npm` commands run from here.
- `src/src/Portfolio.tsx` — the portfolio page, built from the sections in `src/src/components/`
  (`Header`, `Hero`, `About`, `Experience`, `Projects`, `Contact`, `Footer`), re-exported from
  `components/index.ts`.
- `src/src/pages/` — event pages (`CommunityDay.tsx`, `MeetupNeiva.tsx`).
- `src/src/Root.tsx` — hash mini-router: `#/<event-slug>` renders an event page; any other hash
  (`#projects`, `#about`, ...) falls through to the portfolio so in-page anchors keep working.
- `src/src/index.css` — Tailwind import plus the few custom classes (`.text-color-aws`,
  `.bg-aws-animated`) and a global `scroll-behavior: smooth`.
- `infra/` — SAM/CloudFormation template (S3 bucket, CloudFront with OAC, ACM certificate),
  stack `alvaro8317-portfolio` in `us-east-1` (`samconfig.toml`).
- `ci/` — `cfn-lint` pinned with hashes (`cfn-lint.txt`, generated from `cfn-lint.in`).
- `.mockups/` — design mockups from the `designer` agent (ignored by git; see the agents section).

## Commands

```bash
cd src
npm ci
npm run dev      # local dev server
npm run lint     # ESLint
npm run build    # tsc -b + vite build; must pass before any commit that touches src/
```

Use the Node version in `src/.nvmrc`. There are no unit tests: lint and build are the gate.

To check a page visually, build and preview it and capture it with the pinned Playwright (its
Chromium is already cached on the machine; Playwright is not a dependency of this repo):

```bash
npx vite preview --port 4173 &
npx -y playwright@1.63.0 screenshot --full-page --wait-for-timeout=1000 \
  --viewport-size=375,667 --color-scheme=dark "http://localhost:4173/#/<route>" shot.png
```

Stop the preview server afterwards.

## Event pages

Each talk gets its own page, shared with the audience **after** the talk: the tone is
«¡Gracias por asistir!», not an invitation. Event data (talk title, date, time, group, format) is
shown as a keepsake, never as a call to action to sign up or attend.

- New page in `src/src/pages/<Name>.tsx`, with its data (`talk`, courses, ...) as constants at the
  top of the file, and a route in `Root.tsx` (`#/<event>-<city>-<year>`, e.g.
  `#/meetup-aws-neiva-2026`).
- Reuse `EventHeader` (sticky header with "← Volver al portafolio") and `Footer` from
  `components/`; do not copy their markup.
- Free course access is through Udemy links. Coupons (`?couponCode=...`) expire, so every event
  needs **new coupons from the owner**; never reuse another event's coupons or invent codes. The
  «De cero a contratado» course uses its `?referralCode=...` link instead.
- Drop promotions or offers whose deadline has passed (e.g. the AIF2CLOUD promo of the
  Community Day page, which ended on 2026-09-30).
- Event facts come from the event page the owner shares (e.g. Meetup); do not invent agenda items,
  links or speakers.

## UI conventions

- UI text in Spanish; code and identifiers in English (comments may be in Spanish, as in the
  existing files).
- Styling with inline Tailwind classes; dark mode follows the system (`dark:` variants).
- External links: `target="_blank" rel="noreferrer"`.
- Accessibility: 44 px (`h-11`/`min-h-11`) minimum tap area, visible focus
  (`focus-visible:outline-2 focus-visible:outline-amber-500`), WCAG AA contrast (the teal
  `#0AB981` is ~2.5:1 on white: do not use it for small text in light mode), and respect
  `prefers-reduced-motion` for any animation or smooth scroll.

## Commits, branches and PRs

**Always create commits with the `/commit` skill** (Skill tool, `skill: "commit"`). Never write
`git commit` by hand; this applies to subagents too. The skill sets the format: Conventional
Commits in English, one bullet per file or folder, files staged by name, no trailers.

- Changes to the site go through a branch `<type>/<slug>` (e.g. `feat/meetup-neiva-2026`) and a
  PR against `main`, with a Spanish title and description. Agents work in worktrees under
  `.claude/worktrees/` (ignored by git).
- **Every push to `main` that touches `src/**` deploys to production.** Never push site changes
  straight to `main`, never force-push, and merging is always the owner's call.

## CI and deploy

- `.github/workflows/ci.yml` runs on PRs to `main`, by area: `src/` → `npm ci`, lint, build and
  `npm audit --audit-level=critical --omit=dev`; `infra/` or `ci/` → `cfn-lint infra/template.yml`;
  `.github/` → everything. `ci-ok` is the single required check. Jobs run on the owner's WSL
  self-hosted runner when the `CI_RUNNER` repo variable is set, otherwise on `ubuntu-latest`.
- `.github/workflows/deploy.yml` runs on pushes to `main` (`src/**` or the workflow itself):
  reuses `ci.yml`, builds without AWS credentials, uploads `dist/` to `s3://alvaro8317.lat/` and
  invalidates the CloudFront distribution read from the stack outputs. The `deploy` job assumes
  `GitHubDeployRole` (`infra/template.yml`) over OIDC, with its ARN in the `AWS_DEPLOY_ROLE_ARN`
  repo variable: no static AWS keys in secrets. It always runs on `ubuntu-latest`, never on the
  self-hosted runner, because it holds credentials.

## `designer`, `implementer` and `critic` agents (`.claude/agents/`)

Ported from `aws-cert-simulator` (its `documenter` is not used here: there is no question bank).
All discussion between the agents happens in GitHub PR comments and in `.mockups/`: the
orchestrator (the main session) shares no context with them.

0. **Design first, for any visual change** (new pages, components, Tailwind classes,
   `index.css`), also ones the orchestrator would make by itself: no design is chosen without the
   owner.
   1. Write the owner's request verbatim, plus the facts the designer needs (event data, links,
      what is out of scope), to `.mockups/<slug>/brief.md`, and launch `designer` with **only**
      the slug.
   2. It writes 5 options to `.mockups/<slug>/v<n>/` (`option-1..5.html`, `index.html` to compare
      them, `shots/` and `notes.md`). Show the owner the options and `notes.md`, and ask for their
      verdict: never pick or rule out an option yourself.
   3. Write the owner's verdict and comments verbatim to `.mockups/<slug>/v<n>/feedback.md`. If
      they did not approve, launch a new `designer` with the same slug (round `v<n+1>`).
   4. Once approved, write `.mockups/<slug>/approved.md`: the chosen version and option
      (`v<n>/option-<k>.html`), the owner's words and final adjustments, and known pending items.
1. Launch `implementer` with **only** the slug. It opens the PR.
2. Launch `critic` with **only** the PR number.
3. If the verdict is `CHANGES REQUESTED`, launch `implementer` with **only** the PR number, then
   `critic` again. Repeat until `APPROVED`, up to 3 rounds; if the cap is reached, tell the owner
   and link the PR.

Orchestrator rules:

- Each agent's prompt is only the slug or the PR number. Anything they need must be in the PR,
  `.mockups/<slug>/` or `CLAUDE.md`.
- Every round is a new agent, never `SendMessage` to a previous one.
- Small changes the owner asks for directly on an open PR (e.g. new coupon links) can be made by
  the main session on the PR branch, with the `/commit` skill, before the next `critic` round.
- Agents never merge; merging is the owner's call.
- Agent definitions are loaded when the session starts. If `designer`, `implementer` or `critic`
  are not available as agent types (files added mid-session), launch a `general-purpose` agent
  with the model from the file's frontmatter and a prompt that tells it to read
  `.claude/agents/<name>.md` and follow it as its system prompt, followed by the slug or number.
