export type Project = {
  slug: string;
  name: string;
  industry: string;
  location: string;
  url: string;
  image: string;
  summary: string;
  overview: string;
  challenge: string;
  solution: string;
  role: string[];
  tech: string[];
  features: string[];
};

export const projects: Project[] = [
  {
    slug: "walkers-place",
    name: "Walker's Place",
    industry: "Bar & Restaurant",
    location: "Des Moines, IA",
    url: "https://walkers-place-ebru.arcada.app",
    image: "/projects/walkers-place.png",
    summary:
      "A neighborhood bar site built for one job: get people through the door tonight.",
    overview:
      "Walker's Place needed a site that reads instantly on a phone in a parking lot: hours, menu, directions, nothing in the way. I took the starting build and refined the typography, spacing, and information order so the page answers 'are they open, what do they serve' in under three seconds.",
    challenge:
      "The original layout buried the practical details (hours, address, phone) beneath decorative sections. For a neighborhood bar, indecision costs a customer their next stop.",
    solution:
      "I restructured the hero to lead with status and hours, tightened the type scale for a bold, tavern-poster feel, and pushed the amber accent through the CTAs so 'See the Menu' and 'Get Directions' are unmissable on mobile.",
    role: [
      "Refined layout hierarchy and section order",
      "Tuned typography and spacing for mobile-first scanning",
      "Optimized image loading and CTA placement",
      "Deployed and verified across devices",
    ],
    tech: ["HTML", "CSS", "Responsive Layout", "Custom Coding", "Performance Tuning"],
    features: [
      "Live open/closed status in the hero",
      "One-tap directions and menu access",
      "Bold, high-contrast type built for glare and small screens",
      "Sub-second load on mobile networks",
    ],
  },
  {
    slug: "louisburg-bbq",
    name: "Louisburg BBQ & Brews",
    industry: "Restaurant",
    location: "Louisburg, KS",
    url: "https://louisburg-bbq-6m95.arcada.app",
    image: "/projects/louisburg-bbq.png",
    summary:
      "A slow-smoked brand identity translated into a site that feels as rich as the food.",
    overview:
      "The brand voice ('Slow-Smoked. Soul-Deep.') already had personality. My job was to make sure the site didn't flatten it. I refined the serif and script pairing, corrected contrast against the smoked-meat hero photography, and made sure the menu and directions were reachable in one scroll.",
    challenge:
      "Warm, moody photography is easy to make illegible. The initial build had type that fought the background instead of sitting on top of it.",
    solution:
      "I adjusted overlay opacity, kerning, and the serif/script hierarchy so the headline reads clearly at every viewport, then rebuilt the CTA row so 'View the Menu' carries the visual weight it deserves.",
    role: [
      "Refined typographic hierarchy and legibility",
      "Adjusted image overlays for contrast",
      "Rebuilt CTA hierarchy and spacing rhythm",
      "Mobile responsiveness pass and deployment",
    ],
    tech: ["HTML", "CSS", "Typography Systems", "Custom Coding", "Responsive Design"],
    features: [
      "Serif + script pairing tuned for warmth without losing legibility",
      "Full-bleed photography with corrected contrast",
      "Menu, hours, and directions all one tap away",
      "Consistent brand voice from hero to footer",
    ],
  },
  {
    slug: "konnectorz-real-estate",
    name: "Konnectorz Real Estate",
    industry: "Real Estate",
    location: "Enugu, Nigeria",
    url: "https://konnectorz-real-estate-v3af.arcada.app",
    image: "/projects/konnectorz.png",
    summary:
      "A developer-grade real estate site rebuilt to read as trustworthy to first-time buyers.",
    overview:
      "Konnectorz sells plots and housing to families making one of the largest purchases of their lives. The site needed to project stability, not hype. I refined the hero composition, tightened the trust signals, and made 'Get in Touch' the clear, singular next step.",
    challenge:
      "Real estate buyers hesitate at the first sign of a site that feels thrown together. The original draft had competing CTAs and inconsistent spacing that undercut credibility.",
    solution:
      "I simplified the hero to one primary action, aligned the rating badge and copy for immediate trust, and cleaned up the navigation so About, Properties, and Reviews feel like a considered structure rather than a template.",
    role: [
      "Refined trust signals and hero composition",
      "Simplified call-to-action hierarchy",
      "Improved navigation clarity and consistency",
      "Responsive QA and production deployment",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Custom Coding", "UI Refinement"],
    features: [
      "Single, unambiguous primary call to action",
      "Rating and credibility badge above the fold",
      "Clean property browsing navigation",
      "Optimized for slower mobile connections common to the region",
    ],
  },
  {
    slug: "vic-estate",
    name: "Vic Estate",
    industry: "Real Estate",
    location: "Enugu, Nigeria",
    url: "https://vic-estate-ntip.arcada.app",
    image: "/projects/vic-estate.png",
    summary:
      "A dark, atmospheric take on a local real estate agency, refined for clarity over decoration.",
    overview:
      "Vic Estate's original build leaned on a starfield hero and playful gradient headline. I kept the atmosphere but disciplined it: resolving contrast issues, fixing overlapping decorative elements, and making sure the review count and rating actually build confidence rather than feeling decorative.",
    challenge:
      "Decorative house icons were overlapping the headline text at several breakpoints, and the gradient on 'Dream Home' failed contrast checks against the dark background.",
    solution:
      "I repositioned the illustrative elements behind the text layer, adjusted the gradient stops for accessible contrast, and rebalanced spacing so the rating badge, headline, and CTAs form a clear reading path.",
    role: [
      "Fixed layout collisions between decorative and text elements",
      "Corrected color contrast for accessibility",
      "Rebalanced vertical rhythm across breakpoints",
      "Cross-device responsiveness testing and deployment",
    ],
    tech: ["HTML", "CSS", "Accessibility Audit", "Custom Coding", "Responsive Design"],
    features: [
      "Accessible contrast on all headline treatments",
      "Address and contact details anchored in the hero",
      "Dual CTA path for browsing vs. direct contact",
      "Clean scaling from desktop to small mobile",
    ],
  },
  {
    slug: "powhatan-precision-tint",
    name: "Powhatan Precision Tint",
    industry: "Automotive Services",
    location: "Powhatan, VA",
    url: "https://powhatan-precision-tint-7ir6.arcada.app",
    image: "/projects/powhatan-precision-tint.png",
    summary:
      "A precision-brand automotive site where the type had to feel as sharp as the service.",
    overview:
      "A window tint shop lives and dies on perceived craftsmanship. I refined the bold condensed headline treatment, corrected two buttons that were rendering without visible labels, and tightened the layout so the 5-star badge and hero copy carry equal weight to the car photography.",
    challenge:
      "Two primary buttons in the hero had no visible text against their background (a launch-blocking bug), and the headline's gradient fade needed rebalancing for readability.",
    solution:
      "I fixed the button contrast so both calls to action are legible in every state, refined the fade on 'Protection.' for readability, and tightened the eyebrow/heading/subhead rhythm to feel as precise as the brand name.",
    role: [
      "Fixed critical CTA visibility bug",
      "Refined gradient text treatment for legibility",
      "Tightened type rhythm across hero and services",
      "Full responsiveness pass and deployment",
    ],
    tech: ["HTML", "CSS", "Bug Fixing", "Custom Coding", "UI Polish"],
    features: [
      "Fully legible, high-contrast call-to-action buttons",
      "Condensed display type built for confidence and precision",
      "Star rating and social proof placed for maximum trust",
      "Consistent dark theme across services and gallery",
    ],
  },
  {
    slug: "four-seasons-comfort",
    name: "Four Seasons Comfort",
    industry: "Home Services (HVAC & Plumbing)",
    location: "Chicago, IL",
    url: "https://fourseasons-comfort-bwfw.arcada.app",
    image: "/projects/four-seasons-comfort.png",
    summary:
      "A 50-year-old home services brand modernized into a conversion-focused lead engine.",
    overview:
      "This is the most feature-dense build in the set: live ZIP code availability checks, financing, promotions, and emergency dispatch all competing for attention. I focused on establishing a clear visual hierarchy so urgency (Same-Day Service, 24/7 Support) never gets lost under the volume of information a home services company needs to convey.",
    challenge:
      "With top utility bars, multiple phone numbers, a live availability widget, and stat badges all above the fold, the original draft risked overwhelming visitors before they found the one action that mattered.",
    solution:
      "I organized the page into clear priority tiers (trust bar, headline, live availability card, then stats) and made sure the orange accent was reserved for the single highest-value action, 'Verify Same-Day Dispatch,' so it doesn't compete with secondary calls.",
    role: [
      "Established visual hierarchy across a dense information architecture",
      "Refined the live availability widget's prominence and clarity",
      "Balanced trust signals (reviews, licensing, years in business)",
      "Performance optimization and full responsive deployment",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Custom Coding", "Conversion Optimization"],
    features: [
      "Live ZIP-code availability check in the hero",
      "Clear priority order across emergency, financing, and reviews",
      "Google rating and decades-in-business trust markers",
      "Sticky call-to-action across mobile and desktop",
    ],
  },
  {
    slug: "d-pikano-global-resources",
    name: "D-Pikano Global Resources Ltd",
    industry: "Mechanical Engineering & Industrial Services",
    location: "Nigeria",
    url: "https://d-pikanoglobalresources.netlify.app/",
    image: "/projects/d-pikano.png",
    summary:
      "A mechanical services contractor's site, hand-coded to read as credible to factories, hospitals, and government clients.",
    overview:
      "D-Pikano needed a site that could win trust from serious institutional clients: factories, hospitals, malls, and government facilities hiring for fire fighting systems, HVAC, lift installation, and industrial plumbing. I built this one as a fully static, hand-coded HTML, CSS, and Tailwind site: no template, no page builder. Every section, from the blueprint-grid background to the recreated SVG shield logo to the diagonal brand accent, was written and positioned by hand.",
    challenge:
      "The company had years of real completed projects but no organized photography to prove it, a logo that only existed as a low-res image, and needed a working quote-request pipeline rather than a static contact page. On mobile, the project grid was overflowing horizontally, and the quote page's text was washing out against its background.",
    solution:
      "I extracted, cleaned, and organized real project photography across eight completed jobs (malls, hotels, laboratories, a brine plant, food processing facilities) so every claim on the site is backed by actual work. I rebuilt the DPG shield mark as a crisp SVG logo, fixed the mobile overflow bug with a targeted min-width fix on the grid and flex containers, hardcoded a solid dark navy background on the quote page to fix contrast, and wired a live quote-request form to a real form backend so leads actually reach the business.",
    role: [
      "Hand-coded the entire site in HTML, CSS, and Tailwind CSS",
      "Extracted and organized real project photography across eight jobs",
      "Recreated the brand's shield logo as a clean SVG",
      "Debugged mobile layout overflow and low-contrast text bugs",
      "Wired a live quote-request form to a working form backend",
    ],
    tech: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Formspree", "Responsive Debugging"],
    features: [
      "Live quote-request form connected to a real backend",
      "Real project photography across eight completed jobs",
      "Custom SVG brand mark and blueprint-grid visual language",
      "Fully responsive layout, debugged down to small mobile screens",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
