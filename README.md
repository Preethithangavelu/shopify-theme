# Custom Storefront Theme

A from-scratch Shopify Online Store 2.0 theme with fully editable, admin-controlled sections. Home, About, Contact, and Shop pages included, built for 5 sample products.

## What's included

**Pages**
- `templates/index.json` — Home (slideshow, bestsellers, story block, testimonials, newsletter)
- `templates/page.about.json` — About page
- `templates/page.contact.json` — Contact page with a working contact form
- `templates/page.shop.json` — Shop page showing 5 picked products
- `templates/product.json`, `collection.json`, `cart.json`, `search.json`, `404.json` — standard pages

**Reusable sections** (all in `sections/`, all editable in the theme editor — no code needed)
| Section | Key controls |
|---|---|
| `header` | logo + width, menu, sticky toggle, colors |
| `footer` | logo, tagline, up to 4 link columns, newsletter toggle, colors |
| `hero-banner` | multi-slide slideshow; per slide: image, height, overlay darkness, heading text/size/color, alignment (left/center/right), content position (top/middle/bottom), subheading, button label/link/style |
| `rich-text` | heading (text, size, weight, color), body (size, color), alignment, button, background, padding |
| `image-with-text` | image, layout (left/right), heading, body, alignment, button, background, padding |
| `featured-products` | heading + alignment/size/color, subheading, product picker blocks (up to 12), column count desktop/mobile, CTA button |
| `testimonials` | heading, up to 6 blocks with star rating, quote, author |
| `newsletter` | heading, subheading, placeholder text, button label/style, background |
| `contact-form` | heading, alignment, submit button label/style, optional store-info column (address/phone/email/hours) |
| `page-banner` | heading, subheading, alignment, background image or color, padding — used at the top of About/Contact/Shop |

Every text element (headings, body copy) exposes **alignment, size, color, and weight** through the schema — editable per-section in the Shopify theme editor, no code changes needed.

## 1. Prerequisites

- [Shopify CLI](https://shopify.dev/docs/api/shopify-cli) installed (`npm install -g @shopify/cli @shopify/theme`)
- A Shopify store (a free dev store from [Partners](https://partners.shopify.com) works well)

## 2. Run it locally

```bash
cd shopify-theme
shopify theme dev --store your-store.myshopify.com
```

This starts a local preview and hot-reloads as you edit files.

## 3. Add the 5 sample products

Themes don't store product data — products live in your store's database. Two ways to get the 5 sample products in:

**Option A — CSV import (fastest)**
1. In Shopify admin: **Products → Import**
2. Upload `sample-products.csv` (included in this folder)
3. Click Import — this creates 5 sample products (tote bag, mug, pillow, clock, candle) with placeholder images and prices

**Option B — Create manually**
Add 5 products yourself in **Products → Add product**.

Then, in the theme editor, open the Home or Shop page, click into the **Featured products** / **Products** section, and use each block's **Product** picker to select one of your 5 products.

## 4. Set up navigation & pages

1. **Online Store → Navigation**: create a "Main menu" with links to Home, Shop, About, Contact
2. **Online Store → Pages**: create pages named "About", "Contact", and "Shop" — Shopify will let you assign the `page.about`, `page.contact`, and `page.shop` templates to them under **Theme template** in the page editor sidebar

## 5. Push to your store

```bash
shopify theme push --store your-store.myshopify.com
```

Or `shopify theme push --unpublished` to upload as a draft theme first.

## 6. Customize

Everything—colors, fonts, spacing, per-section text alignment/size/color, button shapes—is controlled from **Online Store → Themes → Customize**, including global settings under the paintbrush icon (Theme settings): colors, typography, layout width, button style, product card style, and social links.

## File structure

```
shopify-theme/
├── assets/            theme.css, theme.js
├── config/            settings_schema.json, settings_data.json (global theme settings)
├── layout/            theme.liquid
├── locales/           en.default.json
├── sections/          all reusable sections
├── snippets/          heading.liquid, product-card.liquid, social-icons.liquid
├── templates/         index.json, page.*.json, product.json, collection.json, cart.json, search.json, 404.json
└── sample-products.csv
```
