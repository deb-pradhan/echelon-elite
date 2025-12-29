The Blueprint: Luxury Real Estate Design System (LRE-DS)

Version: 1.0.0
Author: Product Design Lead
Status: Live Framework

1. Design Ethos & Philosophy

The core philosophy of this system is "Essentialism & Grandeur."
Luxury is not defined by what you add, but by what you refuse to take away. The interface must recede, allowing the property and imagery to dominate.

The 80/20 Rule: 80% Photography/Media, 20% UI.

Pacing: The user journey should feel like a slow walk through a gallery, not a sprint. We prioritize smooth, slightly slower interactions to induce a sense of calm and weight.

Tactility: Despite being digital, the UI should evoke the feeling of heavy cardstock, cool marble, and brushed metal.

2. Foundations: The Atomic Layer

2.1 Color System: "Organic Modernism"

Drawing from the mood board, we avoid pure blacks (#000000) and pure whites (#FFFFFF). We use "off" tones to reduce eye strain and increase warmth/sophistication.

Primary Palette (The Brand Anchor)

--color-primary-void: #0F1115 (Deep Charcoal) - Used for primary text and dark backgrounds. A softer alternative to black.

--color-primary-paper: #F4F1ED (Warm Alabaster) - Used for light backgrounds. Mimics the texture of art paper.

--color-accent-gilt: #C5A065 (Muted Gold) - Used sparingly for hover states, primary CTAs, and thin borders.

Secondary Palette (Support & Texture)

--color-secondary-stone: #8E8D8A (Warm Grey) - For secondary text and dividers.

--color-secondary-moss: #2C3E33 (Deep Green) - An alternative dark background for immersive sections (e.g., distinct neighborhood guides).

--color-surface-overlay: rgba(15, 17, 21, 0.4) - For image overlays to ensure text readability.

Semantic Usage

Error: #9E2A2B (Desaturated Red) - Never bright red.

Success: #4B6455 (Desaturated Green).

Border Default: rgba(15, 17, 21, 0.1) (Subtle definition).

2.2 Typography: "Editorial Architecture"

We pair a high-contrast Serif (The "Architect") with a geometric Sans-Serif (The "Engineer").

Typeface Selection

Display / Headings (Serif): Playfair Display or Cinzel.

Characteristics: High contrast, sharp terminals, tight letter spacing for headings.

Body / UI (Sans-Serif): Lato or Montserrat.

Characteristics: Clean, geometric, high legibility at small sizes.

Type Scale (Major Third Ratio - 1.250)

Display XL: 96px / 100% LH / -3% LS / Serif (Hero Sections)

Heading H1: 64px / 110% LH / -2% LS / Serif

Heading H2: 48px / 120% LH / -1% LS / Serif

Heading H3: 32px / 130% LH / 0% LS / Serif

Body Lead: 20px / 160% LH / +1% LS / Sans (Intro text)

Body Regular: 16px / 170% LH / +2% LS / Sans

Caption/Label: 12px / 150% LH / +10% LS / Sans / Uppercase (Nav, Buttons, Tags)

Note: Increased Letter Spacing (LS) on uppercase Sans-serif text creates a premium "engraved" look.

2.3 Spacing & Grid: "The Breath"

Luxury requires space. We use an 8pt grid system, but with distinct "breathing" multipliers.

The Grid

Desktop: 12 Columns, 80px Margins, 24px Gutter.

Tablet: 8 Columns, 48px Margins, 16px Gutter.

Mobile: 4 Columns, 20px Margins, 12px Gutter.

Spacing Tokens (Vertical Rhythm)

--space-xs: 8px (Related items)

--space-sm: 16px

--space-md: 32px

--space-lg: 64px (Section separation)

--space-xl: 128px (The "Luxury Gap" - distinct separation between narrative beats)

--space-2xl: 192px (Hero padding)

3. Visual Language

3.1 Photography Guidelines

Images are the product.

Aspect Ratios: 16:9 (Cinematic), 4:5 (Portrait/Editorial), 1:1 (Detail shots).

Treatment: No harsh filters. Natural light.

Shadows: Deep but detailed.

Highlights: Soft, rarely blown out.

Framing: Symmetrical for exteriors (grandeur), Asymmetrical for interiors (lifestyle).

3.2 Iconography

Style: Stroke-based, 1px uniform width.

Color: Inherits current text color.

Shape: Sharp corners or very slight rounding (1px radius). No fills.

Let the icons be descriptive but minimal (e.g., a simple outline of a key, a door, a compass).

3.3 Borders & Dividers

The "Hairline": All borders are 1px solid.

Opacity: Borders should never be fully opaque. Use 10-20% opacity of the primary color.

Usage: Use lines to separate content vertically or horizontally to mimic architectural blueprints.

4. Components & UI Elements

4.1 Buttons (The CTA)

Buttons should feel like physical switches or pressed card.

Primary Button (The "Statement")

Background: --color-primary-void

Text: --color-primary-paper

Typography: Caption/Label Style (Uppercase, Wide tracking)

Shape: Sharp rectangles (0px border radius)

Interaction: On hover, subtle lift (Y -2px) and background lighten (5%).

Secondary Button (The "Outline")

Background: Transparent

Border: 1px Solid --color-primary-void

Text: --color-primary-void

Interaction: On hover, fill with --color-primary-void, text becomes white.

Text Link (The "Whisper")

No underline by default.

Underline (1px offset) appears on hover. Animated Left-to-Right.

4.2 Cards (Property Previews)

Container: No background color (transparent).

Image: 4:5 Aspect Ratio.

Typography: Title (Serif H3) below image. Price (Sans Regular) below title.

Interaction: Image zooms in slowly (Scale 1.0 to 1.05) over 0.6s on hover.

4.3 Forms & Inputs

Style: Underline only (The "Architectural Line"). No boxes.

Active State: The bottom border thickens from 1px to 2px and changes to --color-accent-gilt.

Labels: Floating or persistent uppercase label above the line.

5. Motion & Interaction Design

Motion is the "feel" of luxury. It must be slow, deliberate, and smooth.

5.1 Physics

Curve: cubic-bezier(0.2, 0.0, 0.2, 1) (The "Eames" Curve - gentle acceleration, very smooth deceleration).

Duration:

Micro-interactions (Hover): 0.4s

Page Transitions: 0.8s - 1.2s

Parallax: Slow scrolling speed (0.8x scroll rate).

5.2 Scroll Effects

Parallax: Background images move slightly slower than foreground content to create depth.

Reveal: Elements fade in and slide up (Y +30px to 0) as they enter the viewport. Staggered delay for lists.

6. Implementation Checklist (For Developers)

Reset: Apply a modern CSS reset. Box-sizing: border-box is mandatory.

Font Loading: Ensure fonts are preloaded to prevent layout shift (CLS).

Variable Setup: Map the Color and Spacing tokens to CSS Variables (:root) immediately.

Grid Wrapper: Create a master .container class that handles the responsive margins defined in Section 2.3.

Image Optimization: Serve WebP/AVIF. Lazy load everything below the fold.

"True luxury is the absence of friction."