export const HOME_TITLE = "Castle Heights Cannabis Dispensary - Weed Delivery in Ottawa";
export const HOME_MENU_HREF = "/exotic";
export const HOME_DELIVERY_HREF = "/delivery";
export const HOME_DELIVERY_H2 = "Cannabis Delivery in Ottawa";

export const HOME_DELIVERY_PARAGRAPHS = [
  "Castle Heights Cannabis keeps its delivery path connected to Ottawa. Use the Delivery button for the current ordering page, then follow that page to confirm the address and next step.",
  "This homepage keeps the service context local to Ottawa instead of presenting a far-city delivery directory. Store-menu browsing and delivery information remain separate so shoppers can choose the route that fits.",
  "Choose STORE MENU to browse the existing catalog, or choose Delivery for the current local delivery route. Adults 19+ need valid government-issued photo ID, and listed menu information is not a live-stock promise.",
] as const;

export const HOME_DELIVERY_CARDS = [
  { href: "/delivery", title: "Delivery menu", text: "Open the existing Ottawa store page for current details." },
  { href: "/weed-dispensary-ottawa", title: "Local dispensary guide", text: "Open the existing Ottawa store page for current details." },
  { href: "/native-cigarettes-ottawa", title: "Local store guide", text: "Open the existing Ottawa store page for current details." },
  { href: "/faq", title: "Store FAQ", text: "Open the existing Ottawa store page for current details." },
  { href: "/contact", title: "Contact the store", text: "Open the existing Ottawa store page for current details." },
] as const;

export const HOME_DELIVERY_FAQS = [
  { q: "Does Castle Heights Cannabis offer cannabis delivery in Ottawa?", a: "Castle Heights Cannabis has an existing delivery route for local requests. Use the Delivery button for current details and address confirmation." },
  { q: "How do I start a Ottawa delivery request?", a: "Open the Delivery page, review the current information, and follow its ordering steps. The delivery flow confirms the address and next step." },
  { q: "Where does STORE MENU go?", a: "STORE MENU opens the existing catalog at /exotic." },
  { q: "Do I need photo ID?", a: "Yes. Cannabis service is for adults 19+ with valid government-issued photo ID." },
  { q: "Does the homepage promise live inventory?", a: "No. Use the linked menu or delivery page for current details and confirm a specific item before relying on availability." },
  { q: "Is the delivery information limited to Ottawa?", a: "This homepage describes the Ottawa delivery context only. The current delivery page confirms whether a specific address can be served." },
] as const;
