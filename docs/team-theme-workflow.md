# Theme Development Workflow

This theme is connected to GitHub (`main` branch). Two things can update it: **code changes pushed via git**, and **content/settings changes made in the Shopify theme editor**. Both sync automatically, but only if the team follows this workflow — otherwise changes can get overwritten.

## The two ways this theme gets updated

| Who | Where they work | What happens |
|---|---|---|
| Developers | Local files, code editor | Push to GitHub → auto-deploys to the connected theme in Shopify within seconds |
| Content editors / marketers | Shopify theme editor (Customize) | Auto-commits back to the GitHub `main` branch within ~10 seconds |

Because both directions are live, **everyone needs to pull before they start work** — otherwise you can overwrite someone else's changes without realizing it.

## Roles

**Content editors (marketing, store ops)**
- Use the Shopify theme editor (Online Store → Themes → Customize) for anything a section already exposes: text, images, colors, alignment, product picks, button links.
- Never need git, GitHub, or the CLI.
- Should avoid duplicating a developer's in-progress code changes — check with the dev team before big content pushes if a code change is mid-flight.

**Developers**
- Work only through git — never edit code by hand in Shopify's online code editor, since that also auto-commits and can conflict with local work.
- Always create a feature branch for changes, not direct commits to `main`.

## Standard workflow for a code change

```bash
# 1. Get the latest — this pulls in any admin-made content changes too
git checkout main
git pull origin main

# 2. Create a feature branch
git checkout -b feature/short-description

# 3. Make your changes locally, then preview them live
shopify theme dev --store ai-layout-test.myshopify.com

# 4. Commit and push your branch
git add .
git commit -m "Describe what changed"
git push -u origin feature/short-description

# 5. Open a Pull Request on GitHub: feature/short-description → main

# 6. After review, merge the PR on GitHub
#    → this triggers an automatic deploy to the connected Shopify theme
```

**Why a feature branch and PR, not pushing straight to `main`:** it gives the team a chance to review before it goes live, and avoids two people's changes silently overwriting each other on the same branch.

## Before you start ANY local work

```bash
git checkout main
git pull origin main
```

This matters because a content editor may have changed settings in the Shopify theme editor since you last pulled (new slider image, new text, a settings tweak) — pulling first means your local files match what's actually live before you branch off.

## Rules to avoid conflicts

1. **Don't edit theme code (`.liquid`, `.css`, `.js`) directly in Shopify's online code editor.** It auto-commits straight to `main` and bypasses review. Code changes go through git only.
2. **Content editors stick to the theme Customizer**, not the code editor — Customizer changes are safe and expected to auto-commit.
3. **Pull before every new branch.** Stale local code can quietly undo a recent admin change when merged.
4. **Merge PRs promptly.** The longer a feature branch sits unmerged, the more likely it drifts from live content changes.
5. **One person "owns" a merge to `main` at a time** where possible — avoids race conditions when two PRs touch the same file.

## If something looks like it reverted

If a content editor's change (like a new hero image) seems to disappear after a developer's merge, it's almost always because the developer didn't `git pull` before branching, so their branch was based on an older version of `config/settings_data.json`. Fix: pull `main`, redo the content change in the Customizer (fast), or manually merge the setting back into `settings_data.json`.

## Quick reference

- **Live store URL:** https://ai-layout-test.myshopify.com
- **GitHub repo:** https://github.com/Preethithangavelu/shopify-theme
- **Connected branch:** `main`
- **Local dev command:** `shopify theme dev --store ai-layout-test.myshopify.com`
