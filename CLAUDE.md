@AGENTS.md

## Merge policy

This repo runs a supervised PR factory. A PR auto-merges only when the factory review
returns APPROVE-LOWRISK against this policy.

**Low-risk surfaces (eligible for auto-merge):**
- `components/sections/**` — presentational page sections
- `components/illustrations/**` — SVG illustration components
- `public/**` — static assets and images
- `app/globals.css` — global styling
- Page-level composition: `app/**/page.tsx` and `app/layout.tsx` (copy, markup, layout only)

**Always escalate to a human (never auto-merge), regardless of how small the change:**
- Anything touching trust, money, auth, sessions, secrets, billing, or pricing
- `app/actions.ts` and any other server actions (waitlist capture, Resend, external APIs)
- `middleware.ts` (routing, redirects, request handling)
- `components/WaitlistForm.tsx` and any component wired to data capture or submission
- Database schema, migrations, or data deletion/retention
- Access control / permissions
- CI, workflows, build config, `package.json`, or dependency changes
- Anything outside the low-risk surfaces above

The reviewer (`.claude/agents/pr-reviewer.md`) is the source of truth for how this policy
is enforced. Tighten this block whenever something slips through.

<!-- BEGIN STANDARD -->
## Response style
- Lead with the concrete next action, before context or caveats.
- Number multi-step work.
- Restate what's done and what's left each turn.
- No tangents or "you might also consider."
- Time estimates as specifics ("~5 min").
- Call out completed steps explicitly.

## Design and UI work
Any product or feature change with a visual surface: present exactly three
options (A, B, C), one-line rationale each. Render them — never describe
them in prose. Build each as a working preview and open all three side by
side in a browser. `/design-shotgun` does this end to end.
Stop and wait for a choice before building anything further.

## Git workflow
- Never commit to `main`. Branch as `claude/<description>`.
- One PR per logical change — don't mix chores into feature branches.
- Delete the branch after merge.
<!-- END STANDARD -->
